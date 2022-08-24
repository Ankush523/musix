require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ethers");
const fs = require("fs");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork : "hardhat",
  networks : {
    hardhat : {
      chainId : 1337
    },
    goerli : {
      url : "https://eth-goerli.g.alchemy.com/v2/g5kUI2wieOnZAKaZ78804HsmjGn86cVI",
      accounts : ["271d2b0391f00e5257d63e080cb97cf0ac3ef6dde736dcb1fff811edbc142b89"]
    }
  },
  solidity: "0.8.9",
};
