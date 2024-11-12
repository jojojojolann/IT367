import { accountService } from "./accountService.mjs";

const newAccount = accountService.addAccount('Doe', 'John');
console.log('Nouveau compte ajouté :', newAccount);
let id = newAccount.id;
console.log('ID du nouveau compte :', id);

const accounts = accountService.getAccountList();
console.log('Liste des comptes :', accounts);

accountService.saveAccount(id, 'Doe', 'Jane');
accountService.getAccount(id);
console.log('Compte mis à jour :', accountService.getAccount(id));