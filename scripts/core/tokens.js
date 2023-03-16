// price feeds https://docs.chain.link/docs/binance-smart-chain-addresses/
const { expandDecimals } = require("../../test/shared/utilities");

module.exports = {
  mainnet: {
    nativeToken: {
      name: "eth",
      address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
      decimals: 18,
    },
    nativeToken: {
      name: "btc",
      address: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
      decimals: 8,
    },
    nativeToken: {
      name: "ape",
      address: "0x4d224452801ACEd8B2F0aebE155379bb5D594381",
      decimals: 18,
    },
    nativeToken: {
      name: "usdc",
      address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      decimals: 6,
    },
  },
};
