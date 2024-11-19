import { json } from "stream/consumers";
import { ACCOUNT_LIST } from "./database.mjs";
import { Account } from "./account.mjs";

export const accountCommandDAO = {
  insertAccount,
  updateAccount,
  getAccount,
};

function convert(account) {
  return JSON.parse(JSON.stringify(account));
}

function getAccount(id) {
  const result = ACCOUNT_LIST.find((a) => a.id === id);
  const account = new Account(result);
  return account;
}

function insertAccount(account) {
  ACCOUNT_LIST.push(convert(account));
}

function updateAccount(account) {
  const index = ACCOUNT_LIST.findIndex((a) => a.id === account.id);
  if (index !== -1) {
    ACCOUNT_LIST[index] = account;
  }
}
