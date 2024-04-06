#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const currency = {
    USD: 1, // Base Currency
    GBP: 0.79,
    EURO: 0.92,
    KWD: 0.31,
    SAR: 3.75,
    QAR: 3.64,
    PKR: 278,
    INR: 83.30
};
let userAnswer = await inquirer.prompt([
    {
        name: "From",
        type: "list",
        message: chalk.red("Enter from currency"),
        choices: ["USD", "GBP", "EURO", "KWD", "SAR", "QAR", "PKR", "INR"]
    },
    {
        name: "TO",
        type: "list",
        message: chalk.green("Enter to currency"),
        choices: ["USD", "GBP", "EURO", "KWD", "SAR", "QAR", "PKR", "INR"]
    },
    {
        name: "Amount",
        type: "number",
        message: chalk.red("Enter the Amount"),
    }
]);
let fromAmount = currency[userAnswer.From];
let toAmount = currency[userAnswer.TO];
let Amount = userAnswer.Amount;
let conertToBase = Amount / fromAmount;
let convertedAmount = conertToBase * toAmount;
let fc = Math.floor(convertedAmount);
console.log(fc);
