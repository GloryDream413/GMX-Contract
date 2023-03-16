const { deployContract, contractAt, sendTxn } = require("../shared/helpers");

const network = process.env.HARDHAT_NETWORK || "mainnet";

async function getPolygonValues() {
  const positionRouter = await contractAt(
    "PositionRouter",
    "0x195256074192170d1530527abC9943759c7167d8"
  );
  const positionManager = await contractAt(
    "PositionManager",
    "0xF2ec2e52c3b5F8b8bd5A3f93945d05628A233216"
  );

  return { positionRouter, positionManager };
}

async function getValues() {
  if (network === "polygon") {
    return getPolygonValues();
  }
}

async function main() {
  // const { positionRouter, positionManager } = await getValues();
  const referralStorage = await deployContract("ReferralStorage", []);

  // const referralStorage = await contractAt(
  //   "ReferralStorage",
  //   "0x18C46869736f7e2582d00Af4c2339e7bFc65F00C"
  // );

  await sendTxn(
    referralStorage.setTier(0, 2400, 5000),
    "referralStorage.setTier"
  );
  // await sendTxn(positionManager.setReferralStorage(referralStorage.address), "positionManager.setReferralStorage")

  // await sendTxn(referralStorage.setHandler(positionRouter.address, true), "referralStorage.setHandler(positionRouter)")
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
