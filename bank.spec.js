const { transferMoney, getBalance } = require('./bank');
const transfer = require('./bankTransfer');
const { debitAccount, retrieveBalance } = require('./bankDAO');

jest.mock('./bankTransfer');
jest.mock('./bankDAO');

test('transferMoney appelle transfer avec les bons paramètres', async () => {
    transfer.mockResolvedValue();
    const accountId = 123;
    const amount = 100;
    await transferMoney(accountId, amount);
    expect(transfer).toHaveBeenCalledWith(accountId, amount);
});

test('debitAccount est appelé avec les bons paramètres', async () => {
    transfer.mockResolvedValue();
    const accountId = 123;
    const amount = 100;
    await transferMoney(accountId, amount);
    expect(debitAccount).toHaveBeenCalledWith(accountId, amount);
});

test('transferMoney rejette si transfer échoue et ne pas appeler debitAccount', async () => {
    transfer.mockRejectedValue(new Error('Transfer failed'));
    const accountId = 123;
    const amount = 100;

    await expect(transferMoney(accountId, amount)).rejects.toThrow('Transfer failed');
    expect(debitAccount).not.toHaveBeenCalled();
});

test('getBalance retourne le solde de retrieveBalance', () => {
    jest.spyOn(retrieveBalance, 'retrieveBalance').mockReturnValue(1000);
    const balance = getBalance(12345);
    expect(balance).toBe(1000);
});
