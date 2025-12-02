import { expect } from "chai";
import { ethers } from "hardhat";
import { STUNToken } from "../typechain-types";
import { SignerWithAddress } from "@nomicfoundation/hardhat-ethers/signers";

describe("STUNToken", function () {
  let stunToken: STUNToken;
  let owner: SignerWithAddress;
  let addr1: SignerWithAddress;
  let addr2: SignerWithAddress;

  const TOTAL_SUPPLY = ethers.parseEther("1000000000"); // 1 billion tokens

  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();

    const STUNTokenFactory = await ethers.getContractFactory("STUNToken");
    stunToken = await STUNTokenFactory.deploy(owner.address);
    await stunToken.waitForDeployment();
  });

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      expect(await stunToken.owner()).to.equal(owner.address);
    });

    it("Should assign the total supply of tokens to the owner", async function () {
      const ownerBalance = await stunToken.balanceOf(owner.address);
      expect(ownerBalance).to.equal(TOTAL_SUPPLY);
    });

    it("Should have correct name and symbol", async function () {
      expect(await stunToken.name()).to.equal("STUN");
      expect(await stunToken.symbol()).to.equal("STUN");
    });

    it("Should have 18 decimals", async function () {
      expect(await stunToken.decimals()).to.equal(18);
    });
  });

  describe("Transactions", function () {
    it("Should transfer tokens between accounts", async function () {
      const transferAmount = ethers.parseEther("1000");
      await stunToken.transfer(addr1.address, transferAmount);
      expect(await stunToken.balanceOf(addr1.address)).to.equal(transferAmount);
    });

    it("Should fail if sender doesn't have enough tokens", async function () {
      const initialOwnerBalance = await stunToken.balanceOf(owner.address);
      await expect(
        stunToken.connect(addr1).transfer(owner.address, ethers.parseEther("1"))
      ).to.be.reverted;

      expect(await stunToken.balanceOf(owner.address)).to.equal(initialOwnerBalance);
    });

    it("Should update balances after transfers", async function () {
      const transferAmount = ethers.parseEther("100");
      await stunToken.transfer(addr1.address, transferAmount);
      await stunToken.transfer(addr2.address, transferAmount);

      const addr1Balance = await stunToken.balanceOf(addr1.address);
      const addr2Balance = await stunToken.balanceOf(addr2.address);
      expect(addr1Balance).to.equal(transferAmount);
      expect(addr2Balance).to.equal(transferAmount);
    });
  });

  describe("Pausable", function () {
    it("Should pause transfers", async function () {
      await stunToken.pause();
      await expect(
        stunToken.transfer(addr1.address, ethers.parseEther("100"))
      ).to.be.revertedWithCustomError(stunToken, "EnforcedPause");
    });

    it("Should unpause transfers", async function () {
      await stunToken.pause();
      await stunToken.unpause();
      await stunToken.transfer(addr1.address, ethers.parseEther("100"));
      expect(await stunToken.balanceOf(addr1.address)).to.equal(ethers.parseEther("100"));
    });

    it("Should only allow owner to pause", async function () {
      await expect(stunToken.connect(addr1).pause()).to.be.revertedWithCustomError(
        stunToken,
        "OwnableUnauthorizedAccount"
      );
    });
  });

  describe("Burnable", function () {
    it("Should allow users to burn their own tokens", async function () {
      const burnAmount = ethers.parseEther("1000");
      await stunToken.transfer(addr1.address, burnAmount);
      await stunToken.connect(addr1).burn(burnAmount);
      expect(await stunToken.balanceOf(addr1.address)).to.equal(0);
    });
  });

  describe("Minting", function () {
    it("Should allow owner to mint new tokens", async function () {
      const mintAmount = ethers.parseEther("1000000");
      await stunToken.mint(addr1.address, mintAmount);
      expect(await stunToken.balanceOf(addr1.address)).to.equal(mintAmount);
    });

    it("Should not allow non-owner to mint", async function () {
      await expect(
        stunToken.connect(addr1).mint(addr1.address, ethers.parseEther("1000"))
      ).to.be.revertedWithCustomError(stunToken, "OwnableUnauthorizedAccount");
    });
  });
});


