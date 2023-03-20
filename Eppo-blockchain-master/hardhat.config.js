require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */
const PRIVATE_KEY = [process.env.PRIVATE_KEY];
const RPC_URL = process.env.RPC_URL;
const MUMBAI = process.env.MUMBAI;
module.exports = {
  solidity: "0.8.18",
  networks: {
    goerli: {
      url: RPC_URL,
      accounts: PRIVATE_KEY,
    },
    mainnet: {
      chainId: 1,
      url: RPC_URL,
      accounts: PRIVATE_KEY,
    },
    mumbai: {
      url: MUMBAI,
      accounts: PRIVATE_KEY,
    }
  },
};
