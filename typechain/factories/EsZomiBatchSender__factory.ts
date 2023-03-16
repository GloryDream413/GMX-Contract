/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  EsZomiBatchSender,
  EsZomiBatchSenderInterface,
} from "../EsZomiBatchSender";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_esZomi",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "admin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "esZomi",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IVester",
        name: "_vester",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_minRatio",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "_accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]",
      },
    ],
    name: "send",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610a3d380380610a3d8339818101604052602081101561003357600080fd5b5051600080546001600160a01b03199081163317909155600180546001600160a01b03909316929091169190911790556109cb806100726000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80636babcfa7146100465780638b8f837b1461006a578063f851a440146101a4575b600080fd5b61004e6101ac565b604080516001600160a01b039092168252519081900360200190f35b6101a26004803603608081101561008057600080fd5b6001600160a01b0382351691602081013591810190606081016040820135600160201b8111156100af57600080fd5b8201836020820111156100c157600080fd5b803590602001918460208302840111600160201b831117156100e257600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561013157600080fd5b82018360208201111561014357600080fd5b803590602001918460208302840111600160201b8311171561016457600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295506101bb945050505050565b005b61004e61072e565b6001546001600160a01b031681565b6000546001600160a01b03163314610219576040805162461bcd60e51b815260206004820152601c60248201527b22b9ad37b6b4a130ba31b429b2b73232b91d103337b93134b23232b760211b604482015290519081900360640190fd5b6000846001600160a01b0316636bcb411a6040518163ffffffff1660e01b815260040160206040518083038186803b15801561025457600080fd5b505afa158015610268573d6000803e3d6000fd5b505050506040513d602081101561027e57600080fd5b5051905060005b83518110156107265760015484516001600160a01b03909116906323b872dd9033908790859081106102b357fe5b60200260200101518685815181106102c757fe5b60200260200101516040518463ffffffff1660e01b815260040180846001600160a01b03168152602001836001600160a01b031681526020018281526020019350505050602060405180830381600087803b15801561032557600080fd5b505af1158015610339573d6000803e3d6000fd5b505050506040513d602081101561034f57600080fd5b505082516000906104009085908490811061036657fe5b6020026020010151886001600160a01b031663b71bce2a88868151811061038957fe5b60200260200101516040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b1580156103ce57600080fd5b505afa1580156103e2573d6000803e3d6000fd5b505050506040513d60208110156103f857600080fd5b50519061073d565b9050866001600160a01b031663d0b038b786848151811061041d57fe5b6020026020010151836040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050600060405180830381600087803b15801561046c57600080fd5b505af1158015610480573d6000803e3d6000fd5b505050506000836001600160a01b0316633792def38785815181106104a157fe5b60200260200101516040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b1580156104e657600080fd5b505afa1580156104fa573d6000803e3d6000fd5b505050506040513d602081101561051057600080fd5b505190506000610520828461073d565b90506000896001600160a01b03166345f01ee689878151811061053f57fe5b60200260200101516040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561058457600080fd5b505afa158015610598573d6000803e3d6000fd5b505050506040513d60208110156105ae57600080fd5b505190506105bc828a61079e565b8111156105cc575050505061071e565b60006105d88a8461079e565b905061068461067d84610677878b6001600160a01b031663a31802178f8d8151811061060057fe5b60200260200101516040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561064557600080fd5b505afa158015610659573d6000803e3d6000fd5b505050506040513d602081101561066f57600080fd5b50519061079e565b906107f7565b8290610836565b905061069485610677838661079e565b90508a6001600160a01b031663e3ecc4b28a88815181106106b157fe5b6020026020010151836040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050600060405180830381600087803b15801561070057600080fd5b505af1158015610714573d6000803e3d6000fd5b5050505050505050505b600101610285565b505050505050565b6000546001600160a01b031681565b600082820183811015610795576040805162461bcd60e51b815260206004820152601b60248201527a536166654d6174683a206164646974696f6e206f766572666c6f7760281b604482015290519081900360640190fd5b90505b92915050565b6000826107ad57506000610798565b828202828482816107ba57fe5b04146107955760405162461bcd60e51b81526004018080602001828103825260218152602001806109756021913960400191505060405180910390fd5b600061079583836040518060400160405280601a815260200179536166654d6174683a206469766973696f6e206279207a65726f60301b815250610878565b600061079583836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525061091a565b600081836109045760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156108c95781810151838201526020016108b1565b50505050905090810190601f1680156108f65780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50600083858161091057fe5b0495945050505050565b6000818484111561096c5760405162461bcd60e51b81526020600482018181528351602484015283519092839260449091019190850190808383600083156108c95781810151838201526020016108b1565b50505090039056fe536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a26469706673582212203cf19751e10267f17cbc21a74b53d5fad0e239bc97faa63ccf2bc6fe9ec894b664736f6c634300060c0033";

export class EsZomiBatchSender__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _esZomi: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<EsZomiBatchSender> {
    return super.deploy(_esZomi, overrides || {}) as Promise<EsZomiBatchSender>;
  }
  getDeployTransaction(
    _esZomi: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_esZomi, overrides || {});
  }
  attach(address: string): EsZomiBatchSender {
    return super.attach(address) as EsZomiBatchSender;
  }
  connect(signer: Signer): EsZomiBatchSender__factory {
    return super.connect(signer) as EsZomiBatchSender__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EsZomiBatchSenderInterface {
    return new utils.Interface(_abi) as EsZomiBatchSenderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EsZomiBatchSender {
    return new Contract(address, _abi, signerOrProvider) as EsZomiBatchSender;
  }
}
