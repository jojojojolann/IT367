const transfer = require('./bankTransfer');
const { debitAccount } = require('./bankDAO');

async function transferMoney(accountId, amount) {
    try {
        await transfer(accountId, amount);
        return debitAccount(accountId, amount);
    } catch (error) {
        return Promise.reject(error);
    }
}

module.exports = { transferMoney };
