import { accountCommandDAO } from "./accountCommandDAO.mjs";
import { Account } from "./account.mjs";

export const accountCommand = {
  addAccount,
  saveAccount,
};

function addAccount(lastName, firstName) {
  const newAccount = new Account(null, lastName, firstName);
  accountCommandDAO.insertAccount(newAccount);
}

function saveAccount(id, lastName, firstName) {
  const account = accountCommandDAO.getAccount(id); 
  if (account) {
    account.lastName = lastName;
    account.firstName = firstName;
    accountCommandDAO.updateAccount(account);
  }
}
