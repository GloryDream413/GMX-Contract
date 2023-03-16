const {
  getFrameSigner,
  deployContract,
  contractAt,
  sendTxn,
} = require("../shared/helpers");
const { expandDecimals } = require("../../test/shared/utilities");
const { toUsd } = require("../../test/shared/units");
const { errors } = require("../../test/core/Vault/helpers");

const network = process.env.HARDHAT_NETWORK || "mainnet";
const tokens = require("./tokens")[network];

const depositFee = 30; // 0.3%

async function getPolygonValues() {
  const vault = await contractAt(
    "Vault",
    "0x2D0afF409BdE00451334011D55c141AfF2103744"
  );
  const timelock = await contractAt("Timelock", await vault.gov());
  const router = await contractAt("Router", await vault.router());
  const shortsTracker = await contractAt(
    "ShortsTracker",
    "0xE1Cc55ecBc1e1c45C0D2659FE20832b578C38507"
  );
  const weth = await contractAt("WETH", tokens.nativeToken.address);
  const orderBook = await contractAt(
    "OrderBook",
    "0x0bbB18cD75eD43872a7b76369a1FdA4526697542"
  );
  const referralStorage = await contractAt(
    "ReferralStorage",
    "0x9b2d60bdB48aABf3D0CF675B41b7a900d2b0f7CC"
  );

  const orderKeepers = [
    { address: "0x39C9A89AAC2989D7Bf152e97aD8342791ae4977d" },
  ];
  const liquidators = [
    { address: "0x39C9A89AAC2989D7Bf152e97aD8342791ae4977d" },
  ];

  const partnerContracts = ["0x39C9A89AAC2989D7Bf152e97aD8342791ae4977d"];

  return {
    vault,
    timelock,
    router,
    shortsTracker,
    weth,
    depositFee,
    orderBook,
    referralStorage,
    orderKeepers,
    liquidators,
    partnerContracts,
  };
}

async function getValues() {
  return getPolygonValues();
}

async function main() {
  // const signer = await getFrameSigner()

  const {
    positionManagerAddress,
    vault,
    // timelock,
    router,
    shortsTracker,
    weth,
    depositFee,
    orderBook,
    referralStorage,
    orderKeepers,
    liquidators,
    partnerContracts,
  } = await getValues();

  let positionManager;

  // positionManager = await contractAt(
  //   "PositionManager",
  //   "0x412E0855f4A610a17cFd39FbA75ffC3d66EFF381"
  // );

  console.log("Deploying new position manager");
  const positionManagerArgs = [
    vault.address,
    router.address,
    shortsTracker.address,
    weth.address,
    depositFee,
    orderBook.address,
  ];
  positionManager = await deployContract(
    "PositionManager",
    positionManagerArgs
  );

  // positionManager only reads from referralStorage so it does not need to be set as a handler of referralStorage
  if (
    (await positionManager.referralStorage()).toLowerCase() !=
    referralStorage.address.toLowerCase()
  ) {
    await sendTxn(
      positionManager.setReferralStorage(referralStorage.address),
      "positionManager.setReferralStorage"
    );
  }
  if (await positionManager.shouldValidateIncreaseOrder()) {
    await sendTxn(
      positionManager.setShouldValidateIncreaseOrder(false),
      "positionManager.setShouldValidateIncreaseOrder(false)"
    );
  }

  for (let i = 0; i < orderKeepers.length; i++) {
    const orderKeeper = orderKeepers[i];
    if (!(await positionManager.isOrderKeeper(orderKeeper.address))) {
      await sendTxn(
        positionManager.setOrderKeeper(orderKeeper.address, true),
        "positionManager.setOrderKeeper(orderKeeper)"
      );
    }
  }

  for (let i = 0; i < liquidators.length; i++) {
    const liquidator = liquidators[i];
    if (!(await positionManager.isLiquidator(liquidator.address))) {
      await sendTxn(
        positionManager.setLiquidator(liquidator.address, true),
        "positionManager.setLiquidator(liquidator)"
      );
    }
  }

  //  //  //  // if (!(await timelock.isHandler(positionManager.address))) {
  //  //  //  //   await sendTxn(timelock.setContractHandler(positionManager.address, true), "timelock.setContractHandler(positionManager)")
  //  //  //  // }
  //  //  //  // if (!(await vault.isLiquidator(positionManager.address))) {
  //  //  //  //   await sendTxn(timelock.setLiquidator(vault.address, positionManager.address, true), "timelock.setLiquidator(vault, positionManager, true)")
  //  //  //  // }
  if (!(await shortsTracker.isHandler(positionManager.address))) {
    await sendTxn(
      shortsTracker.setHandler(positionManager.address, true),
      "shortsTracker.setContractHandler(positionManager.address, true)"
    );
  }
  if (!(await router.plugins(positionManager.address))) {
    await sendTxn(
      router.addPlugin(positionManager.address),
      "router.addPlugin(positionManager)"
    );
  }

  for (let i = 0; i < partnerContracts.length; i++) {
    const partnerContract = partnerContracts[i];
    if (!(await positionManager.isPartner(partnerContract))) {
      await sendTxn(
        positionManager.setPartner(partnerContract, false),
        "positionManager.setPartner(partnerContract)"
      );
    }
  }

  if ((await positionManager.gov()) != (await vault.gov())) {
    await sendTxn(
      positionManager.setGov(await vault.gov()),
      "positionManager.setGov"
    );
  }

  console.log("done.");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
