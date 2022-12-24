require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt nasty success system normal note praise connect install desert flock gentle'; 
let testAccounts = [
"0xe66b67c092f6f15b3327be03ba307f4e3a7de743738f411ed421aa59931b4bdb",
"0xd050ee4b1c649c92fe958780c141c56c987b0fc9ea3ea0d1bcb31bb59657573d",
"0x2f330eaceb411b5f1199b38ab88ceff675e59d7ec6d81d57f941b66aff320c28",
"0xa245349fafce947c38444b316dbe79a163d7fccbca00bc3cea4afe0c9314cb27",
"0xfd4fc7d6258e5d804a80c4e1a01f23b65dcbc36d9cc43b202654ce8a9b03591a",
"0x297bd4d6b7283351ca5fe4e76960447e0eccb63a67ec3affe178831a7c38d3ca",
"0xda7ed5aba08d2ac32ae9232675f721550666cedaf1dc515e2382103c8cae255e",
"0xa6bb436b56c768497881a4c4c0e657d91410b557e69f3763b0f083103d56e9fd",
"0x8b00df2212cab40cf8742b82e51901d607158ea7981ec5c9524c2179248d2468",
"0xa071c94dcc4c7e7364b7976f2c3ab23ecd8062badfe68ccd6be23c44b9584b0e"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

