import { Account } from './account.js';
import chalk from 'chalk';
export class Bank {
    accounts = [];
    accountCounter = 0;
    generateAccountNumber() {
        this.accountCounter += 1;
        return this.accountCounter.toString().padStart(6, '0'); // e.g., "000001", "000002"
    }
    createAccount(ownerName) {
        const accountNumber = this.generateAccountNumber();
        const account = new Account(accountNumber, ownerName);
        this.accounts.push(account);
        return account;
    }
    findAccount(accountNumber) {
        return this.accounts.find(account => account.getAccountNumber() === accountNumber);
    }
    deleteAccount(accountNumber) {
        this.accounts = this.accounts.filter(account => account.getAccountNumber() !== accountNumber);
        console.log(`Account ${accountNumber} deleted successfully.`);
    }
    deposit(accountNumber, amount) {
        const account = this.findAccount(accountNumber);
        if (account) {
            account.deposit(amount);
        }
        else {
            console.log('Account not found!');
        }
    }
    withdraw(accountNumber, amount) {
        const account = this.findAccount(accountNumber);
        if (account) {
            account.withdraw(amount);
        }
        else {
            console.log('Account not found!');
        }
    }
    getBalance(accountNumber) {
        const account = this.findAccount(accountNumber);
        if (account) {
            console.log(`Balance for account ${accountNumber}: $${chalk.blue.bold(account.getBalance())}`);
        }
        else {
            console.log('Account not found!');
        }
    }
}
