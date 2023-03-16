const {
  deployContract,
  contractAt,
  sendTxn,
  getFrameSigner,
} = require("../shared/helpers");
const { expandDecimals } = require("../../test/shared/utilities");

const network = process.env.HARDHAT_NETWORK || "mainnet";

async function getPolygonValues() {
  const tokenManager = {
    address: "0xC76fe4BfE2891877BbD9e38407fFba8aa2C0A739",
  };

  return { tokenManager };
}

async function getValues() {
  return getPolygonValues();
}

async function main() {
  const admin = "0x39C9A89AAC2989D7Bf152e97aD8342791ae4977d";
  const buffer = 24 * 60 * 60;

  const { tokenManager } = await getValues();

  const timelock = await deployContract(
    "PriceFeedTimelock",
    [admin, buffer, tokenManager.address],
    "Timelock"
  );

  // const deployedTimelock = await contractAt("PriceFeedTimelock", timelock.address, signer)
  const deployedTimelock = await contractAt(
    "PriceFeedTimelock",
    timelock.address
  );

  const signers = [
    "0x39C9A89AAC2989D7Bf152e97aD8342791ae4977d", // coinflipcanada
  ];

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
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
