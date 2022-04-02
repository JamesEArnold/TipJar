import { Contract, ContractFactory } from "ethers";
import { ethers } from "hardhat";

const main = async (): Promise<void> => {
  await deployContract("ChangeJar");
};

const deployContract = async (contractName: string): Promise<void> => {
  const contractFactory: ContractFactory = await ethers.getContractFactory(
    contractName
  );

  const deployedContract: Contract = await contractFactory.deploy();

  await deployedContract.deployed();
  console.log(`${contractName} deployed to:`, deployedContract.address);
};

const run = async () => {
  try {
    await main();
  } catch (error) {
    console.log(error);
  }
};

run();
