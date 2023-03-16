const {
  getFrameSigner,
  deployContract,
  contractAt,
  sendTxn,
  readTmpAddresses,
  writeTmpAddresses,
} = require("../shared/helpers");
const { expandDecimals } = require("../../test/shared/utilities");
const { toUsd } = require("../../test/shared/units");

const network = process.env.HARDHAT_NETWORK || "mainnet";
const tokens = require("./tokens")[network];

async function getPolygonValues() {
  const vault = await contractAt(
    "Vault",
    "0x2D0afF409BdE00451334011D55c141AfF2103744"
  );
  const router = await contractAt("Router", await vault.router());
  const weth = await contractAt("WETH", tokens.nativeToken.address);
  const referralStorage = await contractAt(
    "ReferralStorage",
    "0x9b2d60bdB48aABf3D0CF675B41b7a900d2b0f7CC"
  );
  const shortsTracker = await contractAt(
    "ShortsTracker",
    "0xE1Cc55ecBc1e1c45C0D2659FE20832b578C38507"
  );
  const depositFee = "30"; // 0.3%
  const minExecutionFee = "20000000000000000"; // 0.02 MATIC

  return {
    vault,
    router,
    weth,
    referralStorage,
    shortsTracker,
    depositFee,
    minExecutionFee,
  };
}

async function getValues() {
  return getPolygonValues();
}

async function main() {
  const {
    vault,
    router,
    weth,
    shortsTracker,
    depositFee,
    minExecutionFee,
    referralStorage,
  } = await getValues();

  // const referralStorageGov = await contractAt(
  //   "Timelock",
  //   await referralStorage.gov()
  // );

  const positionRouterArgs = [
    vault.address,
    router.address,
    weth.address,
    shortsTracker.address,
    depositFee,
    minExecutionFee,
  ];
  const positionRouter = await deployContract(
    "PositionRouter",
    positionRouterArgs
  );

  // const positionRouter = await contractAt(
  //   "PositionRouter",
  //   "0xF7fDa0A11f741b50AF8fa8986bD5e51B132081d8"
  // );
  await sendTxn(
    positionRouter.setReferralStorage(referralStorage.address),
    "positionRouter.setReferralStorage"
  );
  // await sendTxn(referralStorageGov.signalSetHandler(referralStorage.address, positionRouter.address, true), "referralStorage.signalSetHandler(positionRouter)")

  await sendTxn(
    shortsTracker.setHandler(positionRouter.address, true),
    "shortsTracker.setHandler(positionRouter)"
  );

  await sendTxn(router.addPlugin(positionRouter.address), "router.addPlugin");

  await sendTxn(
    positionRouter.setDelayValues(1, 180, 30 * 60),
    "positionRouter.setDelayValues"
  );
  // await sendTxn(timelock.setContractHandler(positionRouter.address, true), "timelock.setContractHandler(positionRouter)")

  // await sendTxn(positionRouter.setGov(await vault.gov()), "positionRouter.setGov")
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
