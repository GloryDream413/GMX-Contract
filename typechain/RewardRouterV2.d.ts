/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface RewardRouterV2Interface extends ethers.utils.Interface {
  functions: {
    "acceptTransfer(address)": FunctionFragment;
    "batchCompoundForAccounts(address[])": FunctionFragment;
    "batchStakeZomiForAccount(address[],uint256[])": FunctionFragment;
    "bnZomi()": FunctionFragment;
    "bonusZomiTracker()": FunctionFragment;
    "claim()": FunctionFragment;
    "claimEsZomi()": FunctionFragment;
    "claimFees()": FunctionFragment;
    "compound()": FunctionFragment;
    "compoundForAccount(address)": FunctionFragment;
    "esZomi()": FunctionFragment;
    "feeZlpTracker()": FunctionFragment;
    "feeZomiTracker()": FunctionFragment;
    "gov()": FunctionFragment;
    "handleRewards(bool,bool,bool,bool,bool,bool,bool)": FunctionFragment;
    "initialize(address,address,address,address,address,address,address,address,address,address,address,address,address)": FunctionFragment;
    "isInitialized()": FunctionFragment;
    "mintAndStakeZlp(address,uint256,uint256,uint256)": FunctionFragment;
    "mintAndStakeZlpETH(uint256,uint256)": FunctionFragment;
    "pendingReceivers(address)": FunctionFragment;
    "setGov(address)": FunctionFragment;
    "signalTransfer(address)": FunctionFragment;
    "stakeEsZomi(uint256)": FunctionFragment;
    "stakeZomi(uint256)": FunctionFragment;
    "stakeZomiForAccount(address,uint256)": FunctionFragment;
    "stakedZlpTracker()": FunctionFragment;
    "stakedZomiTracker()": FunctionFragment;
    "unstakeAndRedeemZlp(address,uint256,uint256,address)": FunctionFragment;
    "unstakeAndRedeemZlpETH(uint256,uint256,address)": FunctionFragment;
    "unstakeEsZomi(uint256)": FunctionFragment;
    "unstakeZomi(uint256)": FunctionFragment;
    "weth()": FunctionFragment;
    "withdrawToken(address,address,uint256)": FunctionFragment;
    "zlp()": FunctionFragment;
    "zlpManager()": FunctionFragment;
    "zlpVester()": FunctionFragment;
    "zomi()": FunctionFragment;
    "zomiVester()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "acceptTransfer",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "batchCompoundForAccounts",
    values: [string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "batchStakeZomiForAccount",
    values: [string[], BigNumberish[]]
  ): string;
  encodeFunctionData(functionFragment: "bnZomi", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "bonusZomiTracker",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "claim", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "claimEsZomi",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "claimFees", values?: undefined): string;
  encodeFunctionData(functionFragment: "compound", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "compoundForAccount",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "esZomi", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "feeZlpTracker",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "feeZomiTracker",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "gov", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "handleRewards",
    values: [boolean, boolean, boolean, boolean, boolean, boolean, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "isInitialized",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "mintAndStakeZlp",
    values: [string, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "mintAndStakeZlpETH",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "pendingReceivers",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "setGov", values: [string]): string;
  encodeFunctionData(
    functionFragment: "signalTransfer",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "stakeEsZomi",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "stakeZomi",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "stakeZomiForAccount",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "stakedZlpTracker",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "stakedZomiTracker",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "unstakeAndRedeemZlp",
    values: [string, BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "unstakeAndRedeemZlpETH",
    values: [BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "unstakeEsZomi",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "unstakeZomi",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "weth", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdrawToken",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "zlp", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "zlpManager",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "zlpVester", values?: undefined): string;
  encodeFunctionData(functionFragment: "zomi", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "zomiVester",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "acceptTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "batchCompoundForAccounts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "batchStakeZomiForAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "bnZomi", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "bonusZomiTracker",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimEsZomi",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "claimFees", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "compound", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "compoundForAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "esZomi", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "feeZlpTracker",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "feeZomiTracker",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "gov", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "handleRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isInitialized",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mintAndStakeZlp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mintAndStakeZlpETH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pendingReceivers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setGov", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "signalTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stakeEsZomi",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stakeZomi", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "stakeZomiForAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stakedZlpTracker",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stakedZomiTracker",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unstakeAndRedeemZlp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unstakeAndRedeemZlpETH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unstakeEsZomi",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unstakeZomi",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "weth", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "zlp", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "zlpManager", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "zlpVester", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "zomi", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "zomiVester", data: BytesLike): Result;

  events: {
    "StakeZlp(address,uint256)": EventFragment;
    "StakeZomi(address,address,uint256)": EventFragment;
    "UnstakeZlp(address,uint256)": EventFragment;
    "UnstakeZomi(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "StakeZlp"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StakeZomi"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UnstakeZlp"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UnstakeZomi"): EventFragment;
}

export type StakeZlpEvent = TypedEvent<
  [string, BigNumber] & { account: string; amount: BigNumber }
>;

export type StakeZomiEvent = TypedEvent<
  [string, string, BigNumber] & {
    account: string;
    token: string;
    amount: BigNumber;
  }
>;

export type UnstakeZlpEvent = TypedEvent<
  [string, BigNumber] & { account: string; amount: BigNumber }
>;

export type UnstakeZomiEvent = TypedEvent<
  [string, string, BigNumber] & {
    account: string;
    token: string;
    amount: BigNumber;
  }
>;

export class RewardRouterV2 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: RewardRouterV2Interface;

  functions: {
    acceptTransfer(
      _sender: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    batchCompoundForAccounts(
      _accounts: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    batchStakeZomiForAccount(
      _accounts: string[],
      _amounts: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    bnZomi(overrides?: CallOverrides): Promise<[string]>;

    bonusZomiTracker(overrides?: CallOverrides): Promise<[string]>;

    claim(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claimEsZomi(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claimFees(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    compound(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    compoundForAccount(
      _account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    esZomi(overrides?: CallOverrides): Promise<[string]>;

    feeZlpTracker(overrides?: CallOverrides): Promise<[string]>;

    feeZomiTracker(overrides?: CallOverrides): Promise<[string]>;

    gov(overrides?: CallOverrides): Promise<[string]>;

    handleRewards(
      _shouldClaimZomi: boolean,
      _shouldStakeZomi: boolean,
      _shouldClaimEsZomi: boolean,
      _shouldStakeEsZomi: boolean,
      _shouldStakeMultiplierPoints: boolean,
      _shouldClaimWeth: boolean,
      _shouldConvertWethToEth: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initialize(
      _weth: string,
      _zomi: string,
      _esZomi: string,
      _bnZomi: string,
      _zlp: string,
      _stakedZomiTracker: string,
      _bonusZomiTracker: string,
      _feeZomiTracker: string,
      _feeZlpTracker: string,
      _stakedZlpTracker: string,
      _zlpManager: string,
      _zomiVester: string,
      _zlpVester: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isInitialized(overrides?: CallOverrides): Promise<[boolean]>;

    mintAndStakeZlp(
      _token: string,
      _amount: BigNumberish,
      _minUsdg: BigNumberish,
      _minZlp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    mintAndStakeZlpETH(
      _minUsdg: BigNumberish,
      _minZlp: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    pendingReceivers(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    setGov(
      _gov: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    signalTransfer(
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stakeEsZomi(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stakeZomi(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stakeZomiForAccount(
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stakedZlpTracker(overrides?: CallOverrides): Promise<[string]>;

    stakedZomiTracker(overrides?: CallOverrides): Promise<[string]>;

    unstakeAndRedeemZlp(
      _tokenOut: string,
      _zlpAmount: BigNumberish,
      _minOut: BigNumberish,
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unstakeAndRedeemZlpETH(
      _zlpAmount: BigNumberish,
      _minOut: BigNumberish,
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unstakeEsZomi(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unstakeZomi(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    weth(overrides?: CallOverrides): Promise<[string]>;

    withdrawToken(
      _token: string,
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    zlp(overrides?: CallOverrides): Promise<[string]>;

    zlpManager(overrides?: CallOverrides): Promise<[string]>;

    zlpVester(overrides?: CallOverrides): Promise<[string]>;

    zomi(overrides?: CallOverrides): Promise<[string]>;

    zomiVester(overrides?: CallOverrides): Promise<[string]>;
  };

  acceptTransfer(
    _sender: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  batchCompoundForAccounts(
    _accounts: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  batchStakeZomiForAccount(
    _accounts: string[],
    _amounts: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  bnZomi(overrides?: CallOverrides): Promise<string>;

  bonusZomiTracker(overrides?: CallOverrides): Promise<string>;

  claim(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claimEsZomi(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claimFees(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  compound(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  compoundForAccount(
    _account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  esZomi(overrides?: CallOverrides): Promise<string>;

  feeZlpTracker(overrides?: CallOverrides): Promise<string>;

  feeZomiTracker(overrides?: CallOverrides): Promise<string>;

  gov(overrides?: CallOverrides): Promise<string>;

  handleRewards(
    _shouldClaimZomi: boolean,
    _shouldStakeZomi: boolean,
    _shouldClaimEsZomi: boolean,
    _shouldStakeEsZomi: boolean,
    _shouldStakeMultiplierPoints: boolean,
    _shouldClaimWeth: boolean,
    _shouldConvertWethToEth: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initialize(
    _weth: string,
    _zomi: string,
    _esZomi: string,
    _bnZomi: string,
    _zlp: string,
    _stakedZomiTracker: string,
    _bonusZomiTracker: string,
    _feeZomiTracker: string,
    _feeZlpTracker: string,
    _stakedZlpTracker: string,
    _zlpManager: string,
    _zomiVester: string,
    _zlpVester: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isInitialized(overrides?: CallOverrides): Promise<boolean>;

  mintAndStakeZlp(
    _token: string,
    _amount: BigNumberish,
    _minUsdg: BigNumberish,
    _minZlp: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  mintAndStakeZlpETH(
    _minUsdg: BigNumberish,
    _minZlp: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  pendingReceivers(arg0: string, overrides?: CallOverrides): Promise<string>;

  setGov(
    _gov: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  signalTransfer(
    _receiver: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stakeEsZomi(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stakeZomi(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stakeZomiForAccount(
    _account: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stakedZlpTracker(overrides?: CallOverrides): Promise<string>;

  stakedZomiTracker(overrides?: CallOverrides): Promise<string>;

  unstakeAndRedeemZlp(
    _tokenOut: string,
    _zlpAmount: BigNumberish,
    _minOut: BigNumberish,
    _receiver: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unstakeAndRedeemZlpETH(
    _zlpAmount: BigNumberish,
    _minOut: BigNumberish,
    _receiver: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unstakeEsZomi(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unstakeZomi(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  weth(overrides?: CallOverrides): Promise<string>;

  withdrawToken(
    _token: string,
    _account: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  zlp(overrides?: CallOverrides): Promise<string>;

  zlpManager(overrides?: CallOverrides): Promise<string>;

  zlpVester(overrides?: CallOverrides): Promise<string>;

  zomi(overrides?: CallOverrides): Promise<string>;

  zomiVester(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    acceptTransfer(_sender: string, overrides?: CallOverrides): Promise<void>;

    batchCompoundForAccounts(
      _accounts: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    batchStakeZomiForAccount(
      _accounts: string[],
      _amounts: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    bnZomi(overrides?: CallOverrides): Promise<string>;

    bonusZomiTracker(overrides?: CallOverrides): Promise<string>;

    claim(overrides?: CallOverrides): Promise<void>;

    claimEsZomi(overrides?: CallOverrides): Promise<void>;

    claimFees(overrides?: CallOverrides): Promise<void>;

    compound(overrides?: CallOverrides): Promise<void>;

    compoundForAccount(
      _account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    esZomi(overrides?: CallOverrides): Promise<string>;

    feeZlpTracker(overrides?: CallOverrides): Promise<string>;

    feeZomiTracker(overrides?: CallOverrides): Promise<string>;

    gov(overrides?: CallOverrides): Promise<string>;

    handleRewards(
      _shouldClaimZomi: boolean,
      _shouldStakeZomi: boolean,
      _shouldClaimEsZomi: boolean,
      _shouldStakeEsZomi: boolean,
      _shouldStakeMultiplierPoints: boolean,
      _shouldClaimWeth: boolean,
      _shouldConvertWethToEth: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    initialize(
      _weth: string,
      _zomi: string,
      _esZomi: string,
      _bnZomi: string,
      _zlp: string,
      _stakedZomiTracker: string,
      _bonusZomiTracker: string,
      _feeZomiTracker: string,
      _feeZlpTracker: string,
      _stakedZlpTracker: string,
      _zlpManager: string,
      _zomiVester: string,
      _zlpVester: string,
      overrides?: CallOverrides
    ): Promise<void>;

    isInitialized(overrides?: CallOverrides): Promise<boolean>;

    mintAndStakeZlp(
      _token: string,
      _amount: BigNumberish,
      _minUsdg: BigNumberish,
      _minZlp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mintAndStakeZlpETH(
      _minUsdg: BigNumberish,
      _minZlp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pendingReceivers(arg0: string, overrides?: CallOverrides): Promise<string>;

    setGov(_gov: string, overrides?: CallOverrides): Promise<void>;

    signalTransfer(_receiver: string, overrides?: CallOverrides): Promise<void>;

    stakeEsZomi(
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    stakeZomi(_amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    stakeZomiForAccount(
      _account: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    stakedZlpTracker(overrides?: CallOverrides): Promise<string>;

    stakedZomiTracker(overrides?: CallOverrides): Promise<string>;

    unstakeAndRedeemZlp(
      _tokenOut: string,
      _zlpAmount: BigNumberish,
      _minOut: BigNumberish,
      _receiver: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    unstakeAndRedeemZlpETH(
      _zlpAmount: BigNumberish,
      _minOut: BigNumberish,
      _receiver: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    unstakeEsZomi(
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    unstakeZomi(
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    weth(overrides?: CallOverrides): Promise<string>;

    withdrawToken(
      _token: string,
      _account: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    zlp(overrides?: CallOverrides): Promise<string>;

    zlpManager(overrides?: CallOverrides): Promise<string>;

    zlpVester(overrides?: CallOverrides): Promise<string>;

    zomi(overrides?: CallOverrides): Promise<string>;

    zomiVester(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "StakeZlp(address,uint256)"(
      account?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { account: string; amount: BigNumber }
    >;

    StakeZlp(
      account?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { account: string; amount: BigNumber }
    >;

    "StakeZomi(address,address,uint256)"(
      account?: null,
      token?: null,
      amount?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { account: string; token: string; amount: BigNumber }
    >;

    StakeZomi(
      account?: null,
      token?: null,
      amount?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { account: string; token: string; amount: BigNumber }
    >;

    "UnstakeZlp(address,uint256)"(
      account?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { account: string; amount: BigNumber }
    >;

    UnstakeZlp(
      account?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { account: string; amount: BigNumber }
    >;

    "UnstakeZomi(address,address,uint256)"(
      account?: null,
      token?: null,
      amount?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { account: string; token: string; amount: BigNumber }
    >;

    UnstakeZomi(
      account?: null,
      token?: null,
      amount?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { account: string; token: string; amount: BigNumber }
    >;
  };

  estimateGas: {
    acceptTransfer(
      _sender: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    batchCompoundForAccounts(
      _accounts: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    batchStakeZomiForAccount(
      _accounts: string[],
      _amounts: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    bnZomi(overrides?: CallOverrides): Promise<BigNumber>;

    bonusZomiTracker(overrides?: CallOverrides): Promise<BigNumber>;

    claim(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claimEsZomi(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claimFees(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    compound(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    compoundForAccount(
      _account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    esZomi(overrides?: CallOverrides): Promise<BigNumber>;

    feeZlpTracker(overrides?: CallOverrides): Promise<BigNumber>;

    feeZomiTracker(overrides?: CallOverrides): Promise<BigNumber>;

    gov(overrides?: CallOverrides): Promise<BigNumber>;

    handleRewards(
      _shouldClaimZomi: boolean,
      _shouldStakeZomi: boolean,
      _shouldClaimEsZomi: boolean,
      _shouldStakeEsZomi: boolean,
      _shouldStakeMultiplierPoints: boolean,
      _shouldClaimWeth: boolean,
      _shouldConvertWethToEth: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initialize(
      _weth: string,
      _zomi: string,
      _esZomi: string,
      _bnZomi: string,
      _zlp: string,
      _stakedZomiTracker: string,
      _bonusZomiTracker: string,
      _feeZomiTracker: string,
      _feeZlpTracker: string,
      _stakedZlpTracker: string,
      _zlpManager: string,
      _zomiVester: string,
      _zlpVester: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isInitialized(overrides?: CallOverrides): Promise<BigNumber>;

    mintAndStakeZlp(
      _token: string,
      _amount: BigNumberish,
      _minUsdg: BigNumberish,
      _minZlp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    mintAndStakeZlpETH(
      _minUsdg: BigNumberish,
      _minZlp: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    pendingReceivers(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setGov(
      _gov: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    signalTransfer(
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stakeEsZomi(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stakeZomi(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stakeZomiForAccount(
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stakedZlpTracker(overrides?: CallOverrides): Promise<BigNumber>;

    stakedZomiTracker(overrides?: CallOverrides): Promise<BigNumber>;

    unstakeAndRedeemZlp(
      _tokenOut: string,
      _zlpAmount: BigNumberish,
      _minOut: BigNumberish,
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unstakeAndRedeemZlpETH(
      _zlpAmount: BigNumberish,
      _minOut: BigNumberish,
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unstakeEsZomi(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unstakeZomi(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    weth(overrides?: CallOverrides): Promise<BigNumber>;

    withdrawToken(
      _token: string,
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    zlp(overrides?: CallOverrides): Promise<BigNumber>;

    zlpManager(overrides?: CallOverrides): Promise<BigNumber>;

    zlpVester(overrides?: CallOverrides): Promise<BigNumber>;

    zomi(overrides?: CallOverrides): Promise<BigNumber>;

    zomiVester(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptTransfer(
      _sender: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    batchCompoundForAccounts(
      _accounts: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    batchStakeZomiForAccount(
      _accounts: string[],
      _amounts: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    bnZomi(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    bonusZomiTracker(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    claim(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claimEsZomi(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claimFees(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    compound(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    compoundForAccount(
      _account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    esZomi(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    feeZlpTracker(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    feeZomiTracker(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    gov(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    handleRewards(
      _shouldClaimZomi: boolean,
      _shouldStakeZomi: boolean,
      _shouldClaimEsZomi: boolean,
      _shouldStakeEsZomi: boolean,
      _shouldStakeMultiplierPoints: boolean,
      _shouldClaimWeth: boolean,
      _shouldConvertWethToEth: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initialize(
      _weth: string,
      _zomi: string,
      _esZomi: string,
      _bnZomi: string,
      _zlp: string,
      _stakedZomiTracker: string,
      _bonusZomiTracker: string,
      _feeZomiTracker: string,
      _feeZlpTracker: string,
      _stakedZlpTracker: string,
      _zlpManager: string,
      _zomiVester: string,
      _zlpVester: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isInitialized(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mintAndStakeZlp(
      _token: string,
      _amount: BigNumberish,
      _minUsdg: BigNumberish,
      _minZlp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    mintAndStakeZlpETH(
      _minUsdg: BigNumberish,
      _minZlp: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    pendingReceivers(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setGov(
      _gov: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    signalTransfer(
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stakeEsZomi(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stakeZomi(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stakeZomiForAccount(
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stakedZlpTracker(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    stakedZomiTracker(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    unstakeAndRedeemZlp(
      _tokenOut: string,
      _zlpAmount: BigNumberish,
      _minOut: BigNumberish,
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unstakeAndRedeemZlpETH(
      _zlpAmount: BigNumberish,
      _minOut: BigNumberish,
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unstakeEsZomi(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unstakeZomi(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    weth(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdrawToken(
      _token: string,
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    zlp(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    zlpManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    zlpVester(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    zomi(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    zomiVester(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}