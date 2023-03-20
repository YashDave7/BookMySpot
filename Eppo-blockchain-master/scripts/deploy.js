const hre = require("hardhat");
const main = async () => {
  const [owner, random] = await hre.ethers.getSigners();
  const Eppo = await hre.ethers.getContractFactory("Eppo");
  const eppo = await Eppo.deploy();
  await eppo.deployed();

 

  console.log("Contract deployed to ", eppo.address);

  let txn = await eppo.transfer("0xE3e69AB94371d53Be1Bd06daa1D58CdAfd60d030", {
    value: hre.ethers.utils.parseEther("0.00001"),
  });
  await txn.wait();

  txn = await eppo.approveC("zoro");
  await txn.wait();
  console.log("Trasaction Done");

  const tokenOwner = await eppo.balanceOf(random.address);
  console.log(tokenOwner.toNumber());
  // const hasToken = address === tokenOwner;
  // console.log(hasToken);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
