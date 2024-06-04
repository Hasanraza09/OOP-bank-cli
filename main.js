#! /usr/bin/env node
import inquirer from "inquirer";
import { Bank } from "./bank.js";
import chalk from 'chalk';
import figlet from 'figlet';
let bank = new Bank();
(function displayBanner() {
    console.clear();
    console.log(chalk.bold.blueBright(figlet.textSync('My OOP Bank')));
})();
async function mainMenu() {
    const answers = await inquirer.prompt([
        {
            type: "list",
            name: "action",
            message: chalk.yellow.bold("What would you like to do?"),
            choices: [
                {
                    name: chalk.green("Create an account"),
                    value: "createAccount",
                },
                {
                    name: chalk.green("Find an account"),
                    value: "findAccount",
                },
                {
                    name: chalk.green("Delete an account"),
                    value: "deleteAccount",
                },
                {
                    name: chalk.green("Deposit"),
                    value: "deposit",
                },
                {
                    name: chalk.green("Withdraw"),
                    value: "withdraw",
                },
                {
                    name: chalk.green("Check balance"),
                    value: "checkBalance",
                },
                {
                    name: chalk.red.bold("Exit"),
                    value: "exit",
                },
            ],
        },
    ]);
    switch (answers.action) {
        case "createAccount":
            await createAccount();
            break;
        case "findAccount":
            await findAccount();
            break;
        case "deleteAccount":
            await deleteAccount();
            break;
        case "deposit":
            await deposit();
            break;
        case "withdraw":
            await withdraw();
            break;
        case "checkBalance":
            await checkBalance();
            break;
        case "exit":
            console.log(chalk.green.bold("Bank is closing. See you tomorrow!!!"));
            process.exit();
    }
    await mainMenu();
}
async function createAccount() {
    const answers = await inquirer.prompt([
        { type: "input", name: "ownerName", message: chalk.blue("Enter owner name:") },
    ]);
    const account = bank.createAccount(answers.ownerName);
    console.log(chalk.green.bold("Account created successfully!"), chalk.yellow(`\nYour Account Number is: ${chalk.blue(account.getAccountInfo().split(', ')[0].split(': ')[1])}`));
}
async function findAccount() {
    const answers = await inquirer.prompt([
        { type: "input", name: "accountNumber", message: chalk.green("Enter account number:") },
    ]);
    const account = bank.findAccount(answers.accountNumber);
    if (account) {
        console.log(chalk.green.bold("Account found:"), chalk.yellow(account.getAccountInfo()));
    }
    else {
        console.log(chalk.red.bold("Account not found!"));
    }
}
async function deleteAccount() {
    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "accountNumber",
            message: chalk.red("Enter account number to delete:"),
        },
    ]);
    bank.deleteAccount(answers.accountNumber);
    console.log(chalk.red.bold("Account deleted successfully."));
}
async function deposit() {
    const answers = await inquirer.prompt([
        { type: "input", name: "accountNumber", message: chalk.magenta("Enter account number:") },
        { type: "input", name: "amount", message: chalk.magenta("Enter amount to deposit:") },
    ]);
    bank.deposit(answers.accountNumber, parseFloat(answers.amount));
    console.log(chalk.green.bold("Deposit successful."));
}
async function withdraw() {
    const answers = await inquirer.prompt([
        { type: "input", name: "accountNumber", message: chalk.cyan("Enter account number:") },
        { type: "input", name: "amount", message: chalk.cyan("Enter amount to withdraw:") },
    ]);
    bank.withdraw(answers.accountNumber, parseFloat(answers.amount));
    console.log(chalk.green.bold("Withdrawal successful."));
}
async function checkBalance() {
    const answers = await inquirer.prompt([
        { type: "input", name: "accountNumber", message: chalk.gray("Enter account number:") },
    ]);
    bank.getBalance(answers.accountNumber);
}
mainMenu();
