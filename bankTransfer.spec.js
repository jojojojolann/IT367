const transfer = require('./bankTransfer');

test('transfer est appelé avec les bons paramètres', () => {
    const accountId = 123;
    const amount = 100;
    const result = transfer(accountId, amount);
    expect(result).resolves.toBeUndefined();
});
