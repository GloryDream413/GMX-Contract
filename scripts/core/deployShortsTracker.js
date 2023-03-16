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
const { getArgumentForSignature } = require("typechain");

const network = process.env.HARDHAT_NETWORK || "mainnet";
const tokens = require("./tokens")[network];

async function getPolygonValues() {
  return { vaultAddress: "0x2D0afF409BdE00451334011D55c141AfF2103744" };
}

async function getValues() {
  return await getPolygonValues();
}

async function main() {
  const { vaultAddress, gasLimit } = await getValues();
  const gov = { address: "0x39C9A89AAC2989D7Bf152e97aD8342791ae4977d" };
  const shortsTracker = await deployContract(
    "ShortsTracker",
    [vaultAddress],
    "ShortsTracker",
    { gasLimit }
  );
  await sendTxn(shortsTracker.setGov(gov.address), "shortsTracker.setGov");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
