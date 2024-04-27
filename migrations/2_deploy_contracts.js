const GeNFT = artifacts.require('GeNFT')

module.exports = async (deployer) => {
  const accounts = await web3.eth.getAccounts()

  await deployer.deploy(GeNFT, 'GeNFTs', 'TNT', 10, accounts[1])
}

