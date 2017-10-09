// blockparty specific configs
module.exports = {
  development: {
    contract_addresses:{
      'Conference': null,
      'ConfirmationRepository': null
    },
    name: 'PRIVATE NET',
    etherscan_url: null
  },
  test: {
  },
  ropsten: {
    contract_addresses:{
      'Conference': '0x9320e062d621938bf0e1761f5a005b5caa441e39',
      'ConfirmationRepository': '0xe444b7bec7a2dbd571523a1e2e4580a1b4c1c9b1'
    },
    name: 'ROPSTEN NET',
    etherscan_url: 'https://ropsten.etherscan.io'
  },
  mainnet: {
    contract_addresses:{
      'Conference': null,
      'ConfirmationRepository': '0xe0e0229484b1088e0a751ddffd05b2e6b833e3a2'
    },
    name: 'MAINNET',
    etherscan_url: 'https://etherscan.io'
  }
};