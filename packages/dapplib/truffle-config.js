require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue olympic system index remember noise minor hover private frame gather'; 
let testAccounts = [
"0x3a961f4d4951ce11c5d5d90b7545a48085acef6a2fef7017043a32c16d1e2c89",
"0xc6b6dc18a2f8728a97faa93267d489432d2cecf29deff6a2aaf383ddcc11dae5",
"0x9c4267c66c9d744012bd4e530cc2907bea3c60afa9b71557328d8c8a7e5aa4a2",
"0xbc55967e76c925e11ed539dad48689ce04c2a4e13ec65460f831f193b9146f72",
"0xbd996d1a7bbdb5ff07420e50dca1cadd5aba6d7ce205fa9062cbfc35d17c7ce3",
"0x203ca69c5d04d9e740a8c00eab366dfffdc2880bb230a5a87ac1d728eeb0a441",
"0x1b5148f8b02e78aa70728227a9037aa0c03a8cc5d4740b4e1b6684738c462862",
"0xa8a4a9d0ad069683976f20197ec7e07e399ae66e7e59b97f9b13117aacfdab91",
"0xf53e954665371d045fd6d1c72c82702bb39c7eb0bd5f5fa32e3c8f37ffb168b1",
"0x134220270225e4423b15aab7dfab892f8f28fb8ef999eb0e4c74a715f168a4cd"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


