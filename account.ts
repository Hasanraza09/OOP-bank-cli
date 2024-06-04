export class Account {
  private balance: number;

  constructor(private accountNum: string, private ownerName: string) {
    this.balance = 0;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }

  withdraw(amount: number): void {
    if (amount > this.balance) {
      console.log("Insufficient Balance!");
      return;
    }
    this.balance -= amount;
  }

  getBalance(): number {
    return this.balance;
  }

  getAccountInfo(): string {
    return `
    Account Number: ${this.accountNum}, 
    Owner: ${this.ownerName}, 
    Balance: $${this.balance}`;
  }

  getAccountNumber(): string {
    return this.accountNum;
}
  
}
