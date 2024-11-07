const bankDAO = require('./bankDAO');

test('retrieveBalance est bien appelée mais sans exécution', () => {
    const spy = jest.spyOn(bankDAO, 'retrieveBalance').mockImplementation(() => {});
    bankDAO.retrieveBalance(12345);
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
});

test('accountId est bien transmis à retrieveBalance', () => {
    const spy = jest.spyOn(bankDAO, 'retrieveBalance').mockImplementation(() => {});
    bankDAO.retrieveBalance(12345);
    expect(spy).toHaveBeenCalledWith(12345);
    spy.mockRestore();
});
