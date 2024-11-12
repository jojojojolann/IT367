import { ACCOUNT_LIST } from "./database.mjs";

export const accountDAO = {
  insertAccount(account) {
    ACCOUNT_LIST.accounts.push(account);
  },
  retrieveAccountList() {
    return ACCOUNT_LIST.accounts.map(({ id, lastName, firstName }) => ({
      id,
      lastName,
      firstName
    }));
  },
  updateAccount(account) {},
  retrieveAccount(id) {},
};
