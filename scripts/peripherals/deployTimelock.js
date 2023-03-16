const {
  deployContract,
  contractAt,
  sendTxn,
  getFrameSigner,
} = require("../shared/helpers");
const { expandDecimals } = require("../../test/shared/utilities");

const network = process.env.HARDHAT_NETWORK || "mainnet";

async function getPolygonValues() {
  const vault = await contractAt(
    "Vault",
    "0x2D0afF409BdE00451334011D55c141AfF2103744"
  );
  const tokenManager = {
    address: "0xC76fe4BfE2891877BbD9e38407fFba8aa2C0A739",
  };
  const zlpManager = { address: "0xb6F9EF9b9dCb86863a66C4027b02B751fF504e52" };

  const positionRouter = {
    address: "0x6db945a97b65A4D987A741CF087cf3a9059370C3",
  };
  const positionManager = {
    address: "0xFE945E585d0CEd45ae29A73650599Eaa29914bCA",
  };
  const zomiChain = { address: "0x6d8ebbaab26a1f40abd1ed14b702a84c7b4f2107" };

  return {
    vault,
    tokenManager,
    zlpManager,
    positionRouter,
    positionManager,
    zomiChain,
  };
}

async function getValues() {
  return getPolygonValues();
}

async function main() {
  const admin = "0x39C9A89AAC2989D7Bf152e97aD8342791ae4977d";
  const buffer = 0;
  const maxTokenSupply = expandDecimals("13250000", 18);

  const {
    vault,
    tokenManager,
    zlpManager,
    positionRouter,
    positionManager,
    zomiChain,
  } = await getValues();
  const mintReceiver = tokenManager;

  const timelock = await deployContract(
    "Timelock",
    [
      admin,
      buffer,
      tokenManager.address,
      mintReceiver.address,
      zlpManager.address,
      maxTokenSupply,
      10, // marginFeeBasisPoints 0.1%
      500, // maxMarginFeeBasisPoints 5%
    ],
    "Timelock"
  );

  const deployedTimelock = await contractAt("Timelock", timelock.address);
  // const deployedTimelock = await contractAt(
  //   "Timelock",
  //   "0x3402CeEFF69B904581c5717380006B52236046c7"
  // );

  await sendTxn(
    deployedTimelock.setShouldToggleIsLeverageEnabled(true),
    "deployedTimelock.setShouldToggleIsLeverageEnabled(true)"
  );
  await sendTxn(
    deployedTimelock.setContractHandler(positionRouter.address, true),
    "deployedTimelock.setContractHandler(positionRouter)"
  );
  await sendTxn(
    deployedTimelock.setContractHandler(positionManager.address, true),
    "deployedTimelock.setContractHandler(positionManager)"
  );

  // update gov of vault
  const vaultGov = await contractAt("Timelock", await vault.gov());
  await sendTxn(
    vaultGov.signalSetGov(vault.address, deployedTimelock.address),
    "vaultGov.signalSetGov"
  );
  await sendTxn(
    deployedTimelock.signalSetGov(vault.address, vaultGov.address),
    "deployedTimelock.signalSetGov(vault)"
  );

  const signers = ["0x39C9A89AAC2989D7Bf152e97aD8342791ae4977d"];

  for (let i = 0; i < signers.length; i++) {
    const signer = signers[i];
    await sendTxn(
      deployedTimelock.setContractHandler(signer, true),
      `deployedTimelock.setContractHandler(${signer})`
    );
  }

  const keepers = [
    "0x39C9A89AAC2989D7Bf152e97aD8342791ae4977d", // X
  ];

  for (let i = 0; i < keepers.length; i++) {
    const keeper = keepers[i];
    await sendTxn(
      deployedTimelock.setKeeper(keeper, true),
      `deployedTimelock.setKeeper(${keeper})`
    );
  }

  await sendTxn(
    deployedTimelock.signalApprove(
      zomiChain.address,
      admin,
      "100000000000000000000000000000"
    ),
    "deployedTimelock.signalApprove"
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
