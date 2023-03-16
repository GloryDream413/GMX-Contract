// SPDX-License-Identifier: MIT

pragma solidity 0.6.12;

interface IZomiMigrator {
    function iouTokens(address _token) external view returns (address);
}
