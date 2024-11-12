import { Account } from './account.mjs';
import { accountDAO } from './accountDAO.mjs';
import { ACCOUNT_LIST } from './database.mjs';

export const accountService = {
  addAccount(lastName, firstName) {
    const account = new Account(1, lastName, firstName, null);
    accountDAO.insertAccount(account);
    
    return account;
  },
  getAccountList() {
    return accountDAO.retrieveAccountList();
  },
  saveAccount(id, lastName, firstName) {
    const account = accountDAO.retrieveAccount(id);
    if (account) {
      account.lastName = lastName;
      account.firstName = firstName;

      accountDAO.updateAccount(account);
    } else {
      console.log(`Compte avec l'id ${id} non trouvé.`);
    }
  },
  getAccount(id) {
    return accountDAO.retrieveAccount(id);
  },
};
