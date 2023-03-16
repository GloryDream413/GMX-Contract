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

async function getArbValues() {
  const { eth, btc, ape, usdc } = tokens;
  const tokenArr = [eth, btc, ape, usdc];
  const fastPriceTokens = [eth, btc, ape, usdc];

  const priceFeedTimelock = {
    address: "0x5fC8c46D7d48137CaC9A49eCC4445efAA24BF170",
  };

  const updater1 = { address: "0x39C9A89AAC2989D7Bf152e97aD8342791ae4977d" };
  const keeper1 = { address: "0x39C9A89AAC2989D7Bf152e97aD8342791ae4977d" };
  const updaters = [
    updater1.address,
    keeper1.address,
  ];

  const tokenManager = {
    address: "0xC76fe4BfE2891877BbD9e38407fFba8aa2C0A739",
  };

  const positionRouter = await contractAt(
    "PositionRouter",
    "0x6db945a97b65A4D987A741CF087cf3a9059370C3"
  );

  const fastPriceEvents = await contractAt(
    "FastPriceEvents",
    "0xa3632C48A7a0784244B780BD6bBF7F076d3F2Def"
  );
  // const fastPriceEvents = await deployContract("FastPriceEvents", [])

  return {
    fastPriceTokens,
    fastPriceEvents,
    tokenManager,
    positionRouter,
    tokenArr,
    updaters,
    priceFeedTimelock,
  };
}

async function getValues() {
    return getArbValues();
}

async function main() {
  // const signer = await getFrameSigner()
  const deployer = { address: "0x39C9A89AAC2989D7Bf152e97aD8342791ae4977d" };

  const {
    fastPriceTokens,
    fastPriceEvents,
    tokenManager,
    positionRouter,
    tokenArr,
    updaters,
    priceFeedTimelock,
  } = await getValues();

  const signers = [
    "0x39C9A89AAC2989D7Bf152e97aD8342791ae4977d", // coinflipcanada
  ];

  if (fastPriceTokens.find((t) => !t.fastPricePrecision)) {
    throw new Error("Invalid price precision");
  }

  if (fastPriceTokens.find((t) => !t.maxCumulativeDeltaDiff)) {
    throw new Error("Invalid price maxCumulativeDeltaDiff");
  }

  const secondaryPriceFeed = await deployContract("FastPriceFeed", [
    5 * 60, // _priceDuration
    60 * 60, // _maxPriceUpdateDelay
    1, // _minBlockInterval
    250, // _maxDeviationBasisPoints
    fastPriceEvents.address, // _fastPriceEvents
    deployer.address, // _tokenManager
    positionRouter.address,
  ]);

  // const vaultPriceFeed = await deployContract("VaultPriceFeed", [])
  const vaultPriceFeed = await contractAt(
    "VaultPriceFeed",
    "0xfB12632365c6B8DD26Ac9AA676d8285a93190d45"
  );

  await sendTxn(
    vaultPriceFeed.setMaxStrictPriceDeviation(expandDecimals(1, 28)),
    "vaultPriceFeed.setMaxStrictPriceDeviation"
  ); // 0.01 USD
  await sendTxn(
    vaultPriceFeed.setPriceSampleSpace(1),
    "vaultPriceFeed.setPriceSampleSpace"
  );
  await sendTxn(
    vaultPriceFeed.setSecondaryPriceFeed(secondaryPriceFeed.address),
    "vaultPriceFeed.setSecondaryPriceFeed"
  );
  await sendTxn(
    vaultPriceFeed.setIsAmmEnabled(false),
    "vaultPriceFeed.setIsAmmEnabled"
  );

  for (const [i, tokenItem] of tokenArr.entries()) {
    if (tokenItem.spreadBasisPoints === undefined) {
      continue;
    }
    await sendTxn(
      vaultPriceFeed.setSpreadBasisPoints(
        tokenItem.address, // _token
        tokenItem.spreadBasisPoints // _spreadBasisPoints
      ),
      `vaultPriceFeed.setSpreadBasisPoints(${tokenItem.name}) ${tokenItem.spreadBasisPoints}`
    );
  }

  for (const token of tokenArr) {
    await sendTxn(
      vaultPriceFeed.setTokenConfig(
        token.address, // _token
        token.priceFeed, // _priceFeed
        token.priceDecimals, // _priceDecimals
        token.isStrictStable // _isStrictStable
      ),
      `vaultPriceFeed.setTokenConfig(${token.name}) ${token.address} ${token.priceFeed}`
    );
  }

  await sendTxn(
    secondaryPriceFeed.initialize(1, signers, updaters),
    "secondaryPriceFeed.initialize"
  );
  await sendTxn(
    secondaryPriceFeed.setTokens(
      fastPriceTokens.map((t) => t.address),
      fastPriceTokens.map((t) => t.fastPricePrecision)
    ),
    "secondaryPriceFeed.setTokens"
  );
  await sendTxn(
    secondaryPriceFeed.setVaultPriceFeed(vaultPriceFeed.address),
    "secondaryPriceFeed.setVaultPriceFeed"
  );
  await sendTxn(
    secondaryPriceFeed.setMaxTimeDeviation(60 * 60),
    "secondaryPriceFeed.setMaxTimeDeviation"
  );
  await sendTxn(
    secondaryPriceFeed.setSpreadBasisPointsIfInactive(50),
    "secondaryPriceFeed.setSpreadBasisPointsIfInactive"
  );
  await sendTxn(
    secondaryPriceFeed.setSpreadBasisPointsIfChainError(500),
    "secondaryPriceFeed.setSpreadBasisPointsIfChainError"
  );
  await sendTxn(
    secondaryPriceFeed.setMaxCumulativeDeltaDiffs(
      fastPriceTokens.map((t) => t.address),
      fastPriceTokens.map((t) => t.maxCumulativeDeltaDiff)
    ),
    "secondaryPriceFeed.setMaxCumulativeDeltaDiffs"
  );
  await sendTxn(
    secondaryPriceFeed.setPriceDataInterval(1 * 60),
    "secondaryPriceFeed.setPriceDataInterval"
  );

  await sendTxn(
    positionRouter.setPositionKeeper(secondaryPriceFeed.address, true),
    "positionRouter.setPositionKeeper(secondaryPriceFeed)"
  );
  await sendTxn(
    fastPriceEvents.setIsPriceFeed(secondaryPriceFeed.address, true),
    "fastPriceEvents.setIsPriceFeed"
  );

  await sendTxn(
    vaultPriceFeed.setGov(priceFeedTimelock.address),
    "vaultPriceFeed.setGov"
  );
  await sendTxn(
    secondaryPriceFeed.setGov(priceFeedTimelock.address),
    "secondaryPriceFeed.setGov"
  );
  await sendTxn(
    secondaryPriceFeed.setTokenManager(tokenManager.address),
    "secondaryPriceFeed.setTokenManager"
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
