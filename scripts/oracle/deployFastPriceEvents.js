const {
  deployContract,
  contractAt,
  writeTmpAddresses,
  sendTxn,
} = require("../shared/helpers");

const network = process.env.HARDHAT_NETWORK || "mainnet";

const priceFeedList = [
  "0x5f4ec3df9cbd43714fe2740f5e3616155c5b8419",
  "0xF4030086522a5bEEa4988F8cA5B36dbC97BeE88c",
  "0xD10aBbC76679a20055E167BB80A24ac851b37056",
  "0x8fFfFfd4AfB6115b954Bd326cbe7B4BA576818f6",
];

async function main() {
  const feedEvent = await deployContract(
    "FastPriceEvents",
    [],
    "FastPriceEvents"
  );
  // const feedEvent = await contractAt(
  //   "FastPriceEvents",
  //   "0x18Dc3Eab019517A6b8cB625FbFaf806eBAf96Df1"
  // );

  for (let i = 0; i < priceFeedList.length; i++) {
    console.log(priceFeedList[i]);
    await sendTxn(
      feedEvent.setIsPriceFeed(priceFeedList[i], true),
      "feedEvent.setIsPriceFeed"
    );
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
