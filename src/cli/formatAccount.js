#!/usr/bin/env node
import chalk from "chalk";

const NON_BREAKING_SPACE = String.fromCharCode(160);

export function formatAccountNumber(accountNumber) {
  if (!accountNumber) {
    return accountNumber;
  }
  let formattedAccountNumber = "";

  if (accountNumber.length > 0) {
    formattedAccountNumber += accountNumber.substring(0, 4);
  }

  if (accountNumber.length > 4) {
    formattedAccountNumber +=
      NON_BREAKING_SPACE + accountNumber.substring(4, 6);
  }

  if (accountNumber.length > 6) {
    formattedAccountNumber += NON_BREAKING_SPACE + accountNumber.substring(6);
  }

  return formattedAccountNumber;
}

export function formatAccountString(acc) {
  return `\n\n${chalk.yellow("Name")}: ${acc.name} \n${chalk.yellow(
    "Balance"
  )}: ${acc.balance} NOK\n${chalk.yellow("Available Balance")}: ${
    acc.availableBalance
  } NOK\n${chalk.yellow("Account number")}: ${formatAccountNumber(
    acc.accountNumber
  )}\n${chalk.yellow("Type")}: ${acc.type}\n\n`;
}
