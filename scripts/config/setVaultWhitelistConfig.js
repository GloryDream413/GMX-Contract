const { deployContract, contractAt, sendTxn } = require("../shared/helpers");

const tokenList = [
  {
    _tokenName: "ETH",
    _token: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    _tokenDecimals: 18,
    _tokenWeight: 2500,
    _minProfitBps: 150,
    _maxUsdgAmount: "300000000000000000000000",
    _isStable: false,
    _isShortable: true,
  },
  {
    _tokenName: "BTC",
    _token: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
    _tokenDecimals: 8,
    _tokenWeight: 2500,
    _minProfitBps: 150,
    _maxUsdgAmount: "300000000000000000000000",
    _isStable: false,
    _isShortable: true,
  },
  {
    _tokenName: "APE",
    _token: "0x4d224452801ACEd8B2F0aebE155379bb5D594381",
    _tokenDecimals: 18,
    _tokenWeight: 2500,
    _minProfitBps: 150,
    _maxUsdgAmount: "300000000000000000000000",
    _isStable: false,
    _isShortable: true,
  },
  {
    _tokenName: "USDC",
    _token: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    _tokenDecimals: 6,
    _tokenWeight: 2500,
    _minProfitBps: 150,
    _maxUsdgAmount: "300000000000000000000000",
    _isStable: false,
    _isShortable: true,
  },
];

async function main() {
  const vault = await contractAt(
    "Vault",
    "0x2D0afF409BdE00451334011D55c141AfF2103744"
  );

  for (let i = 0; i < tokenList.length; i++) {
    console.log(tokenList[i]["_tokenName"]);

    await sendTxn(
      vault.setTokenConfig(
        tokenList[i]["_token"],
        tokenList[i]["_tokenDecimals"],
        tokenList[i]["_tokenWeight"],
        tokenList[i]["_minProfitBps"],
        tokenList[i]["_maxUsdgAmount"],
        tokenList[i]["_isStable"],
        tokenList[i]["_isShortable"]
      ),
      "vault.setTokenConfig " + tokenList[i]["_tokenName"]
    );
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
