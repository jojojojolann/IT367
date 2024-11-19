import { ACCOUNT_LIST } from "./database.mjs";
import { cache } from "./cache.mjs";

export const accountQueryDAO = {
    retrieveAccountList,
    retrieveAccount,
  };

function retrieveAccountList(id) {
    return ACCOUNT_LIST; 
}

function retrieveAccount(id) {
  // const account = ACCOUNT_LIST.find((account) => account.id === id);
  const accountFromCache = cache.accountCache[id];
  if (accountFromCache) {
    return {
      accountFromCache
    };
  }
  return null; 
}