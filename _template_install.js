// Delete old folder (-f force remove / -r: Removes directories and their content recursively)
// Terminal command: "rm -r hardhat-simple-storage-fcc"
// >> go to folder <<
// 1. mkdir hardhat-simple-storage-fcc
// 2. cd hardhat-simple-storage-fcc
// open workspace in Visual Studio CODE (or File -> Open Folder)
// Terminal command: "code ."
// >> INSTALL <<
// Install node and yarn. Check it's there:
// Terminal command: "node --version" and "yarn --version"
// Terminal command: "yarn init"
// enter all if you don't want to change the recommended values, e.g. "question MIT:" change from "MIT" to "BSD2" etc.
// Terminal command: "yarn add --dev hardhat"
// IMPORTANT "TWO DASHES!" "--dev"NOT "-dev" !!!
// the yarn equivilant of npm (node paket manager) is yarn:             npm = yarn
// the yarn equivilant of npx (node paket executer?) is ALSO yarn:    npx = yarn
// Install Hardhat "npx hardhat" or
// Terminal command: "yarn hardhat"
// Install prettier & prettier solidity plugins locally in this project
// Terminal command: "yarn add --dev prettier prettier-plugin-solidity"
// Create new file ".prettierrc":
// {
//     "tabWidth": 4,
//     "useTabs": false,
//     "semi": false,
//     "singleQuote": false
// }
// excludes file NOT to be formatted by prettier
// Create new file ".prettierignore":
// node_modules
// package.json
// img
// artifacts
// cache
// coverage
// .env
// .*
// README.md
// coverage.json
// change the script-example to the "deploy.js" -> add code =)
// Run the script = deploy the contract
// Terminal command: "yarn hardhat run scripts/deploy.js"
// Run a script on a specific network
// Terminal command: "yarn hardhat run scripts/deploy.js --network hardhat"
// Terminal command: "yarn hardhat run scripts/deploy.js --network rinkeby"
// Add the defaultNetwork in "hardhat.config.js" under "module.exports":
// defaultNetwork: "hardhat",
// Add the networks section in "hardhat.config.js" under "module.exports":
// networks: {rinkeby: {url: xyz, accounts: [xyz], chainId: 4,} },
// Create a new file ".env"
// add Rinkeby parameters from alchemy in ".env" file:
// RINKEBY_RPC_URL=https://eth-rinkeby.alchemyapi.io/v2/PwUPgTJH9T93FflDGG3U49oP8zJxIbCx
// add "dotenv" package
// Terminal command: "yarn add --dev dotenv"
// Add import of dotenv in hardhat.config.js:
// require("dotenv").config()
// Install the hardhat-etherscan plugin (test-automation)
// Terminal command: "yarn add --dev @nomiclabs/hardhat-etherscan"
// Add import of hardhat-etherscan plugin in hardhat.config.js:
// require("@nomiclabs/hardhat-etherscan")
// GET api-key from etherscan.io --> Misc --> API Documentation --> LOGIN
// api-key: A92UANJ7NXFYMT2ZIT47EJVZT59RCDFHAF
// CREATE our own hardhat tasks (https://hardhat.org/guides/create-task.html)
// 1. delete the "task("accounts", "Prints the list of accounts",..)" section in hardhat.config.js
// 2. create a new "tasks" folder
// 3. create a new file "block-number.js" in the "tasks" folder
// 4. add "require("./tasks/block-number")" in hardhat.config.js
// 5. add "module.exports = {}" in block-number.js
//
// create a local (persistent) hardhat network = localhost network
// Terminal command: "yarn hardhat node"
// Add the "localhost" configuration into hardhat.config.js networks
// Install the gas-reporter plugin
// Terminal command: "yarn add hardhat-gas-reporter --dev"
// add "gasReporter" section and add "require("hardhat-gas-reporter")" in hardhat.config.js
// GasReporter runs on tests
//
// Install the solidity-coverage plugin and add it to the config in "hardhat.config.js"
// Terminal command: "yarn add --dev solidity-coverage"
// Run it with Terminal command: "yarn hardhat coverage"
//
