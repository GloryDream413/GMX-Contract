// SPDX-License-Identifier: MIT

pragma solidity 0.6.12;

import "../libraries/math/SafeMath.sol";
import "../libraries/token/IERC20.sol";
import "../core/interfaces/IZlpManager.sol";

contract ZlpBalance {
    using SafeMath for uint256;

    IZlpManager public zlpManager;
    address public stakedZlpTracker;

    mapping (address => mapping (address => uint256)) public allowances;

    event Approval(address indexed owner, address indexed spender, uint256 value);

    constructor(
        IZlpManager _zlpManager,
        address _stakedZlpTracker
    ) public {
        zlpManager = _zlpManager;
        stakedZlpTracker = _stakedZlpTracker;
    }

    function allowance(address _owner, address _spender) external view returns (uint256) {
        return allowances[_owner][_spender];
    }

    function approve(address _spender, uint256 _amount) external returns (bool) {
        _approve(msg.sender, _spender, _amount);
        return true;
    }

    function transfer(address _recipient, uint256 _amount) external returns (bool) {
        _transfer(msg.sender, _recipient, _amount);
        return true;
    }

    function transferFrom(address _sender, address _recipient, uint256 _amount) external returns (bool) {
        uint256 nextAllowance = allowances[_sender][msg.sender].sub(_amount, "ZlpBalance: transfer amount exceeds allowance");
        _approve(_sender, msg.sender, nextAllowance);
        _transfer(_sender, _recipient, _amount);
        return true;
    }

    function _approve(address _owner, address _spender, uint256 _amount) private {
        require(_owner != address(0), "ZlpBalance: approve from the zero address");
        require(_spender != address(0), "ZlpBalance: approve to the zero address");

        allowances[_owner][_spender] = _amount;

        emit Approval(_owner, _spender, _amount);
    }

    function _transfer(address _sender, address _recipient, uint256 _amount) private {
        require(_sender != address(0), "ZlpBalance: transfer from the zero address");
        require(_recipient != address(0), "ZlpBalance: transfer to the zero address");

        require(
            zlpManager.lastAddedAt(_sender).add(zlpManager.cooldownDuration()) <= block.timestamp,
            "ZlpBalance: cooldown duration not yet passed"
        );

        IERC20(stakedZlpTracker).transferFrom(_sender, _recipient, _amount);
    }
}
