require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/7MO_lnpTSQynP2kwAOgSH-CjV4-a46lT',
      accounts: ['8566b61f3ad5e4e08fb435535cee7f1f178dd5f63e032208b31575061dc1a454'],
    },
  },
};