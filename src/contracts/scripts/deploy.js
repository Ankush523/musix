const { ethers } = require("hardhat");
const hre = require("hardhat");
const fs = require("fs");
async function main() {
  const [deployer] = await ethers.getSigners();
  const balance = await deployer.getBalance();
  const Marketplace = await hre.ethers.getContractFactory("NFTMarketplace");
  const marketplace = await Marketplace.deploy();

  await marketplace.deployed().then(console.log);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });