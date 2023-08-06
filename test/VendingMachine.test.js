const VendingMachine = artifacts.require("VendingMachine")

contract("VendingMachine", (accounts) => {
    // before each test run this
    before(async () => {
        instance = await VendingMachine.deployed()
    })

    it("the starting balance of the vending machine is 100", async () => {
        let balance = await instance.getVendingMachineBalance()
        assert.equal(balance, 100, 'the intial balance should be 100 dounts')
    })

    it("restock 100 dounts to the vending machine", async () => {
        await instance.restock(100)
        let balance = await instance.getVendingMachineBalance() 
        assert.equal(balance, 200, "balance should be 200 dounts after restock")
    })

    it("purchase 1 dount from the vending machine", async () => {
        await instance.purchase(1, {from: accounts[0], value: web3.utils.toWei('3', 'ether')})
        let balance = await instance.getVendingMachineBalance()
        assert.equal(balance, 199, "balance should be 199 dounts after purchasing 1")
    })
    
})