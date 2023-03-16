/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "Governable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Governable__factory>;
    getContractFactory(
      name: "IAdmin",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAdmin__factory>;
    getContractFactory(
      name: "TokenManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TokenManager__factory>;
    getContractFactory(
      name: "IPancakeFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPancakeFactory__factory>;
    getContractFactory(
      name: "IPancakePair",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPancakePair__factory>;
    getContractFactory(
      name: "IPancakeRouter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPancakeRouter__factory>;
    getContractFactory(
      name: "PancakeFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PancakeFactory__factory>;
    getContractFactory(
      name: "PancakePair",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PancakePair__factory>;
    getContractFactory(
      name: "PancakeRouter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PancakeRouter__factory>;
    getContractFactory(
      name: "UniFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UniFactory__factory>;
    getContractFactory(
      name: "UniNftManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UniNftManager__factory>;
    getContractFactory(
      name: "UniPool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UniPool__factory>;
    getContractFactory(
      name: "BasePositionManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BasePositionManager__factory>;
    getContractFactory(
      name: "IBasePositionManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBasePositionManager__factory>;
    getContractFactory(
      name: "IOrderBook",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IOrderBook__factory>;
    getContractFactory(
      name: "IPositionRouter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPositionRouter__factory>;
    getContractFactory(
      name: "IPositionRouterCallbackReceiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPositionRouterCallbackReceiver__factory>;
    getContractFactory(
      name: "IRouter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IRouter__factory>;
    getContractFactory(
      name: "IShortsTracker",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IShortsTracker__factory>;
    getContractFactory(
      name: "IVault",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IVault__factory>;
    getContractFactory(
      name: "IVaultPriceFeed",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IVaultPriceFeed__factory>;
    getContractFactory(
      name: "IVaultUtils",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IVaultUtils__factory>;
    getContractFactory(
      name: "IZlpManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IZlpManager__factory>;
    getContractFactory(
      name: "OrderBook",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OrderBook__factory>;
    getContractFactory(
      name: "PositionManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PositionManager__factory>;
    getContractFactory(
      name: "PositionRouter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PositionRouter__factory>;
    getContractFactory(
      name: "Router",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Router__factory>;
    getContractFactory(
      name: "ShortsTracker",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ShortsTracker__factory>;
    getContractFactory(
      name: "MaliciousTraderTest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MaliciousTraderTest__factory>;
    getContractFactory(
      name: "PositionRouterCallbackReceiverTest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PositionRouterCallbackReceiverTest__factory>;
    getContractFactory(
      name: "ShortsTrackerTest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ShortsTrackerTest__factory>;
    getContractFactory(
      name: "VaultTest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VaultTest__factory>;
    getContractFactory(
      name: "Vault",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Vault__factory>;
    getContractFactory(
      name: "VaultErrorController",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VaultErrorController__factory>;
    getContractFactory(
      name: "VaultPriceFeed",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VaultPriceFeed__factory>;
    getContractFactory(
      name: "VaultUtils",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VaultUtils__factory>;
    getContractFactory(
      name: "ZlpManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ZlpManager__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "ERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721__factory>;
    getContractFactory(
      name: "IERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721__factory>;
    getContractFactory(
      name: "IERC721Enumerable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Enumerable__factory>;
    getContractFactory(
      name: "IERC721Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Metadata__factory>;
    getContractFactory(
      name: "IERC721Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Receiver__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "FastPriceEvents",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FastPriceEvents__factory>;
    getContractFactory(
      name: "FastPriceFeed",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FastPriceFeed__factory>;
    getContractFactory(
      name: "IChainlinkFlags",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IChainlinkFlags__factory>;
    getContractFactory(
      name: "IFastPriceEvents",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IFastPriceEvents__factory>;
    getContractFactory(
      name: "IFastPriceFeed",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IFastPriceFeed__factory>;
    getContractFactory(
      name: "IPriceFeed",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPriceFeed__factory>;
    getContractFactory(
      name: "ISecondaryPriceFeed",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISecondaryPriceFeed__factory>;
    getContractFactory(
      name: "PriceFeed",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PriceFeed__factory>;
    getContractFactory(
      name: "BalanceUpdater",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BalanceUpdater__factory>;
    getContractFactory(
      name: "BatchSender",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BatchSender__factory>;
    getContractFactory(
      name: "EsZomiBatchSender",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.EsZomiBatchSender__factory>;
    getContractFactory(
      name: "IHandlerTarget",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IHandlerTarget__factory>;
    getContractFactory(
      name: "ITimelock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ITimelock__factory>;
    getContractFactory(
      name: "ITimelockTarget",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ITimelockTarget__factory>;
    getContractFactory(
      name: "IZomiTimelock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IZomiTimelock__factory>;
    getContractFactory(
      name: "OrderBookReader",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OrderBookReader__factory>;
    getContractFactory(
      name: "PriceFeedTimelock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PriceFeedTimelock__factory>;
    getContractFactory(
      name: "Reader",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Reader__factory>;
    getContractFactory(
      name: "RewardReader",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.RewardReader__factory>;
    getContractFactory(
      name: "ShortsTrackerTimelock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ShortsTrackerTimelock__factory>;
    getContractFactory(
      name: "Timelock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Timelock__factory>;
    getContractFactory(
      name: "VaultReader",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VaultReader__factory>;
    getContractFactory(
      name: "ZomiTimelock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ZomiTimelock__factory>;
    getContractFactory(
      name: "IReferralStorage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IReferralStorage__factory>;
    getContractFactory(
      name: "ReferralReader",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ReferralReader__factory>;
    getContractFactory(
      name: "ReferralStorage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ReferralStorage__factory>;
    getContractFactory(
      name: "BonusDistributor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BonusDistributor__factory>;
    getContractFactory(
      name: "IRewardDistributor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IRewardDistributor__factory>;
    getContractFactory(
      name: "IRewardTracker",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IRewardTracker__factory>;
    getContractFactory(
      name: "IVester",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IVester__factory>;
    getContractFactory(
      name: "RewardDistributor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.RewardDistributor__factory>;
    getContractFactory(
      name: "RewardRouter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.RewardRouter__factory>;
    getContractFactory(
      name: "RewardRouterV2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.RewardRouterV2__factory>;
    getContractFactory(
      name: "RewardTracker",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.RewardTracker__factory>;
    getContractFactory(
      name: "StakedZlp",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.StakedZlp__factory>;
    getContractFactory(
      name: "StakeManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.StakeManager__factory>;
    getContractFactory(
      name: "Vester",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Vester__factory>;
    getContractFactory(
      name: "ZlpBalance",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ZlpBalance__factory>;
    getContractFactory(
      name: "BaseToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BaseToken__factory>;
    getContractFactory(
      name: "Bridge",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Bridge__factory>;
    getContractFactory(
      name: "FaucetToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FaucetToken__factory>;
    getContractFactory(
      name: "IBaseToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBaseToken__factory>;
    getContractFactory(
      name: "IBridge",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBridge__factory>;
    getContractFactory(
      name: "IDistributor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IDistributor__factory>;
    getContractFactory(
      name: "IMintable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IMintable__factory>;
    getContractFactory(
      name: "IUSDG",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUSDG__factory>;
    getContractFactory(
      name: "IWETH",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IWETH__factory>;
    getContractFactory(
      name: "IYieldToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IYieldToken__factory>;
    getContractFactory(
      name: "IYieldTracker",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IYieldTracker__factory>;
    getContractFactory(
      name: "IZLP",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IZLP__factory>;
    getContractFactory(
      name: "MintableBaseToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MintableBaseToken__factory>;
    getContractFactory(
      name: "SnapshotToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SnapshotToken__factory>;
    getContractFactory(
      name: "TimeDistributor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TimeDistributor__factory>;
    getContractFactory(
      name: "Token",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Token__factory>;
    getContractFactory(
      name: "USDG",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.USDG__factory>;
    getContractFactory(
      name: "WETH",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.WETH__factory>;
    getContractFactory(
      name: "YieldFarm",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.YieldFarm__factory>;
    getContractFactory(
      name: "YieldToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.YieldToken__factory>;
    getContractFactory(
      name: "YieldTracker",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.YieldTracker__factory>;
    getContractFactory(
      name: "IZMT",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IZMT__factory>;
    getContractFactory(
      name: "Treasury",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Treasury__factory>;
    getContractFactory(
      name: "ZMT",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ZMT__factory>;
    getContractFactory(
      name: "EsZOMI",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.EsZOMI__factory>;
    getContractFactory(
      name: "IAmmRouter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAmmRouter__factory>;
    getContractFactory(
      name: "IZomiIou",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IZomiIou__factory>;
    getContractFactory(
      name: "IZomiMigrator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IZomiMigrator__factory>;
    getContractFactory(
      name: "MigrationHandler",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MigrationHandler__factory>;
    getContractFactory(
      name: "ZLP",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ZLP__factory>;
    getContractFactory(
      name: "Zomi",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Zomi__factory>;
    getContractFactory(
      name: "ZomiFloor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ZomiFloor__factory>;
    getContractFactory(
      name: "ZomiIou",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ZomiIou__factory>;
    getContractFactory(
      name: "ZomiMigrator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ZomiMigrator__factory>;

    getContractAt(
      name: "Governable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Governable>;
    getContractAt(
      name: "IAdmin",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAdmin>;
    getContractAt(
      name: "TokenManager",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TokenManager>;
    getContractAt(
      name: "IPancakeFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPancakeFactory>;
    getContractAt(
      name: "IPancakePair",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPancakePair>;
    getContractAt(
      name: "IPancakeRouter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPancakeRouter>;
    getContractAt(
      name: "PancakeFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PancakeFactory>;
    getContractAt(
      name: "PancakePair",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PancakePair>;
    getContractAt(
      name: "PancakeRouter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PancakeRouter>;
    getContractAt(
      name: "UniFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.UniFactory>;
    getContractAt(
      name: "UniNftManager",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.UniNftManager>;
    getContractAt(
      name: "UniPool",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.UniPool>;
    getContractAt(
      name: "BasePositionManager",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BasePositionManager>;
    getContractAt(
      name: "IBasePositionManager",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IBasePositionManager>;
    getContractAt(
      name: "IOrderBook",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IOrderBook>;
    getContractAt(
      name: "IPositionRouter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPositionRouter>;
    getContractAt(
      name: "IPositionRouterCallbackReceiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPositionRouterCallbackReceiver>;
    getContractAt(
      name: "IRouter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IRouter>;
    getContractAt(
      name: "IShortsTracker",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IShortsTracker>;
    getContractAt(
      name: "IVault",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IVault>;
    getContractAt(
      name: "IVaultPriceFeed",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IVaultPriceFeed>;
    getContractAt(
      name: "IVaultUtils",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IVaultUtils>;
    getContractAt(
      name: "IZlpManager",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IZlpManager>;
    getContractAt(
      name: "OrderBook",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OrderBook>;
    getContractAt(
      name: "PositionManager",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PositionManager>;
    getContractAt(
      name: "PositionRouter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PositionRouter>;
    getContractAt(
      name: "Router",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Router>;
    getContractAt(
      name: "ShortsTracker",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ShortsTracker>;
    getContractAt(
      name: "MaliciousTraderTest",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MaliciousTraderTest>;
    getContractAt(
      name: "PositionRouterCallbackReceiverTest",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PositionRouterCallbackReceiverTest>;
    getContractAt(
      name: "ShortsTrackerTest",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ShortsTrackerTest>;
    getContractAt(
      name: "VaultTest",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.VaultTest>;
    getContractAt(
      name: "Vault",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Vault>;
    getContractAt(
      name: "VaultErrorController",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.VaultErrorController>;
    getContractAt(
      name: "VaultPriceFeed",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.VaultPriceFeed>;
    getContractAt(
      name: "VaultUtils",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.VaultUtils>;
    getContractAt(
      name: "ZlpManager",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ZlpManager>;
    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "ERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165>;
    getContractAt(
      name: "IERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "ERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721>;
    getContractAt(
      name: "IERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721>;
    getContractAt(
      name: "IERC721Enumerable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Enumerable>;
    getContractAt(
      name: "IERC721Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Metadata>;
    getContractAt(
      name: "IERC721Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Receiver>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "FastPriceEvents",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FastPriceEvents>;
    getContractAt(
      name: "FastPriceFeed",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FastPriceFeed>;
    getContractAt(
      name: "IChainlinkFlags",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IChainlinkFlags>;
    getContractAt(
      name: "IFastPriceEvents",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IFastPriceEvents>;
    getContractAt(
      name: "IFastPriceFeed",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IFastPriceFeed>;
    getContractAt(
      name: "IPriceFeed",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPriceFeed>;
    getContractAt(
      name: "ISecondaryPriceFeed",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ISecondaryPriceFeed>;
    getContractAt(
      name: "PriceFeed",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PriceFeed>;
    getContractAt(
      name: "BalanceUpdater",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BalanceUpdater>;
    getContractAt(
      name: "BatchSender",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BatchSender>;
    getContractAt(
      name: "EsZomiBatchSender",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.EsZomiBatchSender>;
    getContractAt(
      name: "IHandlerTarget",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IHandlerTarget>;
    getContractAt(
      name: "ITimelock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ITimelock>;
    getContractAt(
      name: "ITimelockTarget",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ITimelockTarget>;
    getContractAt(
      name: "IZomiTimelock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IZomiTimelock>;
    getContractAt(
      name: "OrderBookReader",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OrderBookReader>;
    getContractAt(
      name: "PriceFeedTimelock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PriceFeedTimelock>;
    getContractAt(
      name: "Reader",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Reader>;
    getContractAt(
      name: "RewardReader",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.RewardReader>;
    getContractAt(
      name: "ShortsTrackerTimelock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ShortsTrackerTimelock>;
    getContractAt(
      name: "Timelock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Timelock>;
    getContractAt(
      name: "VaultReader",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.VaultReader>;
    getContractAt(
      name: "ZomiTimelock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ZomiTimelock>;
    getContractAt(
      name: "IReferralStorage",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IReferralStorage>;
    getContractAt(
      name: "ReferralReader",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ReferralReader>;
    getContractAt(
      name: "ReferralStorage",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ReferralStorage>;
    getContractAt(
      name: "BonusDistributor",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BonusDistributor>;
    getContractAt(
      name: "IRewardDistributor",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IRewardDistributor>;
    getContractAt(
      name: "IRewardTracker",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IRewardTracker>;
    getContractAt(
      name: "IVester",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IVester>;
    getContractAt(
      name: "RewardDistributor",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.RewardDistributor>;
    getContractAt(
      name: "RewardRouter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.RewardRouter>;
    getContractAt(
      name: "RewardRouterV2",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.RewardRouterV2>;
    getContractAt(
      name: "RewardTracker",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.RewardTracker>;
    getContractAt(
      name: "StakedZlp",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.StakedZlp>;
    getContractAt(
      name: "StakeManager",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.StakeManager>;
    getContractAt(
      name: "Vester",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Vester>;
    getContractAt(
      name: "ZlpBalance",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ZlpBalance>;
    getContractAt(
      name: "BaseToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BaseToken>;
    getContractAt(
      name: "Bridge",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Bridge>;
    getContractAt(
      name: "FaucetToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FaucetToken>;
    getContractAt(
      name: "IBaseToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IBaseToken>;
    getContractAt(
      name: "IBridge",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IBridge>;
    getContractAt(
      name: "IDistributor",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IDistributor>;
    getContractAt(
      name: "IMintable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IMintable>;
    getContractAt(
      name: "IUSDG",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUSDG>;
    getContractAt(
      name: "IWETH",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IWETH>;
    getContractAt(
      name: "IYieldToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IYieldToken>;
    getContractAt(
      name: "IYieldTracker",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IYieldTracker>;
    getContractAt(
      name: "IZLP",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IZLP>;
    getContractAt(
      name: "MintableBaseToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MintableBaseToken>;
    getContractAt(
      name: "SnapshotToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SnapshotToken>;
    getContractAt(
      name: "TimeDistributor",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TimeDistributor>;
    getContractAt(
      name: "Token",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Token>;
    getContractAt(
      name: "USDG",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.USDG>;
    getContractAt(
      name: "WETH",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.WETH>;
    getContractAt(
      name: "YieldFarm",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.YieldFarm>;
    getContractAt(
      name: "YieldToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.YieldToken>;
    getContractAt(
      name: "YieldTracker",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.YieldTracker>;
    getContractAt(
      name: "IZMT",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IZMT>;
    getContractAt(
      name: "Treasury",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Treasury>;
    getContractAt(
      name: "ZMT",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ZMT>;
    getContractAt(
      name: "EsZOMI",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.EsZOMI>;
    getContractAt(
      name: "IAmmRouter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAmmRouter>;
    getContractAt(
      name: "IZomiIou",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IZomiIou>;
    getContractAt(
      name: "IZomiMigrator",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IZomiMigrator>;
    getContractAt(
      name: "MigrationHandler",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MigrationHandler>;
    getContractAt(
      name: "ZLP",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ZLP>;
    getContractAt(
      name: "Zomi",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Zomi>;
    getContractAt(
      name: "ZomiFloor",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ZomiFloor>;
    getContractAt(
      name: "ZomiIou",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ZomiIou>;
    getContractAt(
      name: "ZomiMigrator",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ZomiMigrator>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}