/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IPositionRouter,
  IPositionRouterInterface,
} from "../IPositionRouter";

const _abi = [
  {
    inputs: [],
    name: "decreasePositionRequestKeysStart",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "increasePositionRequestKeysStart",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IPositionRouter__factory {
  static readonly abi = _abi;
  static createInterface(): IPositionRouterInterface {
    return new utils.Interface(_abi) as IPositionRouterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IPositionRouter {
    return new Contract(address, _abi, signerOrProvider) as IPositionRouter;
  }
}
