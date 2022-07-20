// imports - ethers, run and network
const { ethers, run, network } = require("hardhat") // hardhat ncludes ethers see dependencies in package.json

// asnyc main
async function main() {
    // hardhat knows we have a contracts folder and we have compiled the contract "into" artifacts folder
    const SimpleStorageFactory = await ethers.getContractFactory(
        "SimpleStorage"
    ) // create the contract object
    console.log("Deploying contract, please wait...")
    const simpleStorage = await SimpleStorageFactory.deploy() // deploy the contract
    await simpleStorage.deployed() // wait until the contract has been deployed :)
    console.log(`Deployed contract to: ${simpleStorage.address}`)
    // what happens if we dep0loy to the local hardhat network and try to verify the contract?
    console.log(network.config)
    // hardhat network chainId:31337. Rinkeby has chainId:4
    // 4 == 4   - true
    // 4 == "4" - true
    // 4 === "4"  - false - NO string conversation!
    if (network.config.chainId === 4 && process.env.ETHERSCAN_API_KEY) {
        // BEFORE we run the verfification process WAIT for a few blocks to be mined
        await simpleStorage.deployTransaction.wait(6)
        // run verify() function
        await verify(simpleStorage.address, [])
    }
    const currentValue = await simpleStorage.retrieve()
    console.log(`Current value is: ${currentValue}`)
    // update the current value
    const transactionResponse = await simpleStorage.store(7)
    await transactionResponse.wait(1)
    const updatedValue = await simpleStorage.retrieve()
    console.log(`Updated value is: ${updatedValue}`)
}

async function verify(contractAddress, args) {
    console.log("Verifying contract...")
    // :verify is the "sub-task" to execute. {} is the object that holds the parameters
    try {
        await run("verify:verify", {
            address: contractAddress,
            constructorArguments: args,
        })
    } catch (e) {
        if (e.message.toLowerCase().includes("already verified")) {
            console.log("Already verified!")
        } else {
            console.log(e)
        }
    }
}

// call main function
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
