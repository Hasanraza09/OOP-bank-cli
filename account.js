export class Account {
    accountNum;
    ownerName;
    balance;
    constructor(accountNum, ownerName) {
        this.accountNum = accountNum;
        this.ownerName = ownerName;
        this.balance = 0;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient Balance!");
            return;
        }
        this.balance -= amount;
    }
    getBalance() {
        return this.balance;
    }
    getAccountInfo() {
        return `
    Account Number: ${this.accountNum}, 
    Owner: ${this.ownerName}, 
    Balance: $${this.balance}`;
    }
    getAccountNumber() {
        return this.accountNum;
    }
}
