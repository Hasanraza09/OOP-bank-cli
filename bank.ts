import { Account } from './account.js';
import chalk from 'chalk';

export class Bank {
    private accounts: Account[] = [];
    private accountCounter: number = 0;

    private generateAccountNumber(): string {
        this.accountCounter += 1;
        return this.accountCounter.toString().padStart(6, '0'); // e.g., "000001", "000002"
    }

    createAccount(ownerName: string): Account {
        const accountNumber = this.generateAccountNumber();
        const account = new Account(accountNumber, ownerName);
        this.accounts.push(account);
        return account;
    }

    findAccount(accountNumber: string): Account | undefined {
        return this.accounts.find(account => account.getAccountNumber() === accountNumber);
    }

    deleteAccount(accountNumber: string): void {
        this.accounts = this.accounts.filter(account => account.getAccountNumber() !== accountNumber);
        console.log(`Account ${accountNumber} deleted successfully.`);
    }

    deposit(accountNumber: string, amount: number): void {
        const account = this.findAccount(accountNumber);
        if (account) {
            account.deposit(amount);
        } else {
            console.log('Account not found!');
        }
    }

    withdraw(accountNumber: string, amount: number): void {
        const account = this.findAccount(accountNumber);
        if (account) {
            account.withdraw(amount);
        } else {
            console.log('Account not found!');
        }
    }

    getBalance(accountNumber: string): void {
        const account = this.findAccount(accountNumber);
        if (account) {
            console.log(`Balance for account ${accountNumber}: $${chalk.blue.bold(account.getBalance())}`);
        } else {
            console.log('Account not found!');
        }
    }
}
