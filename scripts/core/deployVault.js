const { deployContract, contractAt, sendTxn } = require("../shared/helpers");
const { expandDecimals } = require("../../test/shared/utilities");
const { toUsd } = require("../../test/shared/units");
const { errors } = require("../../test/core/Vault/helpers");

const network = process.env.HARDHAT_NETWORK || "mainnet";
const tokens = require("./tokens")[network];

async function main() {
  const { nativeToken } = tokens;

  // const vault = await deployContract("Vault", []);
  // const usdg = await deployContract("USDG", [vault.address]);
  // const router = await deployContract("Router", [
  //   vault.address,
  //   usdg.address,
  //   nativeToken.address,
  // ]);
  // const vaultPriceFeed = await deployContract("VaultPriceFeed", []);

  const vault = await contractAt(
    "Vault",
    "0x2D0afF409BdE00451334011D55c141AfF2103744"
  );
  const usdg = await contractAt(
    "USDG",
    "0x790275Ef6bDb0142C4068E9343BCa9747de2998f"
  );
  const router = await contractAt(
    "Router",
    "0x13cec16f5a479e6cF28c82FC28183565cAAd72A9"
  );
  const vaultPriceFeed = await contractAt(
    "VaultPriceFeed",
    "0xfB12632365c6B8DD26Ac9AA676d8285a93190d45"
  );
  // const secondaryPriceFeed = await deployContract("FastPriceFeed", [5 * 60])

  // await sendTxn(
  //   vaultPriceFeed.setMaxStrictPriceDeviation(expandDecimals(1, 28)),
  //   "vaultPriceFeed.setMaxStrictPriceDeviation"
  // ); // 0.05 USD
  // await sendTxn(
  //   vaultPriceFeed.setPriceSampleSpace(1),
  //   "vaultPriceFeed.setPriceSampleSpace"
  // );
  // await sendTxn(
  //   vaultPriceFeed.setIsAmmEnabled(false),
  //   "vaultPriceFeed.setIsAmmEnabled"
  // );

  // const zlp = await deployContract("ZLP", []);
  // // const zlp = await contractAt(
  // //   "ZLP",
  // //   "0x581f096219C45ac4f433Dee8eB0b699B7b8AE5Ca"0
  // // );
  // await sendTxn(
  //   zlp.setInPrivateTransferMode(true),
  //   "zlp.setInPrivateTransferMode"
  // );

  // const zlpManager = await deployContract("ZlpManager", [
  //   vault.address,
  //   usdg.address,
  //   zlp.address,
  //   15 * 60,
  // ]);
  // const zlpManager = await contractAt(
  //   "ZlpManager",
  //   "0xEd4779D6630C87bdaAebEF3BD363c85413d43BE3"
  // );

  // await sendTxn(
  //   zlpManager.setInPrivateMode(true),
  //   "zlpManager.setInPrivateMode"
  // );

  // await sendTxn(zlp.setMinter(zlpManager.address, true), "zlp.setMinter");
  // await sendTxn(usdg.addVault(zlpManager.address), "usdg.addVault(zlpManager)");

  // await sendTxn(
  //   vault.initialize(
  //     router.address, // router
  //     usdg.address, // usdg
  //     vaultPriceFeed.address, // priceFeed
  //     toUsd(2), // liquidationFeeUsd
  //     100, // fundingRateFactor
  //     100 // stableFundingRateFactor
  //   ),
  //   "vault.initialize"
  // );

  // await sendTxn(
  //   vault.setFundingRate(60 * 60, 100, 100),
  //   "vault.setFundingRate"
  // );

  // await sendTxn(vault.setInManagerMode(true), "vault.setInManagerMode");
  // await sendTxn(vault.setManager(zlpManager.address, true), "vault.setManager");

  // await sendTxn(
  //   vault.setFees(
  //     10, // _taxBasisPoints
  //     5, // _stableTaxBasisPoints
  //     20, // _mintBurnFeeBasisPoints
  //     20, // _swapFeeBasisPoints
  //     1, // _stableSwapFeeBasisPoints
  //     10, // _marginFeeBasisPoints
  //     toUsd(2), // _liquidationFeeUsd
  //     24 * 60 * 60, // _minProfitTime
  //     true // _hasDynamicFees
  //   ),
  //   "vault.setFees"
  // );

  // const vaultErrorController = await deployContract("VaultErrorController", []);
  // const vaultErrorController = await contractAt(
  //   "VaultErrorController",
  //   "0x3E1f69a3D8DC6dF2402E7b610Fa9F7cCa9A12C45"
  // );
  // await sendTxn(
  //   vault.setErrorController(vaultErrorController.address),
  //   "vault.setErrorController"
  // );
  // await sendTxn(
  //   vaultErrorController.setErrors(vault.address, errors),
  //   "vaultErrorController.setErrors"
  // );

  const vaultUtils = await deployContract("VaultUtils", [vault.address]);
  await sendTxn(vault.setVaultUtils(vaultUtils.address), "vault.setVaultUtils");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
