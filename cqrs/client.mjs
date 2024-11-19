import { accountCommand } from "./accountCommand.mjs";
import { accountQuery } from "./accountQuery.mjs";

accountCommand.addAccount("DENIS", "lhdenis");

let accounts = accountQuery.getAccountList();
console.log("Initial List of Accounts:", accounts);

const accountId = accounts[0].id; 
accountCommand.saveAccount(accountId, "denis", "lh");

accounts = accountQuery.getAccountList();
console.log("List of Accounts after update:", accounts);

const account = accountQuery.getAccount(accountId);
console.log("Retrieved Account with name property:", account);
