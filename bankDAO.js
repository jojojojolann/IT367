function retrieveBalance(accountId) {
    console.log(`Retrieve balance for account: ${accountId}`);
    return 1000;
}

function debitAccount(accountId, amount) {
    console.log(`Debit account: ${accountId} by ${amount}`);
    return Promise.resolve();
}

module.exports = { retrieveBalance, debitAccount };
