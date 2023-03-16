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
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface IVesterInterface extends ethers.utils.Interface {
  functions: {
    "bonusRewards(address)": FunctionFragment;
    "claimForAccount(address,address)": FunctionFragment;
    "claimable(address)": FunctionFragment;
    "claimedAmounts(address)": FunctionFragment;
    "cumulativeClaimAmounts(address)": FunctionFragment;
    "cumulativeRewardDeductions(address)": FunctionFragment;
    "getCombinedAverageStakedAmount(address)": FunctionFragment;
    "getMaxVestableAmount(address)": FunctionFragment;
    "getVestedAmount(address)": FunctionFragment;
    "pairAmounts(address)": FunctionFragment;
    "rewardTracker()": FunctionFragment;
    "setBonusRewards(address,uint256)": FunctionFragment;
    "setCumulativeRewardDeductions(address,uint256)": FunctionFragment;
    "setTransferredAverageStakedAmounts(address,uint256)": FunctionFragment;
    "setTransferredCumulativeRewards(address,uint256)": FunctionFragment;
    "transferStakeValues(address,address)": FunctionFragment;
    "transferredAverageStakedAmounts(address)": FunctionFragment;
    "transferredCumulativeRewards(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "bonusRewards",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "claimForAccount",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "claimable", values: [string]): string;
  encodeFunctionData(
    functionFragment: "claimedAmounts",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "cumulativeClaimAmounts",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "cumulativeRewardDeductions",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getCombinedAverageStakedAmount",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getMaxVestableAmount",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getVestedAmount",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "pairAmounts", values: [string]): string;
  encodeFunctionData(
    functionFragment: "rewardTracker",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setBonusRewards",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setCumulativeRewardDeductions",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setTransferredAverageStakedAmounts",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setTransferredCumulativeRewards",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferStakeValues",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferredAverageStakedAmounts",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferredCumulativeRewards",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "bonusRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimForAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "claimable", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimedAmounts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cumulativeClaimAmounts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cumulativeRewardDeductions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCombinedAverageStakedAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMaxVestableAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getVestedAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pairAmounts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardTracker",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setBonusRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCumulativeRewardDeductions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTransferredAverageStakedAmounts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTransferredCumulativeRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferStakeValues",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferredAverageStakedAmounts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferredCumulativeRewards",
    data: BytesLike
  ): Result;

  events: {};
}

export class IVester extends BaseContract {
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

  interface: IVesterInterface;

  functions: {
    bonusRewards(
      _account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    claimForAccount(
      _account: string,
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claimable(
      _account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    claimedAmounts(
      _account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    cumulativeClaimAmounts(
      _account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    cumulativeRewardDeductions(
      _account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getCombinedAverageStakedAmount(
      _account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getMaxVestableAmount(
      _account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getVestedAmount(
      _account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    pairAmounts(
      _account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    rewardTracker(overrides?: CallOverrides): Promise<[string]>;

    setBonusRewards(
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setCumulativeRewardDeductions(
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTransferredAverageStakedAmounts(
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTransferredCumulativeRewards(
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferStakeValues(
      _sender: string,
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferredAverageStakedAmounts(
      _account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    transferredCumulativeRewards(
      _account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  bonusRewards(_account: string, overrides?: CallOverrides): Promise<BigNumber>;

  claimForAccount(
    _account: string,
    _receiver: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claimable(_account: string, overrides?: CallOverrides): Promise<BigNumber>;

  claimedAmounts(
    _account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  cumulativeClaimAmounts(
    _account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  cumulativeRewardDeductions(
    _account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getCombinedAverageStakedAmount(
    _account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getMaxVestableAmount(
    _account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getVestedAmount(
    _account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  pairAmounts(_account: string, overrides?: CallOverrides): Promise<BigNumber>;

  rewardTracker(overrides?: CallOverrides): Promise<string>;

  setBonusRewards(
    _account: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setCumulativeRewardDeductions(
    _account: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTransferredAverageStakedAmounts(
    _account: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTransferredCumulativeRewards(
    _account: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferStakeValues(
    _sender: string,
    _receiver: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferredAverageStakedAmounts(
    _account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  transferredCumulativeRewards(
    _account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    bonusRewards(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimForAccount(
      _account: string,
      _receiver: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimable(_account: string, overrides?: CallOverrides): Promise<BigNumber>;

    claimedAmounts(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    cumulativeClaimAmounts(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    cumulativeRewardDeductions(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCombinedAverageStakedAmount(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMaxVestableAmount(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getVestedAmount(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pairAmounts(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rewardTracker(overrides?: CallOverrides): Promise<string>;

    setBonusRewards(
      _account: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setCumulativeRewardDeductions(
      _account: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setTransferredAverageStakedAmounts(
      _account: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setTransferredCumulativeRewards(
      _account: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    transferStakeValues(
      _sender: string,
      _receiver: string,
      overrides?: CallOverrides
    ): Promise<void>;

    transferredAverageStakedAmounts(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferredCumulativeRewards(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    bonusRewards(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimForAccount(
      _account: string,
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claimable(_account: string, overrides?: CallOverrides): Promise<BigNumber>;

    claimedAmounts(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    cumulativeClaimAmounts(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    cumulativeRewardDeductions(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCombinedAverageStakedAmount(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMaxVestableAmount(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getVestedAmount(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pairAmounts(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rewardTracker(overrides?: CallOverrides): Promise<BigNumber>;

    setBonusRewards(
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setCumulativeRewardDeductions(
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTransferredAverageStakedAmounts(
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTransferredCumulativeRewards(
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferStakeValues(
      _sender: string,
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferredAverageStakedAmounts(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferredCumulativeRewards(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    bonusRewards(
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claimForAccount(
      _account: string,
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claimable(
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claimedAmounts(
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    cumulativeClaimAmounts(
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    cumulativeRewardDeductions(
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCombinedAverageStakedAmount(
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMaxVestableAmount(
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getVestedAmount(
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pairAmounts(
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rewardTracker(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setBonusRewards(
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setCumulativeRewardDeductions(
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTransferredAverageStakedAmounts(
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTransferredCumulativeRewards(
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferStakeValues(
      _sender: string,
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferredAverageStakedAmounts(
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferredCumulativeRewards(
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
