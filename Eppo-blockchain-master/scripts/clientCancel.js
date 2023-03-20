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

  txn = await hre.ethers.provider.getBalance(
    owner.address
  );
  console.log("CLient Balance : ", hre.ethers.utils.formatEther(txn));

  txn = await hre.ethers.provider.getBalance(
    randomPerson.address
  );
  console.log("Pro balance : ", hre.ethers.utils.formatEther(txn));

  txn = await eppo.owner();
  console.log("owner", txn);

  txn = await eppo.cancel();
  await txn.wait();
  console.log("CLient Cancel");

  txn = await hre.ethers.provider.getBalance(
    randomPerson.address
  );
  console.log("Pro balance : ", hre.ethers.utils.formatEther(txn));

  txn = await hre.ethers.provider.getBalance(
    owner.address
  );
  console.log("CLient Balance : ", hre.ethers.utils.formatEther(txn));


  // txn = await eppo.getHistory("0xE3e69AB94371d53Be1Bd06daa1D58CdAfd60d030");
  // var date = new Date(txn[0].time.toNumber());
  // var dateFormat =
  //   date.getHours() + ":" + date.getMinutes() + ", " + date.toDateString();

  // console.log("Time : ", dateFormat);
  // console.log("Client : ", txn[0].client);
  // console.log("Pro : ", txn[0].professional);
  // const amt = hre.ethers.utils.formatEther(txn[0].amount);
  // console.log("Amount : ", amt);
  // First Change
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
