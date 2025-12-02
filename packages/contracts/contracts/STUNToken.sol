// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title STUNToken
 * @dev ERC-20 token for the STUN (Secure Trusted Unified Network) distributed AI network
 * @notice Total supply: 1,000,000,000 STUN (1 billion tokens)
 */
contract STUNToken is ERC20, ERC20Burnable, ERC20Pausable, Ownable {
    uint256 public constant TOTAL_SUPPLY = 1_000_000_000 * 10**18; // 1 billion tokens

    constructor(address initialOwner) ERC20("STUN", "STUN") Ownable(initialOwner) {
        // Mint total supply to the contract owner
        _mint(initialOwner, TOTAL_SUPPLY);
    }

    /**
     * @dev Pause all token transfers
     * @notice Only owner can pause
     */
    function pause() public onlyOwner {
        _pause();
    }

    /**
     * @dev Unpause all token transfers
     * @notice Only owner can unpause
     */
    function unpause() public onlyOwner {
        _unpause();
    }

    /**
     * @dev Mint new tokens
     * @param to Address to mint tokens to
     * @param amount Amount of tokens to mint
     * @notice Only owner can mint (for future expansion if needed)
     */
    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    /**
     * @dev Override required by Solidity for multiple inheritance
     */
    function _update(
        address from,
        address to,
        uint256 value
    ) internal override(ERC20, ERC20Pausable) {
        super._update(from, to, value);
    }
}


