/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ZMT, ZMTInterface } from "../ZMT";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_initialSupply",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "addAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
    ],
    name: "addBlockedRecipient",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_msgSender",
        type: "address",
      },
    ],
    name: "addMsgSender",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "admins",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowances",
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
        name: "",
        type: "address",
      },
    ],
    name: "allowedMsgSenders",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        name: "",
        type: "address",
      },
    ],
    name: "balances",
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
    inputs: [],
    name: "beginMigration",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "blockedRecipients",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "endMigration",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "gov",
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
    name: "hasActiveMigration",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "migrationTime",
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
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "removeAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
    ],
    name: "removeBlockedRecipient",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_msgSender",
        type: "address",
      },
    ],
    name: "removeMsgSender",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_gov",
        type: "address",
      },
    ],
    name: "setGov",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_migrationTime",
        type: "uint256",
      },
    ],
    name: "setNextMigrationTime",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdrawToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516113bd3803806113bd8339818101604052602081101561003357600080fd5b5051600180546001600160a01b0319163390811782556000818152600560205260409020805460ff191690921790915561006d9082610073565b506101d1565b6001600160a01b0382166100ce576040805162461bcd60e51b815260206004820152601d60248201527f5a4d543a206d696e7420746f20746865207a65726f2061646472657373000000604482015290519081900360640190fd5b6100e78160005461017060201b610cb11790919060201c565b60009081556001600160a01b038316815260036020908152604090912054610118918390610cb1610170821b17901c565b6001600160a01b03831660008181526003602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b6000828201838110156101ca576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b6111dd806101e06000396000f3fe608060405234801561001057600080fd5b50600436106101545760003560e01c806301d060b01461015957806301e336671461019357806306fdde03146101cb57806308ebd96a14610248578063095ea7b31461026e57806312d43a511461029a5780631785f53c146102be57806318160ddd146102e4578063205b10a0146102fe57806323b872dd1461032457806327e235e31461035a578063313ce56714610380578063429b62e51461039e5780634d9567ee146103c457806355b6ed5c146103ea5780635ec080fc146104185780636c525d041461043e578063704802751461044657806370a082311461046c5780638fb998e11461049257806395d89b41146101cb578063a9059cbb1461049a578063a92c6fae146104c6578063b9952455146104e3578063cfad57a214610509578063dd62ed3e1461052f578063fe0194f21461055d578063ff61a51c14610565575b600080fd5b61017f6004803603602081101561016f57600080fd5b50356001600160a01b031661056d565b604080519115158252519081900360200190f35b6101c9600480360360608110156101a957600080fd5b506001600160a01b03813581169160208101359091169060400135610582565b005b6101d361065a565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561020d5781810151838201526020016101f5565b50505050905090810190601f16801561023a5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101c96004803603602081101561025e57600080fd5b50356001600160a01b0316610679565b61017f6004803603604081101561028457600080fd5b506001600160a01b0381351690602001356106ed565b6102a2610703565b604080516001600160a01b039092168252519081900360200190f35b6101c9600480360360208110156102d457600080fd5b50356001600160a01b0316610712565b6102ec610783565b60408051918252519081900360200190f35b61017f6004803603602081101561031457600080fd5b50356001600160a01b0316610789565b61017f6004803603606081101561033a57600080fd5b506001600160a01b0381358116916020810135909116906040013561079e565b6102ec6004803603602081101561037057600080fd5b50356001600160a01b031661080c565b61038861081e565b6040805160ff9092168252519081900360200190f35b61017f600480360360208110156103b457600080fd5b50356001600160a01b0316610823565b6101c9600480360360208110156103da57600080fd5b50356001600160a01b0316610838565b6102ec6004803603604081101561040057600080fd5b506001600160a01b03813581169160200135166108a9565b6101c96004803603602081101561042e57600080fd5b50356001600160a01b03166108c6565b6101c9610937565b6101c96004803603602081101561045c57600080fd5b50356001600160a01b031661099b565b6102ec6004803603602081101561048257600080fd5b50356001600160a01b0316610a0f565b61017f610a2a565b61017f600480360360408110156104b057600080fd5b506001600160a01b038135169060200135610a3a565b6101c9600480360360208110156104dc57600080fd5b5035610a47565b6101c9600480360360208110156104f957600080fd5b50356001600160a01b0316610af0565b6101c96004803603602081101561051f57600080fd5b50356001600160a01b0316610b64565b6102ec6004803603604081101561054557600080fd5b506001600160a01b0381358116916020013516610bd6565b6101c9610c01565b6102ec610cab565b60076020526000908152604090205460ff1681565b6001546001600160a01b031633146105d2576040805162461bcd60e51b815260206004820152600e60248201526d2d26aa1d103337b93134b23232b760911b604482015290519081900360640190fd5b826001600160a01b031663a9059cbb83836040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050602060405180830381600087803b15801561062957600080fd5b505af115801561063d573d6000803e3d6000fd5b505050506040513d602081101561065357600080fd5b5050505050565b6040518060400160405280600381526020016216935560ea1b81525081565b6001546001600160a01b031633146106c9576040805162461bcd60e51b815260206004820152600e60248201526d2d26aa1d103337b93134b23232b760911b604482015290519081900360640190fd5b6001600160a01b03166000908152600760205260409020805460ff19166001179055565b60006106fa338484610d10565b50600192915050565b6001546001600160a01b031681565b6001546001600160a01b03163314610762576040805162461bcd60e51b815260206004820152600e60248201526d2d26aa1d103337b93134b23232b760911b604482015290519081900360640190fd5b6001600160a01b03166000908152600560205260409020805460ff19169055565b60005481565b60066020526000908152604090205460ff1681565b6000806107e98360405180606001604052806026815260200161111c602691396001600160a01b03881660009081526004602090815260408083203384529091529020549190610e12565b90506107f6853383610d10565b610801858585610ea9565b506001949350505050565b60036020526000908152604090205481565b601281565b60056020526000908152604090205460ff1681565b6001546001600160a01b03163314610888576040805162461bcd60e51b815260206004820152600e60248201526d2d26aa1d103337b93134b23232b760911b604482015290519081900360640190fd5b6001600160a01b03166000908152600760205260409020805460ff19169055565b600460209081526000928352604080842090915290825290205481565b6001546001600160a01b03163314610916576040805162461bcd60e51b815260206004820152600e60248201526d2d26aa1d103337b93134b23232b760911b604482015290519081900360640190fd5b6001600160a01b03166000908152600660205260409020805460ff19169055565b3360009081526005602052604090205460ff1661098c576040805162461bcd60e51b815260206004820152600e60248201526d2d26aa1d103337b93134b23232b760911b604482015290519081900360640190fd5b6001805460ff60a01b19169055565b6001546001600160a01b031633146109eb576040805162461bcd60e51b815260206004820152600e60248201526d2d26aa1d103337b93134b23232b760911b604482015290519081900360640190fd5b6001600160a01b03166000908152600560205260409020805460ff19166001179055565b6001600160a01b031660009081526003602052604090205490565b600154600160a01b900460ff1681565b60006106fa338484610ea9565b6001546001600160a01b03163314610a97576040805162461bcd60e51b815260206004820152600e60248201526d2d26aa1d103337b93134b23232b760911b604482015290519081900360640190fd5b6002548111610aeb576040805162461bcd60e51b815260206004820152601b60248201527a5a4d543a20696e76616c6964205f6d6967726174696f6e54696d6560281b604482015290519081900360640190fd5b600255565b6001546001600160a01b03163314610b40576040805162461bcd60e51b815260206004820152600e60248201526d2d26aa1d103337b93134b23232b760911b604482015290519081900360640190fd5b6001600160a01b03166000908152600660205260409020805460ff19166001179055565b6001546001600160a01b03163314610bb4576040805162461bcd60e51b815260206004820152600e60248201526d2d26aa1d103337b93134b23232b760911b604482015290519081900360640190fd5b600180546001600160a01b0319166001600160a01b0392909216919091179055565b6001600160a01b03918216600090815260046020908152604080832093909416825291909152205490565b3360009081526005602052604090205460ff16610c56576040805162461bcd60e51b815260206004820152600e60248201526d2d26aa1d103337b93134b23232b760911b604482015290519081900360640190fd5b6002544211610c965760405162461bcd60e51b81526004018080602001828103825260218152602001806111876021913960400191505060405180910390fd5b6001805460ff60a01b1916600160a01b179055565b60025481565b600082820183811015610d09576040805162461bcd60e51b815260206004820152601b60248201527a536166654d6174683a206164646974696f6e206f766572666c6f7760281b604482015290519081900360640190fd5b9392505050565b6001600160a01b038316610d555760405162461bcd60e51b81526004018080602001828103825260228152602001806110fa6022913960400191505060405180910390fd5b6001600160a01b038216610db0576040805162461bcd60e51b815260206004820181905260248201527f5a4d543a20617070726f766520746f20746865207a65726f2061646472657373604482015290519081900360640190fd5b6001600160a01b03808416600081815260046020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b60008184841115610ea15760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610e66578181015183820152602001610e4e565b50505050905090810190601f168015610e935780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6001600160a01b038316610eee5760405162461bcd60e51b81526004018080602001828103825260238152602001806110d76023913960400191505060405180910390fd5b6001600160a01b038216610f335760405162461bcd60e51b81526004018080602001828103825260218152602001806111426021913960400191505060405180910390fd5b600154600160a01b900460ff161561100e573360009081526007602052604090205460ff16610fa5576040805162461bcd60e51b81526020600482015260196024820152782d26aa1d103337b93134b23232b71036b9b39739b2b73232b960391b604482015290519081900360640190fd5b6001600160a01b03821660009081526006602052604090205460ff161561100e576040805162461bcd60e51b81526020600482015260186024820152771693550e88199bdc989a5919195b881c9958da5c1a595b9d60421b604482015290519081900360640190fd5b61104b81604051806060016040528060248152602001611163602491396001600160a01b0386166000908152600360205260409020549190610e12565b6001600160a01b03808516600090815260036020526040808220939093559084168152205461107a9082610cb1565b6001600160a01b0380841660008181526003602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a350505056fe5a4d543a207472616e736665722066726f6d20746865207a65726f20616464726573735a4d543a20617070726f76652066726f6d20746865207a65726f20616464726573735a4d543a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e63655a4d543a207472616e7366657220746f20746865207a65726f20616464726573735a4d543a207472616e7366657220616d6f756e7420657863656564732062616c616e63655a4d543a206d6967726174696f6e54696d65206e6f742079657420706173736564a2646970667358221220b51107976417c30c968aece4071da1f0b14a7a51301155851e1e154624dd932c64736f6c634300060c0033";

export class ZMT__factory extends ContractFactory {
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
    _initialSupply: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ZMT> {
    return super.deploy(_initialSupply, overrides || {}) as Promise<ZMT>;
  }
  getDeployTransaction(
    _initialSupply: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_initialSupply, overrides || {});
  }
  attach(address: string): ZMT {
    return super.attach(address) as ZMT;
  }
  connect(signer: Signer): ZMT__factory {
    return super.connect(signer) as ZMT__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ZMTInterface {
    return new utils.Interface(_abi) as ZMTInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ZMT {
    return new Contract(address, _abi, signerOrProvider) as ZMT;
  }
}
