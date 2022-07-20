const { ethers } = require("hardhat")
const { expect, assert } = require("chai")

// describe(string, anonymous function)
describe("SimpleStorage", function () {
    // initiailize variable
    // let simpleStorageFactory
    // let simpleStorage
    let simpleStorageFactory, simpleStorage

    beforeEach(async function () {
        simpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
        simpleStorage = await simpleStorageFactory.deploy()
    })

    // what to test
    it("Should start with a favorite number of 0.", async function () {
        const currentValue = await simpleStorage.retrieve()
        const expectedValue = "0"
        // assert or expect
        assert.equal(currentValue.toString(), expectedValue)
    })

    it("Should update when we call store", async function () {
        const expectedValue = 7
        const transactionResponse = await simpleStorage.store(expectedValue)
        await transactionResponse.wait(1)
        const updatedValue = await simpleStorage.retrieve()
        assert.equal(updatedValue, expectedValue)
    })

    it("Should update people array when people push is called", async function () {
        const expectedName = "Tim"
        const expectedValue = 14
        const expectedPerson = [expectedValue, expectedName]
        const transactionResponse = await simpleStorage.addPerson(
            expectedName,
            expectedValue
        )
        await transactionResponse.wait(1)
        const updatedPeople = await simpleStorage.people(0)
        const updatedNumber = updatedPeople["favoriteNumber"]
        const updatedName = updatedPeople["name"]
        // const updatedNumber = await simpleStorage.people(0)["favoriteNumber"]
        // const updatedName = await simpleStorage.people(0)["name"]
        assert.equal(updatedNumber, expectedValue)
        assert.equal(updatedName, expectedName)
    })
})
