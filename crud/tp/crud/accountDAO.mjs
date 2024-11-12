import { ACCOUNT_LIST } from "./database.mjs";

export const accountDAO = {
  insertAccount(account) {
    ACCOUNT_LIST.push(account);
    console.log("Account added: ", account);
  },
  retrieveAccountList() {},
  updateAccount(account) {},
  retrieveAccount(id) {},
};
