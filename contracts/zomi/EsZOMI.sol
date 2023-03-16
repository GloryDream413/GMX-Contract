// SPDX-License-Identifier: MIT

pragma solidity 0.6.12;

import "../tokens/MintableBaseToken.sol";

contract EsZOMI is MintableBaseToken {
    constructor() public MintableBaseToken("Escrowed Zomi", "$esZOMI", 0) {
    }

    function id() external pure returns (string memory _name) {
        return "$esZOMI";
    }
}
