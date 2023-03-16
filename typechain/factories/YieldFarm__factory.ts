/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { YieldFarm, YieldFarmInterface } from "../YieldFarm";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "address",
        name: "_stakingToken",
        type: "address",
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
        name: "_account",
        type: "address",
      },
    ],
    name: "addNonStakingAccount",
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
    inputs: [
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
    ],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "inWhitelistMode",
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
        name: "",
        type: "address",
      },
    ],
    name: "nonStakingAccounts",
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
    name: "nonStakingSupply",
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
        name: "_account",
        type: "address",
      },
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
    ],
    name: "recoverClaim",
    outputs: [],
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
    name: "removeAdmin",
    outputs: [],
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
    name: "removeNonStakingAccount",
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
        internalType: "bool",
        name: "_inWhitelistMode",
        type: "bool",
      },
    ],
    name: "setInWhitelistMode",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
    ],
    name: "setInfo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_handler",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_isWhitelisted",
        type: "bool",
      },
    ],
    name: "setWhitelistedHandler",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_yieldTrackers",
        type: "address[]",
      },
    ],
    name: "setYieldTrackers",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "stake",
    outputs: [],
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
    name: "stakedBalance",
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
    name: "stakingToken",
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
    name: "totalStaked",
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
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "unstake",
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
    name: "whitelistedHandlers",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "yieldTrackers",
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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200263338038062002633833981810160405260608110156200003757600080fd5b81019080805160405193929190846401000000008211156200005857600080fd5b9083019060208201858111156200006e57600080fd5b82516401000000008111828201881017156200008957600080fd5b82525081516020918201929091019080838360005b83811015620000b85781810151838201526020016200009e565b50505050905090810190601f168015620000e65780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200010a57600080fd5b9083019060208201858111156200012057600080fd5b82516401000000008111828201881017156200013b57600080fd5b82525081516020918201929091019080838360005b838110156200016a57818101518382015260200162000150565b50505050905090810190601f168015620001985780820380516001836020036101000a031916815260200191505b5060405260209081015185519093508592508491600091620001c09183919086019062000479565b508151620001d690600190602085019062000479565b50600480546001600160a01b031916339081179091556000818152600960205260409020805460ff1916600117905562000211908262000242565b50506001600c5550600d80546001600160a01b0319166001600160a01b039290921691909117905550620005159050565b6001600160a01b038216620002895760405162461bcd60e51b81526004018080602001828103825260248152602001806200260f6024913960400191505060405180910390fd5b620002948262000378565b620002b0816002546200041760201b620013271790919060201c565b6002556001600160a01b038216600090815260056020908152604090912054620002e59183906200132762000417821b17901c565b6001600160a01b03831660009081526005602090815260408083209390935560089052205460ff161562000333576200032f816003546200041760201b620013271790919060201c565b6003555b6040805182815290516001600160a01b038416916000917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b60005b60075481101562000413576000600782815481106200039657fe5b600091825260208220015460408051635fd6196560e01b81526001600160a01b03878116600483015291519190921693508392635fd61965926024808201939182900301818387803b158015620003ec57600080fd5b505af115801562000401573d6000803e3d6000fd5b5050600190930192506200037b915050565b5050565b60008282018381101562000472576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620004bc57805160ff1916838001178555620004ec565b82800160010185558215620004ec579182015b82811115620004ec578251825591602001919060010190620004cf565b50620004fa929150620004fe565b5090565b5b80821115620004fa5760008155600101620004ff565b6120ea80620005256000396000f3fe608060405234801561001057600080fd5b50600436106101a15760003560e01c806301e33667146101a657806306fdde03146101de578063095ea7b31461025b57806312d43a511461029b5780631785f53c146102bf57806318160ddd146102e55780631e83409a146102ff57806323b872dd14610325578063276eab4e1461035b57806327e235e3146103fc578063293d6987146104225780632e17de781461042a578063313ce567146104475780633630005114610465578063429b62e51461048b5780634cb5bbe3146104b157806352cd38d9146104d057806355b6ed5c146104ed578063602172671461051b5780636228907714610541578063704802751461056757806370a082311461058d57806372f702f3146105b3578063817b1cd2146105bb5780639554381a146105c357806395d89b41146105e9578063996f11ee146105f1578063a694fc3a1461061f578063a9059cbb1461063c578063a923fc4014610668578063c93be63614610791578063cfad57a214610799578063d92fc87e146107bf578063dd62ed3e146107ed578063fb30d9161461081b575b600080fd5b6101dc600480360360608110156101bc57600080fd5b506001600160a01b03813581169160208101359091169060400135610841565b005b6101e66108a7565b6040805160208082528351818301528351919283929083019185019080838360005b83811015610220578181015183820152602001610208565b50505050905090810190601f16801561024d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102876004803603604081101561027157600080fd5b506001600160a01b038135169060200135610935565b604080519115158252519081900360200190f35b6102a361094b565b604080516001600160a01b039092168252519081900360200190f35b6101dc600480360360208110156102d557600080fd5b50356001600160a01b031661095a565b6102ed6109c8565b60408051918252519081900360200190f35b6101dc6004803603602081101561031557600080fd5b50356001600160a01b03166109ce565b6102876004803603606081101561033b57600080fd5b506001600160a01b03813581169160208101359091169060400135610a85565b6101dc6004803603602081101561037157600080fd5b810190602081018135600160201b81111561038b57600080fd5b82018360208201111561039d57600080fd5b803590602001918460208302840111600160201b831117156103be57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550610af5945050505050565b6102ed6004803603602081101561041257600080fd5b50356001600160a01b0316610b55565b610287610b67565b6101dc6004803603602081101561044057600080fd5b5035610b70565b61044f610be4565b6040805160ff9092168252519081900360200190f35b6102876004803603602081101561047b57600080fd5b50356001600160a01b0316610be9565b610287600480360360208110156104a157600080fd5b50356001600160a01b0316610bfe565b6101dc600480360360208110156104c757600080fd5b50351515610c13565b6102a3600480360360208110156104e657600080fd5b5035610c73565b6102ed6004803603604081101561050357600080fd5b506001600160a01b0381358116916020013516610c9a565b6102ed6004803603602081101561053157600080fd5b50356001600160a01b0316610cb7565b6101dc6004803603602081101561055757600080fd5b50356001600160a01b0316610d00565b6101dc6004803603602081101561057d57600080fd5b50356001600160a01b0316610df3565b6102ed600480360360208110156105a357600080fd5b50356001600160a01b0316610e64565b6102a3610e7f565b6102ed610e8e565b610287600480360360208110156105d957600080fd5b50356001600160a01b0316610eac565b6101e6610ec1565b6101dc6004803603604081101561060757600080fd5b506001600160a01b0381358116916020013516610f1b565b6101dc6004803603602081101561063557600080fd5b5035611022565b6102876004803603604081101561065257600080fd5b506001600160a01b03813516906020013561108f565b6101dc6004803603604081101561067e57600080fd5b810190602081018135600160201b81111561069857600080fd5b8201836020820111156106aa57600080fd5b803590602001918460018302840111600160201b831117156106cb57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295949360208101935035915050600160201b81111561071d57600080fd5b82018360208201111561072f57600080fd5b803590602001918460018302840111600160201b8311171561075057600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955061109c945050505050565b6102ed611110565b6101dc600480360360208110156107af57600080fd5b50356001600160a01b0316611116565b6101dc600480360360408110156107d557600080fd5b506001600160a01b0381351690602001351515611185565b6102ed6004803603604081101561080357600080fd5b506001600160a01b03813581169160200135166111fd565b6101dc6004803603602081101561083157600080fd5b50356001600160a01b0316611228565b6004546001600160a01b0316331461088e576040805162461bcd60e51b8152602060048201526015602482015260008051602061206a833981519152604482015290519081900360640190fd5b6108a26001600160a01b038416838361137f565b505050565b6000805460408051602060026001851615610100026000190190941693909304601f8101849004840282018401909252818152929183018282801561092d5780601f106109025761010080835404028352916020019161092d565b820191906000526020600020905b81548152906001019060200180831161091057829003601f168201915b505050505081565b60006109423384846113d1565b50600192915050565b6004546001600160a01b031681565b6004546001600160a01b031633146109a7576040805162461bcd60e51b8152602060048201526015602482015260008051602061206a833981519152604482015290519081900360640190fd5b6001600160a01b03166000908152600960205260409020805460ff19169055565b60025481565b60005b600754811015610a81576000600782815481106109ea57fe5b6000918252602080832090910154604080516310e059a160e11b81523360048201526001600160a01b038881166024830152915191909216945084936321c0b34293604480850194919392918390030190829087803b158015610a4c57600080fd5b505af1158015610a60573d6000803e3d6000fd5b505050506040513d6020811015610a7657600080fd5b5050506001016109d1565b5050565b600080610ad0836040518060600160405280602d8152602001612017602d91396001600160a01b038816600090815260066020908152604080832033845290915290205491906114bd565b9050610add8533836113d1565b610ae8858585611554565b60019150505b9392505050565b6004546001600160a01b03163314610b42576040805162461bcd60e51b8152602060048201526015602482015260008051602061206a833981519152604482015290519081900360640190fd5b8051610a81906007906020840190611d3d565b60056020526000908152604090205481565b600a5460ff1681565b6002600c541415610bb6576040805162461bcd60e51b815260206004820152601f6024820152600080516020611e51833981519152604482015290519081900360640190fd5b6002600c55610bc5338261176a565b600d54610bdc906001600160a01b0316338361137f565b506001600c55565b601281565b600b6020526000908152604090205460ff1681565b60096020526000908152604090205460ff1681565b6004546001600160a01b03163314610c60576040805162461bcd60e51b8152602060048201526015602482015260008051602061206a833981519152604482015290519081900360640190fd5b600a805460ff1916911515919091179055565b60078181548110610c8057fe5b6000918252602090912001546001600160a01b0316905081565b600660209081526000928352604080842090915290825290205481565b6001600160a01b03811660009081526008602052604081205460ff1615610ce057506000610cfb565b506001600160a01b0381166000908152600560205260409020545b919050565b3360009081526009602052604090205460ff16610d52576040805162461bcd60e51b8152602060048201526015602482015260008051602061206a833981519152604482015290519081900360640190fd5b6001600160a01b03811660009081526008602052604090205460ff1615610daa5760405162461bcd60e51b8152600401808060200182810382526023815260200180611e716023913960400191505060405180910390fd5b610db381611883565b6001600160a01b0381166000908152600860209081526040808320805460ff191660011790556005909152902054600354610ded91611327565b60035550565b6004546001600160a01b03163314610e40576040805162461bcd60e51b8152602060048201526015602482015260008051602061206a833981519152604482015290519081900360640190fd5b6001600160a01b03166000908152600960205260409020805460ff19166001179055565b6001600160a01b031660009081526005602052604090205490565b600d546001600160a01b031681565b6000610ea760035460025461191990919063ffffffff16565b905090565b60086020526000908152604090205460ff1681565b60018054604080516020600284861615610100026000190190941693909304601f8101849004840282018401909252818152929183018282801561092d5780601f106109025761010080835404028352916020019161092d565b3360009081526009602052604090205460ff16610f6d576040805162461bcd60e51b8152602060048201526015602482015260008051602061206a833981519152604482015290519081900360640190fd5b60005b6007548110156108a257600060078281548110610f8957fe5b6000918252602080832090910154604080516310e059a160e11b81526001600160a01b0389811660048301528881166024830152915191909216945084936321c0b34293604480850194919392918390030190829087803b158015610fed57600080fd5b505af1158015611001573d6000803e3d6000fd5b505050506040513d602081101561101757600080fd5b505050600101610f70565b6002600c541415611068576040805162461bcd60e51b815260206004820152601f6024820152600080516020611e51833981519152604482015290519081900360640190fd5b6002600c55600d54611085906001600160a01b031633308461195b565b610bdc33826119bb565b6000610942338484611554565b6004546001600160a01b031633146110e9576040805162461bcd60e51b8152602060048201526015602482015260008051602061206a833981519152604482015290519081900360640190fd5b81516110fc906000906020850190611da2565b5080516108a2906001906020840190611da2565b60035481565b6004546001600160a01b03163314611163576040805162461bcd60e51b8152602060048201526015602482015260008051602061206a833981519152604482015290519081900360640190fd5b600480546001600160a01b0319166001600160a01b0392909216919091179055565b6004546001600160a01b031633146111d2576040805162461bcd60e51b8152602060048201526015602482015260008051602061206a833981519152604482015290519081900360640190fd5b6001600160a01b03919091166000908152600b60205260409020805460ff1916911515919091179055565b6001600160a01b03918216600090815260066020908152604080832093909416825291909152205490565b3360009081526009602052604090205460ff1661127a576040805162461bcd60e51b8152602060048201526015602482015260008051602061206a833981519152604482015290519081900360640190fd5b6001600160a01b03811660009081526008602052604090205460ff166112e7576040805162461bcd60e51b815260206004820152601f60248201527f5969656c64546f6b656e3a205f6163636f756e74206e6f74206d61726b656400604482015290519081900360640190fd5b6112f081611883565b6001600160a01b0381166000908152600860209081526040808320805460ff191690556005909152902054600354610ded91611919565b600082820183811015610aee576040805162461bcd60e51b815260206004820152601b60248201527a536166654d6174683a206164646974696f6e206f766572666c6f7760281b604482015290519081900360640190fd5b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b1790526108a2908490611aad565b6001600160a01b0383166114165760405162461bcd60e51b8152600401808060200182810382526029815260200180611fee6029913960400191505060405180910390fd5b6001600160a01b03821661145b5760405162461bcd60e51b8152600401808060200182810382526027815260200180611f326027913960400191505060405180910390fd5b6001600160a01b03808416600081815260066020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6000818484111561154c5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156115115781810151838201526020016114f9565b50505050905090810190601f16801561153e5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6001600160a01b0383166115995760405162461bcd60e51b815260040180806020018281038252602a815260200180611ebc602a913960400191505060405180910390fd5b6001600160a01b0382166115de5760405162461bcd60e51b8152600401808060200182810382526028815260200180611e946028913960400191505060405180910390fd5b600a5460ff161561163757336000908152600b602052604090205460ff166116375760405162461bcd60e51b81526004018080602001828103825260268152602001806120446026913960400191505060405180910390fd5b61164083611883565b61164982611883565b611686816040518060600160405280602b815260200161208a602b91396001600160a01b03861660009081526005602052604090205491906114bd565b6001600160a01b0380851660009081526005602052604080822093909355908416815220546116b59082611327565b6001600160a01b0380841660009081526005602090815260408083209490945591861681526008909152205460ff16156116fa576003546116f69082611919565b6003555b6001600160a01b03821660009081526008602052604090205460ff161561172c576003546117289082611327565b6003555b816001600160a01b0316836001600160a01b0316600080516020611fa4833981519152836040518082815260200191505060405180910390a3505050565b6001600160a01b0382166117af5760405162461bcd60e51b8152600401808060200182810382526026815260200180611ee66026913960400191505060405180910390fd5b6117b882611883565b6117f581604051806060016040528060278152602001611f59602791396001600160a01b03851660009081526005602052604090205491906114bd565b6001600160a01b03831660009081526005602052604090205560025461181b9082611919565b6002556001600160a01b03821660009081526008602052604090205460ff16156118505760035461184c9082611919565b6003555b6040805182815290516000916001600160a01b03851691600080516020611fa48339815191529181900360200190a35050565b60005b600754811015610a815760006007828154811061189f57fe5b600091825260208220015460408051635fd6196560e01b81526001600160a01b03878116600483015291519190921693508392635fd61965926024808201939182900301818387803b1580156118f457600080fd5b505af1158015611908573d6000803e3d6000fd5b505060019093019250611886915050565b6000610aee83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506114bd565b604080516001600160a01b0380861660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b1790526119b5908590611aad565b50505050565b6001600160a01b038216611a005760405162461bcd60e51b8152600401808060200182810382526024815260200180611f806024913960400191505060405180910390fd5b611a0982611883565b600254611a169082611327565b6002556001600160a01b038216600090815260056020526040902054611a3c9082611327565b6001600160a01b03831660009081526005602090815260408083209390935560089052205460ff1615611a7a57600354611a769082611327565b6003555b6040805182815290516001600160a01b03841691600091600080516020611fa48339815191529181900360200190a35050565b6060611b02826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316611b5e9092919063ffffffff16565b8051909150156108a257808060200190516020811015611b2157600080fd5b50516108a25760405162461bcd60e51b815260040180806020018281038252602a815260200180611fc4602a913960400191505060405180910390fd5b6060611b6d8484600085611b75565b949350505050565b606082471015611bb65760405162461bcd60e51b8152600401808060200182810382526026815260200180611f0c6026913960400191505060405180910390fd5b611bbf85611cd1565b611c10576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b60208310611c4f5780518252601f199092019160209182019101611c30565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114611cb1576040519150601f19603f3d011682016040523d82523d6000602084013e611cb6565b606091505b5091509150611cc6828286611cd7565b979650505050505050565b3b151590565b60608315611ce6575081610aee565b825115611cf65782518084602001fd5b60405162461bcd60e51b81526020600482018181528451602484015284518593919283926044019190850190808383600083156115115781810151838201526020016114f9565b828054828255906000526020600020908101928215611d92579160200282015b82811115611d9257825182546001600160a01b0319166001600160a01b03909116178255602090920191600190910190611d5d565b50611d9e929150611e1c565b5090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10611de357805160ff1916838001178555611e10565b82800160010185558215611e10579182015b82811115611e10578251825591602001919060010190611df5565b50611d9e929150611e3b565b5b80821115611d9e5780546001600160a01b0319168155600101611e1d565b5b80821115611d9e5760008155600101611e3c56fe5265656e7472616e637947756172643a207265656e7472616e742063616c6c005969656c64546f6b656e3a205f6163636f756e7420616c7265616479206d61726b65645969656c64546f6b656e3a207472616e7366657220746f20746865207a65726f20616464726573735969656c64546f6b656e3a207472616e736665722066726f6d20746865207a65726f20616464726573735969656c64546f6b656e3a206275726e2066726f6d20746865207a65726f2061646472657373416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c5969656c64546f6b656e3a20617070726f766520746f20746865207a65726f20616464726573735969656c64546f6b656e3a206275726e20616d6f756e7420657863656564732062616c616e63655969656c64546f6b656e3a206d696e7420746f20746865207a65726f2061646472657373ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef5361666545524332303a204552433230206f7065726174696f6e20646964206e6f7420737563636565645969656c64546f6b656e3a20617070726f76652066726f6d20746865207a65726f20616464726573735969656c64546f6b656e3a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e63655969656c64546f6b656e3a206d73672e73656e646572206e6f742077686974656c69737465645969656c64546f6b656e3a20666f7262696464656e00000000000000000000005969656c64546f6b656e3a207472616e7366657220616d6f756e7420657863656564732062616c616e6365a26469706673582212204824f6f44069d28609de67ba1e152bb74d5a9be3f4f1ecdfef0d44aeeaba4d6964736f6c634300060c00335969656c64546f6b656e3a206d696e7420746f20746865207a65726f2061646472657373";

export class YieldFarm__factory extends ContractFactory {
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
    _name: string,
    _symbol: string,
    _stakingToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<YieldFarm> {
    return super.deploy(
      _name,
      _symbol,
      _stakingToken,
      overrides || {}
    ) as Promise<YieldFarm>;
  }
  getDeployTransaction(
    _name: string,
    _symbol: string,
    _stakingToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _name,
      _symbol,
      _stakingToken,
      overrides || {}
    );
  }
  attach(address: string): YieldFarm {
    return super.attach(address) as YieldFarm;
  }
  connect(signer: Signer): YieldFarm__factory {
    return super.connect(signer) as YieldFarm__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): YieldFarmInterface {
    return new utils.Interface(_abi) as YieldFarmInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): YieldFarm {
    return new Contract(address, _abi, signerOrProvider) as YieldFarm;
  }
}
