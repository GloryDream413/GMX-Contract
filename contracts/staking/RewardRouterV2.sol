// SPDX-License-Identifier: MIT

pragma solidity 0.6.12;

import "../libraries/math/SafeMath.sol";
import "../libraries/token/IERC20.sol";
import "../libraries/token/SafeERC20.sol";
import "../libraries/utils/ReentrancyGuard.sol";
import "../libraries/utils/Address.sol";

import "./interfaces/IRewardTracker.sol";
import "./interfaces/IVester.sol";
import "../tokens/interfaces/IMintable.sol";
import "../tokens/interfaces/IWETH.sol";
import "../core/interfaces/IZlpManager.sol";
import "../access/Governable.sol";

contract RewardRouterV2 is ReentrancyGuard, Governable {
    using SafeMath for uint256;
    using SafeERC20 for IERC20;
    using Address for address payable;

    bool public isInitialized;

    address public weth;

    address public zomi;
    address public esZomi;
    address public bnZomi;

    address public zlp; // ZOMI Liquidity Provider token

    address public stakedZomiTracker;
    address public bonusZomiTracker;
    address public feeZomiTracker;

    address public stakedZlpTracker;
    address public feeZlpTracker;

    address public zlpManager;

    address public zomiVester;
    address public zlpVester;

    mapping (address => address) public pendingReceivers;

    event StakeZomi(address account, address token, uint256 amount);
    event UnstakeZomi(address account, address token, uint256 amount);

    event StakeZlp(address account, uint256 amount);
    event UnstakeZlp(address account, uint256 amount);

    receive() external payable {
        require(msg.sender == weth, "Router: invalid sender");
    }

    function initialize(
        address _weth,
        address _zomi,
        address _esZomi,
        address _bnZomi,
        address _zlp,
        address _stakedZomiTracker,
        address _bonusZomiTracker,
        address _feeZomiTracker,
        address _feeZlpTracker,
        address _stakedZlpTracker,
        address _zlpManager,
        address _zomiVester,
        address _zlpVester
    ) external onlyGov {
        require(!isInitialized, "RewardRouter: already initialized");
        isInitialized = true;

        weth = _weth;

        zomi = _zomi;
        esZomi = _esZomi;
        bnZomi = _bnZomi;

        zlp = _zlp;

        stakedZomiTracker = _stakedZomiTracker;
        bonusZomiTracker = _bonusZomiTracker;
        feeZomiTracker = _feeZomiTracker;

        feeZlpTracker = _feeZlpTracker;
        stakedZlpTracker = _stakedZlpTracker;

        zlpManager = _zlpManager;

        zomiVester = _zomiVester;
        zlpVester = _zlpVester;
    }

    // to help users who accidentally send their tokens to this contract
    function withdrawToken(address _token, address _account, uint256 _amount) external onlyGov {
        IERC20(_token).safeTransfer(_account, _amount);
    }

    function batchStakeZomiForAccount(address[] memory _accounts, uint256[] memory _amounts) external nonReentrant onlyGov {
        address _zomi = zomi;
        for (uint256 i = 0; i < _accounts.length; i++) {
            _stakeZomi(msg.sender, _accounts[i], _zomi, _amounts[i]);
        }
    }

    function stakeZomiForAccount(address _account, uint256 _amount) external nonReentrant onlyGov {
        _stakeZomi(msg.sender, _account, zomi, _amount);
    }

    function stakeZomi(uint256 _amount) external nonReentrant {
        _stakeZomi(msg.sender, msg.sender, zomi, _amount);
    }

    function stakeEsZomi(uint256 _amount) external nonReentrant {
        _stakeZomi(msg.sender, msg.sender, esZomi, _amount);
    }

    function unstakeZomi(uint256 _amount) external nonReentrant {
        _unstakeZomi(msg.sender, zomi, _amount, true);
    }

    function unstakeEsZomi(uint256 _amount) external nonReentrant {
        _unstakeZomi(msg.sender, esZomi, _amount, true);
    }

    function mintAndStakeZlp(address _token, uint256 _amount, uint256 _minUsdg, uint256 _minZlp) external nonReentrant returns (uint256) {
        require(_amount > 0, "RewardRouter: invalid _amount");

        address account = msg.sender;
        uint256 zlpAmount = IZlpManager(zlpManager).addLiquidityForAccount(account, account, _token, _amount, _minUsdg, _minZlp);
        IRewardTracker(feeZlpTracker).stakeForAccount(account, account, zlp, zlpAmount);
        IRewardTracker(stakedZlpTracker).stakeForAccount(account, account, feeZlpTracker, zlpAmount);

        emit StakeZlp(account, zlpAmount);

        return zlpAmount;
    }

    function mintAndStakeZlpETH(uint256 _minUsdg, uint256 _minZlp) external payable nonReentrant returns (uint256) {
        require(msg.value > 0, "RewardRouter: invalid msg.value");

        IWETH(weth).deposit{value: msg.value}();
        IERC20(weth).approve(zlpManager, msg.value);

        address account = msg.sender;
        uint256 zlpAmount = IZlpManager(zlpManager).addLiquidityForAccount(address(this), account, weth, msg.value, _minUsdg, _minZlp);

        IRewardTracker(feeZlpTracker).stakeForAccount(account, account, zlp, zlpAmount);
        IRewardTracker(stakedZlpTracker).stakeForAccount(account, account, feeZlpTracker, zlpAmount);

        emit StakeZlp(account, zlpAmount);

        return zlpAmount;
    }

    function unstakeAndRedeemZlp(address _tokenOut, uint256 _zlpAmount, uint256 _minOut, address _receiver) external nonReentrant returns (uint256) {
        require(_zlpAmount > 0, "RewardRouter: invalid _zlpAmount");

        address account = msg.sender;
        IRewardTracker(stakedZlpTracker).unstakeForAccount(account, feeZlpTracker, _zlpAmount, account);
        IRewardTracker(feeZlpTracker).unstakeForAccount(account, zlp, _zlpAmount, account);
        uint256 amountOut = IZlpManager(zlpManager).removeLiquidityForAccount(account, _tokenOut, _zlpAmount, _minOut, _receiver);

        emit UnstakeZlp(account, _zlpAmount);

        return amountOut;
    }

    function unstakeAndRedeemZlpETH(uint256 _zlpAmount, uint256 _minOut, address payable _receiver) external nonReentrant returns (uint256) {
        require(_zlpAmount > 0, "RewardRouter: invalid _zlpAmount");

        address account = msg.sender;
        IRewardTracker(stakedZlpTracker).unstakeForAccount(account, feeZlpTracker, _zlpAmount, account);
        IRewardTracker(feeZlpTracker).unstakeForAccount(account, zlp, _zlpAmount, account);
        uint256 amountOut = IZlpManager(zlpManager).removeLiquidityForAccount(account, weth, _zlpAmount, _minOut, address(this));

        IWETH(weth).withdraw(amountOut);

        _receiver.sendValue(amountOut);

        emit UnstakeZlp(account, _zlpAmount);

        return amountOut;
    }

    function claim() external nonReentrant {
        address account = msg.sender;

        IRewardTracker(feeZomiTracker).claimForAccount(account, account);
        IRewardTracker(feeZlpTracker).claimForAccount(account, account);

        IRewardTracker(stakedZomiTracker).claimForAccount(account, account);
        IRewardTracker(stakedZlpTracker).claimForAccount(account, account);
    }

    function claimEsZomi() external nonReentrant {
        address account = msg.sender;

        IRewardTracker(stakedZomiTracker).claimForAccount(account, account);
        IRewardTracker(stakedZlpTracker).claimForAccount(account, account);
    }

    function claimFees() external nonReentrant {
        address account = msg.sender;

        IRewardTracker(feeZomiTracker).claimForAccount(account, account);
        IRewardTracker(feeZlpTracker).claimForAccount(account, account);
    }

    function compound() external nonReentrant {
        _compound(msg.sender);
    }

    function compoundForAccount(address _account) external nonReentrant onlyGov {
        _compound(_account);
    }

    function handleRewards(
        bool _shouldClaimZomi,
        bool _shouldStakeZomi,
        bool _shouldClaimEsZomi,
        bool _shouldStakeEsZomi,
        bool _shouldStakeMultiplierPoints,
        bool _shouldClaimWeth,
        bool _shouldConvertWethToEth
    ) external nonReentrant {
        address account = msg.sender;

        uint256 zomiAmount = 0;
        if (_shouldClaimZomi) {
            uint256 zomiAmount0 = IVester(zomiVester).claimForAccount(account, account);
            uint256 zomiAmount1 = IVester(zlpVester).claimForAccount(account, account);
            zomiAmount = zomiAmount0.add(zomiAmount1);
        }

        if (_shouldStakeZomi && zomiAmount > 0) {
            _stakeZomi(account, account, zomi, zomiAmount);
        }

        uint256 esZomiAmount = 0;
        if (_shouldClaimEsZomi) {
            uint256 esZomiAmount0 = IRewardTracker(stakedZomiTracker).claimForAccount(account, account);
            uint256 esZomiAmount1 = IRewardTracker(stakedZlpTracker).claimForAccount(account, account);
            esZomiAmount = esZomiAmount0.add(esZomiAmount1);
        }

        if (_shouldStakeEsZomi && esZomiAmount > 0) {
            _stakeZomi(account, account, esZomi, esZomiAmount);
        }

        if (_shouldStakeMultiplierPoints) {
            uint256 bnZomiAmount = IRewardTracker(bonusZomiTracker).claimForAccount(account, account);
            if (bnZomiAmount > 0) {
                IRewardTracker(feeZomiTracker).stakeForAccount(account, account, bnZomi, bnZomiAmount);
            }
        }

        if (_shouldClaimWeth) {
            if (_shouldConvertWethToEth) {
                uint256 weth0 = IRewardTracker(feeZomiTracker).claimForAccount(account, address(this));
                uint256 weth1 = IRewardTracker(feeZlpTracker).claimForAccount(account, address(this));

                uint256 wethAmount = weth0.add(weth1);
                IWETH(weth).withdraw(wethAmount);

                payable(account).sendValue(wethAmount);
            } else {
                IRewardTracker(feeZomiTracker).claimForAccount(account, account);
                IRewardTracker(feeZlpTracker).claimForAccount(account, account);
            }
        }
    }

    function batchCompoundForAccounts(address[] memory _accounts) external nonReentrant onlyGov {
        for (uint256 i = 0; i < _accounts.length; i++) {
            _compound(_accounts[i]);
        }
    }

    function signalTransfer(address _receiver) external nonReentrant {
        require(IERC20(zomiVester).balanceOf(msg.sender) == 0, "RewardRouter: sender has vested tokens");
        require(IERC20(zlpVester).balanceOf(msg.sender) == 0, "RewardRouter: sender has vested tokens");

        _validateReceiver(_receiver);
        pendingReceivers[msg.sender] = _receiver;
    }

    function acceptTransfer(address _sender) external nonReentrant {
        require(IERC20(zomiVester).balanceOf(_sender) == 0, "RewardRouter: sender has vested tokens");
        require(IERC20(zlpVester).balanceOf(_sender) == 0, "RewardRouter: sender has vested tokens");

        address receiver = msg.sender;
        require(pendingReceivers[_sender] == receiver, "RewardRouter: transfer not signalled");
        delete pendingReceivers[_sender];

        _validateReceiver(receiver);
        _compound(_sender);

        uint256 stakedZomi = IRewardTracker(stakedZomiTracker).depositBalances(_sender, zomi);
        if (stakedZomi > 0) {
            _unstakeZomi(_sender, zomi, stakedZomi, false);
            _stakeZomi(_sender, receiver, zomi, stakedZomi);
        }

        uint256 stakedEsZomi = IRewardTracker(stakedZomiTracker).depositBalances(_sender, esZomi);
        if (stakedEsZomi > 0) {
            _unstakeZomi(_sender, esZomi, stakedEsZomi, false);
            _stakeZomi(_sender, receiver, esZomi, stakedEsZomi);
        }

        uint256 stakedBnZomi = IRewardTracker(feeZomiTracker).depositBalances(_sender, bnZomi);
        if (stakedBnZomi > 0) {
            IRewardTracker(feeZomiTracker).unstakeForAccount(_sender, bnZomi, stakedBnZomi, _sender);
            IRewardTracker(feeZomiTracker).stakeForAccount(_sender, receiver, bnZomi, stakedBnZomi);
        }

        uint256 esZomiBalance = IERC20(esZomi).balanceOf(_sender);
        if (esZomiBalance > 0) {
            IERC20(esZomi).transferFrom(_sender, receiver, esZomiBalance);
        }

        uint256 zlpAmount = IRewardTracker(feeZlpTracker).depositBalances(_sender, zlp);
        if (zlpAmount > 0) {
            IRewardTracker(stakedZlpTracker).unstakeForAccount(_sender, feeZlpTracker, zlpAmount, _sender);
            IRewardTracker(feeZlpTracker).unstakeForAccount(_sender, zlp, zlpAmount, _sender);

            IRewardTracker(feeZlpTracker).stakeForAccount(_sender, receiver, zlp, zlpAmount);
            IRewardTracker(stakedZlpTracker).stakeForAccount(receiver, receiver, feeZlpTracker, zlpAmount);
        }

        IVester(zomiVester).transferStakeValues(_sender, receiver);
        IVester(zlpVester).transferStakeValues(_sender, receiver);
    }

    function _validateReceiver(address _receiver) private view {
        require(IRewardTracker(stakedZomiTracker).averageStakedAmounts(_receiver) == 0, "RewardRouter: stakedZomiTracker.averageStakedAmounts > 0");
        require(IRewardTracker(stakedZomiTracker).cumulativeRewards(_receiver) == 0, "RewardRouter: stakedZomiTracker.cumulativeRewards > 0");

        require(IRewardTracker(bonusZomiTracker).averageStakedAmounts(_receiver) == 0, "RewardRouter: bonusZomiTracker.averageStakedAmounts > 0");
        require(IRewardTracker(bonusZomiTracker).cumulativeRewards(_receiver) == 0, "RewardRouter: bonusZomiTracker.cumulativeRewards > 0");

        require(IRewardTracker(feeZomiTracker).averageStakedAmounts(_receiver) == 0, "RewardRouter: feeZomiTracker.averageStakedAmounts > 0");
        require(IRewardTracker(feeZomiTracker).cumulativeRewards(_receiver) == 0, "RewardRouter: feeZomiTracker.cumulativeRewards > 0");

        require(IVester(zomiVester).transferredAverageStakedAmounts(_receiver) == 0, "RewardRouter: zomiVester.transferredAverageStakedAmounts > 0");
        require(IVester(zomiVester).transferredCumulativeRewards(_receiver) == 0, "RewardRouter: zomiVester.transferredCumulativeRewards > 0");

        require(IRewardTracker(stakedZlpTracker).averageStakedAmounts(_receiver) == 0, "RewardRouter: stakedZlpTracker.averageStakedAmounts > 0");
        require(IRewardTracker(stakedZlpTracker).cumulativeRewards(_receiver) == 0, "RewardRouter: stakedZlpTracker.cumulativeRewards > 0");

        require(IRewardTracker(feeZlpTracker).averageStakedAmounts(_receiver) == 0, "RewardRouter: feeZlpTracker.averageStakedAmounts > 0");
        require(IRewardTracker(feeZlpTracker).cumulativeRewards(_receiver) == 0, "RewardRouter: feeZlpTracker.cumulativeRewards > 0");

        require(IVester(zlpVester).transferredAverageStakedAmounts(_receiver) == 0, "RewardRouter: zomiVester.transferredAverageStakedAmounts > 0");
        require(IVester(zlpVester).transferredCumulativeRewards(_receiver) == 0, "RewardRouter: zomiVester.transferredCumulativeRewards > 0");

        require(IERC20(zomiVester).balanceOf(_receiver) == 0, "RewardRouter: zomiVester.balance > 0");
        require(IERC20(zlpVester).balanceOf(_receiver) == 0, "RewardRouter: zlpVester.balance > 0");
    }

    function _compound(address _account) private {
        _compoundZomi(_account);
        _compoundZlp(_account);
    }

    function _compoundZomi(address _account) private {
        uint256 esZomiAmount = IRewardTracker(stakedZomiTracker).claimForAccount(_account, _account);
        if (esZomiAmount > 0) {
            _stakeZomi(_account, _account, esZomi, esZomiAmount);
        }

        uint256 bnZomiAmount = IRewardTracker(bonusZomiTracker).claimForAccount(_account, _account);
        if (bnZomiAmount > 0) {
            IRewardTracker(feeZomiTracker).stakeForAccount(_account, _account, bnZomi, bnZomiAmount);
        }
    }

    function _compoundZlp(address _account) private {
        uint256 esZomiAmount = IRewardTracker(stakedZlpTracker).claimForAccount(_account, _account);
        if (esZomiAmount > 0) {
            _stakeZomi(_account, _account, esZomi, esZomiAmount);
        }
    }

    function _stakeZomi(address _fundingAccount, address _account, address _token, uint256 _amount) private {
        require(_amount > 0, "RewardRouter: invalid _amount");

        IRewardTracker(stakedZomiTracker).stakeForAccount(_fundingAccount, _account, _token, _amount);
        IRewardTracker(bonusZomiTracker).stakeForAccount(_account, _account, stakedZomiTracker, _amount);
        IRewardTracker(feeZomiTracker).stakeForAccount(_account, _account, bonusZomiTracker, _amount);

        emit StakeZomi(_account, _token, _amount);
    }

    function _unstakeZomi(address _account, address _token, uint256 _amount, bool _shouldReduceBnZomi) private {
        require(_amount > 0, "RewardRouter: invalid _amount");

        uint256 balance = IRewardTracker(stakedZomiTracker).stakedAmounts(_account);

        IRewardTracker(feeZomiTracker).unstakeForAccount(_account, bonusZomiTracker, _amount, _account);
        IRewardTracker(bonusZomiTracker).unstakeForAccount(_account, stakedZomiTracker, _amount, _account);
        IRewardTracker(stakedZomiTracker).unstakeForAccount(_account, _token, _amount, _account);

        if (_shouldReduceBnZomi) {
            uint256 bnZomiAmount = IRewardTracker(bonusZomiTracker).claimForAccount(_account, _account);
            if (bnZomiAmount > 0) {
                IRewardTracker(feeZomiTracker).stakeForAccount(_account, _account, bnZomi, bnZomiAmount);
            }

            uint256 stakedBnZomi = IRewardTracker(feeZomiTracker).depositBalances(_account, bnZomi);
            if (stakedBnZomi > 0) {
                uint256 reductionAmount = stakedBnZomi.mul(_amount).div(balance);
                IRewardTracker(feeZomiTracker).unstakeForAccount(_account, bnZomi, reductionAmount, _account);
                IMintable(bnZomi).burn(_account, reductionAmount);
            }
        }

        emit UnstakeZomi(_account, _token, _amount);
    }
}
