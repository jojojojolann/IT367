import { Account } from './account.mjs';
import { accountDAO } from './accountDAO.mjs';
import { ACCOUNT_LIST } from './database.mjs';

export const accountService = {
  addAccount(lastName, firstName) {
    const account = new Account(null, lastName, firstName, null);
    accountDAO.insertAccount(account);
    
    return account;
  },
  getAccountList() {},
  saveAccount(id, lastName, firstName) {},
  getAccount(id) {},
};
