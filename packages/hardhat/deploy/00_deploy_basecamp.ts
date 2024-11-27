import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

/**
 * Deploys a contract named "Basecamp" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployBasecamp: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  const owner = "0x007e483cf6df009db5ec571270b454764d954d95";

  await deploy("Basecamp", {
    from: deployer,
    args: [owner],
    log: true,
    autoMine: true,
  });

  // Get the deployed contract to interact with it after deploying.
  //const Basecamp = await hre.ethers.getContract<Contract>("Basecamp", deployer);
};

export default deployBasecamp;

deployBasecamp.tags = ["Basecamp"];
