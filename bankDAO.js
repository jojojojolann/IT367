const bankDAO = {
    retrieveBalance: function (accountId) {
        console.log(`Retrieve balance for account: ${accountId}`);
        return 1000;
    }
};

module.exports = bankDAO;
