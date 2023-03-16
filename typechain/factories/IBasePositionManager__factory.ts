/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IBasePositionManager,
  IBasePositionManagerInterface,
} from "../IBasePositionManager";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    name: "maxGlobalLongSizes",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    name: "maxGlobalShortSizes",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IBasePositionManager__factory {
  static readonly abi = _abi;
  static createInterface(): IBasePositionManagerInterface {
    return new utils.Interface(_abi) as IBasePositionManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IBasePositionManager {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IBasePositionManager;
  }
}
