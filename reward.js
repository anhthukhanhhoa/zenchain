const { ApiPromise, WsProvider } = require('@polkadot/api');
const wsProvider = new WsProvider('wss://rpc.polkadot.io');

async function claimRewards() {
    const api = await ApiPromise.create({ provider: wsProvider });
    const account = '0xd12d1D32B906006b36cE1381E10d146398dde248'; // Địa chỉ tài khoản của anh
    const tx = api.tx.staking.payoutStakersByPage('0x46A148316EBA94539642f3fD6908dcAB10994D1A', 42, 0);
    await tx.signAndSend(account, ({ status }) => {
        console.log(`Transaction status: ${status}`);
    });
}
claimRewards();
