const { deployContract, contractAt, sendTxn } = require("../shared/helpers");

const tokenList = [
  // {
  //   _tokenName: "BNB",
  //   _token: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
  //   _tokenDecimals: 18,
  //   _tokenWeight: 2500,
  //   _minProfitBps: 150,
  //   _maxUsdgAmount: "30000000000000000000000000000000",
  //   _isStable: false,
  //   _isShortable: true,
  // },
  // {
  //   _tokenName: "MATIC",
  //   _token: "0xcc42724c6683b7e57334c4e856f4c9965ed682bd",
  //   _tokenDecimals: 18,
  //   _tokenWeight: 2500,
  //   _minProfitBps: 150,
  //   _maxUsdgAmount: "30000000000000000000000000000000",
  //   _isStable: false,
  //   _isShortable: true,
  // },
  // {
  //   _tokenName: "ETH",
  //   _token: "0x2170Ed0880ac9A755fd29B2688956BD959F933F8",
  //   _tokenDecimals: 18,
  //   _tokenWeight: 2500,
  //   _minProfitBps: 150,
  //   _maxUsdgAmount: "30000000000000000000000000000000",
  //   _isStable: false,
  //   _isShortable: true,
  // },
  // {
  //   _tokenName: "BTC",
  //   _token: "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c",
  //   _tokenDecimals: 18,
  //   _tokenWeight: 2500,
  //   _minProfitBps: 150,
  //   _maxUsdgAmount: "30000000000000000000000000000000",
  //   _isStable: false,
  //   _isShortable: true,
  // },
  // {
  //   _tokenName: "SOL",
  //   _token: "0xFEa6aB80cd850c3e63374Bc737479aeEC0E8b9a1",
  //   _tokenDecimals: 18,
  //   _tokenWeight: 2500,
  //   _minProfitBps: 150,
  //   _maxUsdgAmount: "30000000000000000000000000000000",
  //   _isStable: false,
  //   _isShortable: true,
  // },
  // {
  //   _tokenName: "DOGE",
  //   _token: "0xbA2aE424d960c26247Dd6c32edC70B295c744C43",
  //   _tokenDecimals: 8,
  //   _tokenWeight: 2500,
  //   _minProfitBps: 150,
  //   _maxUsdgAmount: "30000000000000000000000000000000",
  //   _isStable: false,
  //   _isShortable: true,
  // },
  // {
  //   _tokenName: "AVAX",
  //   _token: "0x1CE0c2827e2eF14D5C4f29a091d735A204794041",
  //   _tokenDecimals: 18,
  //   _tokenWeight: 2500,
  //   _minProfitBps: 150,
  //   _maxUsdgAmount: "30000000000000000000000000000000",
  //   _isStable: false,
  //   _isShortable: true,
  // },
  // {
  //   _tokenName: "1INCH",
  //   _token: "0x111111111117dC0aa78b770fA6A738034120C302",
  //   _tokenDecimals: 18,
  //   _tokenWeight: 2500,
  //   _minProfitBps: 150,
  //   _maxUsdgAmount: "30000000000000000000000000000000",
  //   _isStable: false,
  //   _isShortable: true,
  // },
  // {
  //   _tokenName: "AAVE",
  //   _token: "0xfb6115445Bff7b52FeB98650C87f44907E58f802",
  //   _tokenDecimals: 18,
  //   _tokenWeight: 2500,
  //   _minProfitBps: 150,
  //   _maxUsdgAmount: "30000000000000000000000000000000",
  //   _isStable: false,
  //   _isShortable: true,
  // },
  // {
  //   _tokenName: "WOO",
  //   _token: "0x4691937a7508860F876c9c0a2a617E7d9E945D4B",
  //   _tokenDecimals: 18,
  //   _tokenWeight: 2500,
  //   _minProfitBps: 150,
  //   _maxUsdgAmount: "30000000000000000000000000000000",
  //   _isStable: false,
  //   _isShortable: true,
  // },
  // {
  //   _tokenName: "LINK",
  //   _token: "0xF8A0BF9cF54Bb92F17374d9e9A321E6a111a51bD",
  //   _tokenDecimals: 18,
  //   _tokenWeight: 2500,
  //   _minProfitBps: 150,
  //   _maxUsdgAmount: "30000000000000000000000000000000",
  //   _isStable: false,
  //   _isShortable: true,
  // },
  // {
  //   _tokenName: "SUSHI",
  //   _token: "0x947950BcC74888a40Ffa2593C5798F11Fc9124C4",
  //   _tokenDecimals: 18,
  //   _tokenWeight: 2500,
  //   _minProfitBps: 150,
  //   _maxUsdgAmount: "30000000000000000000000000000000",
  //   _isStable: false,
  //   _isShortable: true,
  // },
  // {
  //   _tokenName: "FRAX",
  //   _token: "0x90C97F71E18723b0Cf0dfa30ee176Ab653E89F40",
  //   _tokenDecimals: 18,
  //   _tokenWeight: 2500,
  //   _minProfitBps: 150,
  //   _maxUsdgAmount: "30000000000000000000000000000000",
  //   _isStable: true,
  //   _isShortable: false,
  // },
  {
    _tokenName: "USDC",
    _token: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
    _tokenDecimals: 18,
    _tokenWeight: 2500,
    _minProfitBps: 150,
    _maxUsdgAmount: "30000000000000000000000000000000",
    _isStable: true,
    _isShortable: false,
  },
  {
    _tokenName: "USDT",
    _token: "0x55d398326f99059fF775485246999027B3197955",
    _tokenDecimals: 18,
    _tokenWeight: 2500,
    _minProfitBps: 150,
    _maxUsdgAmount: "30000000000000000000000000000000",
    _isStable: true,
    _isShortable: false,
  },
  {
    _tokenName: "BUSD",
    _token: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
    _tokenDecimals: 18,
    _tokenWeight: 2500,
    _minProfitBps: 150,
    _maxUsdgAmount: "30000000000000000000000000000000",
    _isStable: true,
    _isShortable: false,
  },
];

async function main() {
  const vault = await contractAt(
    "Vault",
    "0x18d289ED284bd5Cd43cD29b3AB5CC69f4EeEB1ea"
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
