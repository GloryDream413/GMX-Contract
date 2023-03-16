// SPDX-License-Identifier: MIT

pragma solidity 0.6.12;

interface IZMT {
    function beginMigration() external;
    function endMigration() external;
}
