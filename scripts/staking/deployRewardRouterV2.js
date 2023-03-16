const {
  deployContract,
  contractAt,
  sendTxn,
  writeTmpAddresses,
} = require("../shared/helpers");

const network = process.env.HARDHAT_NETWORK || "mainnet";
const tokens = require("../core/tokens")[network];

async function main() {
  const { nativeToken } = tokens;

  const vestingDuration = 365 * 24 * 60 * 60;

  const zlpManager = await contractAt(
    "ZlpManager",
    "0xb6F9EF9b9dCb86863a66C4027b02B751fF504e52"
  );
  const zlp = await contractAt(
    "ZLP",
    "0xfbC42698A1cA8E18CDEB406DC68D7cDd351C12f4"
  );

  const zomi = await contractAt(
    "Zomi",
    "0x5FbDB2315678afecb367f032d93F642f64180aa3"
  );
  const esZomi = await contractAt(
    "EsZOMI",
    "0x298f0FbFD6058218878745592a9455C6dCf45899"
  );
  // const bnZomi = await deployContract("MintableBaseToken", [
  //   "Bonus Zomi",
  //   "bnZOMI",
  //   0,
  // ]);
  const bnZomi = await contractAt(
    "MintableBaseToken",
    "0x40e52C96C2011c6d42b87886A04fDdD1FA8c2Fa6"
  );

  // await sendTxn(
  //   esZomi.setInPrivateTransferMode(true),
  //   "esZomi.setInPrivateTransferMode"
  // );
  // await sendTxn(
  //   zlp.setInPrivateTransferMode(true),
  //   "zlp.setInPrivateTransferMode"
  // );

  // const stakedZomiTracker = await deployContract("RewardTracker", [
  //   "Staked Zomi",
  //   "sZOMI",
  // ]);
  const stakedZomiTracker = await contractAt(
    "RewardTracker",
    "0xcCBBcf0Ef91d6CbE85B2F2E14D68618F8d1dC7c4"
  );
  // const stakedZomiDistributor = await deployContract("RewardDistributor", [
  //   esZomi.address,
  //   stakedZomiTracker.address,
  // ]);
  const stakedZomiDistributor = await contractAt(
    "RewardDistributor",
    "0x1D0F7723A92EF7DCF05f52c0D651B379c9627f47"
  );

  // await sendTxn(
  //   stakedZomiTracker.initialize(
  //     [zomi.address, esZomi.address],
  //     stakedZomiDistributor.address
  //   ),
  //   "stakedZomiTracker.initialize"
  // );
  // await sendTxn(
  //   stakedZomiDistributor.updateLastDistributionTime(),
  //   "stakedZomiDistributor.updateLastDistributionTime"
  // );

  // const bonusZomiTracker = await deployContract("RewardTracker", [
  //   "Staked + Bonus Zomi",
  //   "sbZOMI",
  // ]);
  const bonusZomiTracker = await contractAt(
    "RewardTracker",
    "0x41Bf5F8F9E3EC63612647cE9a6817c4646fFd016"
  );

  // const bonusZomiDistributor = await deployContract("BonusDistributor", [
  //   bnZomi.address,
  //   bonusZomiTracker.address,
  // ]);
  const bonusZomiDistributor = await contractAt(
    "BonusDistributor",
    "0x1228838B4a25D0663eA3324A977fF42Dd821931a"
  );

  // await sendTxn(
  //   bonusZomiTracker.initialize(
  //     [stakedZomiTracker.address],
  //     bonusZomiDistributor.address
  //   ),
  //   "bonusZomiTracker.initialize"
  // );
  // await sendTxn(
  //   bonusZomiDistributor.updateLastDistributionTime(),
  //   "bonusZomiDistributor.updateLastDistributionTime"
  // );

  // const feeZomiTracker = await deployContract("RewardTracker", [
  //   "Staked + Bonus + Fee Zomi",
  //   "sbfZOMI",
  // ]);
  const feeZomiTracker = await contractAt(
    "RewardTracker",
    "0xF38A6040A917f582BBd331fbfE002A32d49D4AcC"
  );

  const feeZomiDistributor = await deployContract("RewardDistributor", [
    nativeToken.address,
    feeZomiTracker.address,
  ]);
  // const feeZomiDistributor = await contractAt(
  //   "RewardDistributor",
  //   "0xdD9b8CCC89Bbff8540Ffc9Df15e506FbB36dC75C"
  // );

  await sendTxn(
    feeZomiTracker.initialize(
      [bonusZomiTracker.address, bnZomi.address],
      feeZomiDistributor.address
    ),
    "feeZomiTracker.initialize"
  );
  await sendTxn(
    feeZomiDistributor.updateLastDistributionTime(),
    "feeZomiDistributor.updateLastDistributionTime"
  );

  const feeZlpTracker = await deployContract("RewardTracker", [
    "Fee ZLP",
    "fZLP",
  ]);
  // const feeZlpTracker = await contractAt(
  //   "RewardTracker",
  //   "0xab15d85582a4BDBc28494D1baB8251D6Cd1F9081"
  // );

  const feeZlpDistributor = await deployContract("RewardDistributor", [
    nativeToken.address,
    feeZlpTracker.address,
  ]);

  await sendTxn(
    feeZlpTracker.initialize([zlp.address], feeZlpDistributor.address),
    "feeZlpTracker.initialize"
  );
  await sendTxn(
    feeZlpDistributor.updateLastDistributionTime(),
    "feeZlpDistributor.updateLastDistributionTime"
  );

  const stakedZlpTracker = await deployContract("RewardTracker", [
    "Fee + Staked ZLP",
    "fsZLP",
  ]);

  // const stakedZlpTracker = await contractAt(
  //   "RewardTracker",
  //   "0x2912c72567fbBa62431ADc9B88C17842AADa1D0e"
  // );

  const stakedZlpDistributor = await deployContract("RewardDistributor", [
    esZomi.address,
    stakedZlpTracker.address,
  ]);

  // const stakedZlpDistributor = await contractAt(
  //   "RewardDistributor",
  //   "0x6cBb2f142bccb904604cC320a7465F9932009639"
  // );

  await sendTxn(
    stakedZlpTracker.initialize(
      [feeZlpTracker.address],
      stakedZlpDistributor.address
    ),
    "stakedZlpTracker.initialize"
  );
  await sendTxn(
    stakedZlpDistributor.updateLastDistributionTime(),
    "stakedZlpDistributor.updateLastDistributionTime"
  );

  await sendTxn(
    stakedZomiTracker.setInPrivateTransferMode(true),
    "stakedZomiTracker.setInPrivateTransferMode"
  );
  await sendTxn(
    stakedZomiTracker.setInPrivateStakingMode(true),
    "stakedZomiTracker.setInPrivateStakingMode"
  );
  await sendTxn(
    bonusZomiTracker.setInPrivateTransferMode(true),
    "bonusZomiTracker.setInPrivateTransferMode"
  );
  await sendTxn(
    bonusZomiTracker.setInPrivateStakingMode(true),
    "bonusZomiTracker.setInPrivateStakingMode"
  );
  await sendTxn(
    bonusZomiTracker.setInPrivateClaimingMode(true),
    "bonusZomiTracker.setInPrivateClaimingMode"
  );
  await sendTxn(
    feeZomiTracker.setInPrivateTransferMode(true),
    "feeZomiTracker.setInPrivateTransferMode"
  );
  await sendTxn(
    feeZomiTracker.setInPrivateStakingMode(true),
    "feeZomiTracker.setInPrivateStakingMode"
  );

  await sendTxn(
    feeZlpTracker.setInPrivateTransferMode(true),
    "feeZlpTracker.setInPrivateTransferMode"
  );
  await sendTxn(
    feeZlpTracker.setInPrivateStakingMode(true),
    "feeZlpTracker.setInPrivateStakingMode"
  );
  await sendTxn(
    stakedZlpTracker.setInPrivateTransferMode(true),
    "stakedZlpTracker.setInPrivateTransferMode"
  );
  await sendTxn(
    stakedZlpTracker.setInPrivateStakingMode(true),
    "stakedZlpTracker.setInPrivateStakingMode"
  );

  const zomiVester = await deployContract("Vester", [
    "Vested Zomi", // _name
    "vZomi", // _symbol
    vestingDuration, // _vestingDuration
    esZomi.address, // _esToken
    feeZomiTracker.address, // _pairToken
    zomi.address, // _claimableToken
    stakedZomiTracker.address, // _rewardTracker
  ]);

  // const zomiVester = await contractAt(
  //   "Vester",
  //   "0x37b2CD251b55484d5611d7dAcEcf1f2eAaB68a80"
  // );

  const zlpVester = await deployContract("Vester", [
    "Vested ZLP", // _name
    "vZLP", // _symbol
    vestingDuration, // _vestingDuration
    esZomi.address, // _esToken
    stakedZlpTracker.address, // _pairToken
    zomi.address, // _claimableToken
    stakedZlpTracker.address, // _rewardTracker
  ]);

  // const zlpVester = await contractAt(
  //   "Vester",
  //   "0x95a78D16ebf6563B8496913D016531837F74E1AE"
  // );
  const rewardRouter = await deployContract("RewardRouterV2", []);
  // const rewardRouter = await contractAt(
  //   "RewardRouterV2",
  //   "0xf2b3e51B903544727d1B632391b24918A6Bc79eB"
  // );
  await sendTxn(
    rewardRouter.initialize(
      nativeToken.address,
      zomi.address,
      esZomi.address,
      bnZomi.address,
      zlp.address,
      stakedZomiTracker.address,
      bonusZomiTracker.address,
      feeZomiTracker.address,
      feeZlpTracker.address,
      stakedZlpTracker.address,
      zlpManager.address,
      zomiVester.address,
      zlpVester.address
    ),
    "rewardRouter.initialize"
  );

  await sendTxn(
    zlpManager.setHandler(rewardRouter.address, true),
    "zlpManager.setHandler(rewardRouter)"
  );

  // allow rewardRouter to stake in stakedZomiTracker
  await sendTxn(
    stakedZomiTracker.setHandler(rewardRouter.address, true),
    "stakedZomiTracker.setHandler(rewardRouter)"
  );
  // allow bonusZomiTracker to stake stakedZomiTracker
  await sendTxn(
    stakedZomiTracker.setHandler(bonusZomiTracker.address, true),
    "stakedZomiTracker.setHandler(bonusZomiTracker)"
  );
  // allow rewardRouter to stake in bonusZomiTracker
  await sendTxn(
    bonusZomiTracker.setHandler(rewardRouter.address, true),
    "bonusZomiTracker.setHandler(rewardRouter)"
  );
  // allow bonusZomiTracker to stake feeZomiTracker
  await sendTxn(
    bonusZomiTracker.setHandler(feeZomiTracker.address, true),
    "bonusZomiTracker.setHandler(feeZomiTracker)"
  );
  await sendTxn(
    bonusZomiDistributor.setBonusMultiplier(20000),
    "bonusZomiDistributor.setBonusMultiplier"
  );
  // allow rewardRouter to stake in feeZomiTracker
  await sendTxn(
    feeZomiTracker.setHandler(rewardRouter.address, true),
    "feeZomiTracker.setHandler(rewardRouter)"
  );
  // allow stakedZomiTracker to stake esZomi
  await sendTxn(
    esZomi.setHandler(stakedZomiTracker.address, true),
    "esZomi.setHandler(stakedZomiTracker)"
  );
  // allow feeZomiTracker to stake bnZomi
  await sendTxn(
    bnZomi.setHandler(feeZomiTracker.address, true),
    "bnZomi.setHandler(feeZomiTracker"
  );
  // allow rewardRouter to burn bnZomi
  await sendTxn(
    bnZomi.setMinter(rewardRouter.address, true),
    "bnZomi.setMinter(rewardRouter"
  );

  // allow stakedZlpTracker to stake feeZlpTracker
  await sendTxn(
    feeZlpTracker.setHandler(stakedZlpTracker.address, true),
    "feeZlpTracker.setHandler(stakedZlpTracker)"
  );
  // allow feeZlpTracker to stake zlp
  await sendTxn(
    zlp.setHandler(feeZlpTracker.address, true),
    "zlp.setHandler(feeZlpTracker)"
  );

  // allow rewardRouter to stake in feeZlpTracker
  await sendTxn(
    feeZlpTracker.setHandler(rewardRouter.address, true),
    "feeZlpTracker.setHandler(rewardRouter)"
  );
  // allow rewardRouter to stake in stakedZlpTracker
  await sendTxn(
    stakedZlpTracker.setHandler(rewardRouter.address, true),
    "stakedZlpTracker.setHandler(rewardRouter)"
  );

  await sendTxn(
    esZomi.setHandler(rewardRouter.address, true),
    "esZomi.setHandler(rewardRouter)"
  );
  await sendTxn(
    esZomi.setHandler(stakedZomiDistributor.address, true),
    "esZomi.setHandler(stakedZomiDistributor)"
  );
  await sendTxn(
    esZomi.setHandler(stakedZlpDistributor.address, true),
    "esZomi.setHandler(stakedZlpDistributor)"
  );
  await sendTxn(
    esZomi.setHandler(stakedZlpTracker.address, true),
    "esZomi.setHandler(stakedZlpTracker)"
  );
  await sendTxn(
    esZomi.setHandler(zomiVester.address, true),
    "esZomi.setHandler(zomiVester)"
  );
  await sendTxn(
    esZomi.setHandler(zlpVester.address, true),
    "esZomi.setHandler(zlpVester)"
  );

  await sendTxn(
    esZomi.setMinter(zomiVester.address, true),
    "esZomi.setMinter(zomiVester)"
  );
  await sendTxn(
    esZomi.setMinter(zlpVester.address, true),
    "esZomi.setMinter(zlpVester)"
  );

  await sendTxn(
    zomiVester.setHandler(rewardRouter.address, true),
    "zomiVester.setHandler(rewardRouter)"
  );
  await sendTxn(
    zlpVester.setHandler(rewardRouter.address, true),
    "zlpVester.setHandler(rewardRouter)"
  );

  await sendTxn(
    feeZomiTracker.setHandler(zomiVester.address, true),
    "feeZomiTracker.setHandler(zomiVester)"
  );
  await sendTxn(
    stakedZlpTracker.setHandler(zlpVester.address, true),
    "stakedZlpTracker.setHandler(zlpVester)"
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
