const {
  deployContract,
  contractAt,
  sendTxn,
  writeTmpAddresses,
} = require("../shared/helpers");
const { expandDecimals } = require("../../test/shared/utilities");

const network = process.env.HARDHAT_NETWORK || "mainnet";
const tokens = require("./tokens")[network];

async function main() {
  const { nativeToken } = tokens;

  const orderBook = await deployContract("OrderBook", []);

  await sendTxn(
    orderBook.initialize(
      "0x13cec16f5a479e6cF28c82FC28183565cAAd72A9", // router
      "0x2D0afF409BdE00451334011D55c141AfF2103744", // vault
      nativeToken.address, // weth
      "0x790275Ef6bDb0142C4068E9343BCa9747de2998f", // usdg
      "10000000000000000", // 0.01 MATIC
      expandDecimals(10, 30) // min purchase token amount usd
    ),
    "orderBook.initialize"
  );

  writeTmpAddresses({
    orderBook: orderBook.address,
  });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
