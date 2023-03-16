//SPDX-License-Identifier: MIT

pragma solidity 0.6.12;

import "../libraries/math/SafeMath.sol";
import "../libraries/token/IERC20.sol";
import "../libraries/utils/ReentrancyGuard.sol";

import "./interfaces/IAmmRouter.sol";
import "./interfaces/IZomiMigrator.sol";
import "../core/interfaces/IVault.sol";

contract MigrationHandler is ReentrancyGuard {
    using SafeMath for uint256;

    uint256 public constant USDG_PRECISION = 10 ** 18;

    bool public isInitialized;

    address public admin;
    address public ammRouterV1;
    address public ammRouterV2;

    address public vault;

    address public zmt;
    address public xzmt;
    address public usdg;
    address public bnb;
    address public busd;

    mapping (address => mapping (address => uint256)) public refundedAmounts;

    modifier onlyAdmin() {
        require(msg.sender == admin, "MigrationHandler: forbidden");
        _;
    }

    constructor() public {
        admin = msg.sender;
    }

    function initialize(
        address _ammRouterV1,
        address _ammRouterV2,
        address _vault,
        address _zmt,
        address _xzmt,
        address _usdg,
        address _bnb,
        address _busd
    ) public onlyAdmin {
        require(!isInitialized, "MigrationHandler: already initialized");
        isInitialized = true;

        ammRouterV1 = _ammRouterV1;
        ammRouterV2 = _ammRouterV2;

        vault = _vault;

        zmt = _zmt;
        xzmt = _xzmt;
        usdg = _usdg;
        bnb = _bnb;
        busd = _busd;
    }

    function redeemUsdg(
        address _migrator,
        address _redemptionToken,
        uint256 _usdgAmount
    ) external onlyAdmin nonReentrant {
        IERC20(usdg).transferFrom(_migrator, vault, _usdgAmount);
        uint256 amount = IVault(vault).sellUSDG(_redemptionToken, address(this));

        address[] memory path = new address[](2);
        path[0] = bnb;
        path[1] = busd;

        if (_redemptionToken != bnb) {
            path = new address[](3);
            path[0] = _redemptionToken;
            path[1] = bnb;
            path[2] = busd;
        }

        IERC20(_redemptionToken).approve(ammRouterV2, amount);
        IAmmRouter(ammRouterV2).swapExactTokensForTokens(
            amount,
            0,
            path,
            _migrator,
            block.timestamp
        );
    }

    function swap(
        address _migrator,
        uint256 _zmtAmountForUsdg,
        uint256 _xzmtAmountForUsdg,
        uint256 _zmtAmountForBusd
    ) external onlyAdmin nonReentrant {
        address[] memory path = new address[](2);

        path[0] = zmt;
        path[1] = usdg;
        IERC20(zmt).transferFrom(_migrator, address(this), _zmtAmountForUsdg);
        IERC20(zmt).approve(ammRouterV2, _zmtAmountForUsdg);
        IAmmRouter(ammRouterV2).swapExactTokensForTokens(
            _zmtAmountForUsdg,
            0,
            path,
            _migrator,
            block.timestamp
        );

        path[0] = xzmt;
        path[1] = usdg;
        IERC20(xzmt).transferFrom(_migrator, address(this), _xzmtAmountForUsdg);
        IERC20(xzmt).approve(ammRouterV2, _xzmtAmountForUsdg);
        IAmmRouter(ammRouterV2).swapExactTokensForTokens(
            _xzmtAmountForUsdg,
            0,
            path,
            _migrator,
            block.timestamp
        );

        path[0] = zmt;
        path[1] = busd;
        IERC20(zmt).transferFrom(_migrator, address(this), _zmtAmountForBusd);
        IERC20(zmt).approve(ammRouterV1, _zmtAmountForBusd);
        IAmmRouter(ammRouterV1).swapExactTokensForTokens(
            _zmtAmountForBusd,
            0,
            path,
            _migrator,
            block.timestamp
        );
    }

    function refund(
        address _migrator,
        address _account,
        address _token,
        uint256 _usdgAmount
    ) external onlyAdmin nonReentrant {
        address iouToken = IZomiMigrator(_migrator).iouTokens(_token);
        uint256 iouBalance = IERC20(iouToken).balanceOf(_account);
        uint256 iouTokenAmount = _usdgAmount.div(2); // each ZOMI is priced at $2

        uint256 refunded = refundedAmounts[_account][iouToken];
        refundedAmounts[_account][iouToken] = refunded.add(iouTokenAmount);

        require(refundedAmounts[_account][iouToken] <= iouBalance, "MigrationHandler: refundable amount exceeded");

        IERC20(usdg).transferFrom(_migrator, _account, _usdgAmount);
    }
}
