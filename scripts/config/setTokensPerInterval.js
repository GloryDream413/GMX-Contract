const { deployContract, contractAt, sendTxn } = require("../shared/helpers");
const { expandDecimals } = require("../../test/shared/utilities");
const { toUsd } = require("../../test/shared/units");
const { errors } = require("../../test/core/Vault/helpers");

async function main() {
  const stakedZomiChainRewardDistributor = await contractAt(
    "RewardDistributor",
    "0x1D0F7723A92EF7DCF05f52c0D651B379c9627f47"
  );
  const stakedBonusFeeZomiChainRewardDistributor = await contractAt(
    "RewardDistributor",
    "0x540B23d0430d6b0A5853bcad0f3543f8272e9bfE"
  );
  const feeZLPRewardDistributor = await contractAt(
    "RewardDistributor",
    "0x565d32D454163c74cF3A7564FECc07BffBCbfb9C"
  );
  const feeStakedZLPRewardDistributor = await contractAt(
    "RewardDistributor",
    "0xaff1a5B9C0DC649F854eA9168D8D5B40b2c93B7C"
  );

  await sendTxn(
    stakedZomiChainRewardDistributor.setTokensPerInterval("10000000000000000"),
    "stakedZomiChainRewardDistributor.setTokensPerInterval"
  );

  await sendTxn(
    stakedBonusFeeZomiChainRewardDistributor.setTokensPerInterval(
      "10000000000000000"
    ),
    "stakedBonusFeeZomiChainRewardDistributor.setTokensPerInterval"
  );

  await sendTxn(
    feeZLPRewardDistributor.setTokensPerInterval("10000000000000000"),
    "feeZLPRewardDistributor.setTokensPerInterval"
  );

  await sendTxn(
    feeStakedZLPRewardDistributor.setTokensPerInterval("10000000000000000"),
    "feeStakedZLPRewardDistributor.setTokensPerInterval"
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
