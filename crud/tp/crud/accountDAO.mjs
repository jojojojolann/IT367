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
  updateAccount(updatedAccount) {
    const index = ACCOUNT_LIST.accounts.findIndex(account => account.id === updatedAccount.id);
    if (index !== -1) {
      ACCOUNT_LIST.accounts[index] = updatedAccount;
      console.log('Compte mis à jour :', updatedAccount);
    } else {
      console.log(`Compte avec l'id ${updatedAccount.id} non trouvé.`);
    }
  },
  retrieveAccount(id) {
    return ACCOUNT_LIST.accounts.find((a) => a.id === id);
  },
};
