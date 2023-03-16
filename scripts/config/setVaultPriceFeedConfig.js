const { deployContract, contractAt, sendTxn } = require("../shared/helpers");
const { expandDecimals } = require("../../test/shared/utilities");
const { toUsd } = require("../../test/shared/units");
const { errors } = require("../../test/core/Vault/helpers");

const tokenList = [
  {
    _token: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    _tokenName: "ETH",
    _priceFeed: "0x5f4ec3df9cbd43714fe2740f5e3616155c5b8419",
    _priceDecimals: 8,
    _isStrictStable: false,
  },
  {
    _token: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
    _tokenName: "BTC",
    _priceFeed: "0xF4030086522a5bEEa4988F8cA5B36dbC97BeE88c",
    _priceDecimals: 8,
    _isStrictStable: false,
  },
  {
    _token: "0x4d224452801ACEd8B2F0aebE155379bb5D594381",
    _tokenName: "APE",
    _priceFeed: "0xD10aBbC76679a20055E167BB80A24ac851b37056",
    _priceDecimals: 8,
    _isStrictStable: false,
  },
  {
    _token: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    _tokenName: "USDC",
    _priceFeed: "0x8fFfFfd4AfB6115b954Bd326cbe7B4BA576818f6",
    _priceDecimals: 8,
    _isStrictStable: true,
  },
];

async function main() {
  const vaultPriceFeed = await contractAt(
    "VaultPriceFeed",
    "0xfB12632365c6B8DD26Ac9AA676d8285a93190d45"
  );

  for (let i = 0; i < tokenList.length; i++) {
    await sendTxn(
      vaultPriceFeed.setTokenConfig(
        tokenList[i]["_token"],
        tokenList[i]["_priceFeed"],
        tokenList[i]["_priceDecimals"],
        tokenList[i]["_isStrictStable"]
      ),
      "vaultPriceFeed.setTokenConfig " + tokenList[i]["_tokenName"]
    );
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
