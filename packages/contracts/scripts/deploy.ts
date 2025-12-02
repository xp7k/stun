import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await ethers.provider.getBalance(deployer.address)).toString());

  // Deploy STUNToken
  console.log("\nDeploying STUNToken...");
  const STUNToken = await ethers.getContractFactory("STUNToken");
  const stunToken = await STUNToken.deploy(deployer.address);
  await stunToken.waitForDeployment();
  const stunTokenAddress = await stunToken.getAddress();
  console.log("STUNToken deployed to:", stunTokenAddress);

  // Verify deployment
  const totalSupply = await stunToken.totalSupply();
  console.log("Total supply:", ethers.formatEther(totalSupply), "STUN");

  console.log("\n=== Deployment Summary ===");
  console.log("STUNToken:", stunTokenAddress);
  console.log("\nSave these addresses for your configuration files!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });


