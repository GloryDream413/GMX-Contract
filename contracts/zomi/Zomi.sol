// SPDX-License-Identifier: MIT

pragma solidity 0.6.12;

import "../tokens/MintableBaseToken.sol";

contract Zomi is MintableBaseToken {
    constructor() public MintableBaseToken("Zomi", "ZOMI", 0) {
    }

    function id() external pure returns (string memory _name) {
        return "ZOMI";
    }
}