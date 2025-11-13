const fs = require('fs');

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying with", deployer.address);

  const Factory = await ethers.getContractFactory("TrustlessArbitrageBot");
  const contract = await Factory.deploy();
  await contract.deployed();

  console.log("Deployed at:", contract.address);
  fs.writeFileSync('deployedAddress.txt', contract.address);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
