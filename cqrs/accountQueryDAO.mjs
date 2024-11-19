import { ACCOUNT_LIST } from "./database.mjs";

export const accountQueryDAO = {
    retrieveAccountList,
    retrieveAccount,
  };

function retrieveAccountList(id) {
    return ACCOUNT_LIST; 
}

function retrieveAccount(id) {
  const account = ACCOUNT_LIST.find((account) => account.id === id);
  if (account) {
    
    return {
      id: account.id,
      name: `${account.lastName} ${account.firstName}`,
      creationDate: account.creationDate,
    };
  }
  return null; 
}