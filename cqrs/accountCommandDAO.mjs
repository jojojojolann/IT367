import { ACCOUNT_LIST } from "./database.mjs";

export const accountCommandDAO = {
  insertAccount,
  updateAccount,
  getAccount,
};

function getAccount(id) {
  return ACCOUNT_LIST.find((a) => a.id === id);
}

function insertAccount(account) {
  ACCOUNT_LIST.push(account);
}

function updateAccount(account) {
  const index = ACCOUNT_LIST.findIndex((a) => a.id === account.id);
  if (index !== -1) {
    ACCOUNT_LIST[index] = account;
  }
}
