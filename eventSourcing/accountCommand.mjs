import { accountCommandDAO } from "./accountCommandDAO.mjs";
import { Account } from "./account.mjs";
import { cache } from "./cache.mjs";

export const accountCommand = {
  addAccount,
  saveAccount,
};

function addAccountToCache({ lastName, firstName, ...account }) {
  cache.accountCache[account.id] = {
    name: `${lastName} ${firstName}`,
    ...account,
  };
}

function addAccount(lastName, firstName) {
  const newAccount = new Account({ lastName, firstName });
  addAccountToCache(newAccount);
  accountCommandDAO.insertAccount(newAccount);
}

function saveAccount(id, lastName, firstName) {
  const account = accountCommandDAO.getAccount(id); 
  if (account) {
    account.lastName = lastName;
    account.firstName = firstName;
    addAccountToCache(account);
    accountCommandDAO.updateAccount(account);
  }
}
