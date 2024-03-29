/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IZomiTimelock, IZomiTimelockInterface } from "../IZomiTimelock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_admin",
        type: "address",
      },
    ],
    name: "setAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_vault",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_isLeverageEnabled",
        type: "bool",
      },
    ],
    name: "setIsLeverageEnabled",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_target",
        type: "address",
      },
      {
        internalType: "address",
        name: "_gov",
        type: "address",
      },
    ],
    name: "signalSetGov",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IZomiTimelock__factory {
  static readonly abi = _abi;
  static createInterface(): IZomiTimelockInterface {
    return new utils.Interface(_abi) as IZomiTimelockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IZomiTimelock {
    return new Contract(address, _abi, signerOrProvider) as IZomiTimelock;
  }
}
