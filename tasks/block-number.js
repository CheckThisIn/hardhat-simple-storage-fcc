// import the task function
const { task } = require("hardhat/config")

// function to get the current block number
task("block-number", "Prints the current block number").setAction(
    // javascript arrow function | remember:
    // "async function blockNumber(taskArgs, hre) {}"
    // is similar to the function beeing a variable
    // "const blockNumber = async (taskArgs, hre) => {}"
    // HRE = hardhat runtime environment
    async (taskArgs, hre) => {
        const blockNumber = await hre.ethers.provider.getBlockNumber()
        console.log(`Current block number is: ${blockNumber}`)
    }
)

module.exports = {}
