const hre = require("hardhat");
const main = async () => {
  const [owner, randomPerson] = await hre.ethers.getSigners();
  const Eppo = await hre.ethers.getContractFactory("Eppo");
  const eppo = await Eppo.deploy();
  await eppo.deployed();

  console.log("Contract deployed to ", eppo.address);
  console.log("Contract deployed by ", owner.address);

  console.log("Testing Starts...");

  let txn = await eppo.transfer(randomPerson.address, {
    value: hre.ethers.utils.parseEther("1"),
  });
  await txn.wait();

  txn = await hre.ethers.provider.getBalance(
    eppo.address
  );
  console.log("Contract Balance : ", hre.ethers.utils.formatEther(txn));

  txn = await eppo.approveC("Luffy");
  await txn.wait();
  console.log("Trasaction Done");

  txn = await hre.ethers.provider.getBalance(
    randomPerson.address
  );
  console.log("Pro balance : ", hre.ethers.utils.formatEther(txn));

  txn = await hre.ethers.provider.getBalance(
    owner.address
  );
  console.log("CLient Balance : ", hre.ethers.utils.formatEther(txn));

  txn = await eppo.owner();
  console.log("owner", txn);

  txn = await eppo.connect(randomPerson).cancelPro();
  await txn.wait();
  console.log("Pro Cancel");

  txn = await hre.ethers.provider.getBalance(
    randomPerson.address
  );
  console.log("CLient Balance : ", hre.ethers.utils.formatEther(txn));

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
