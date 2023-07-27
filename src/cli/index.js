#!/usr/bin/env node
import inquirer from "inquirer";

import { getAccessToken } from "../api/oauth.js";

import { getAccounts } from "../controllers/accounts.js";
import { createTransaction } from "../controllers/transactions.js";

import { formatAccountString } from "./formatAccount.js";

import { amountQuestion, dateQuestions, initQuestion } from "./questions.js";

let accounts;

const prompt = inquirer.createPromptModule();

async function promptAccount() {
  const { account } = await inquirer.prompt([
    {
      type: "list",
      name: "account",
      message: "Select an account:",
      choices: accounts.map((acc) => ({
        name: acc.name,
        value: acc,
      })),
    },
  ]);
  console.log(formatAccountString(account));
  return account;
}

async function main(code) {
  const oauthRes = await getAccessToken(code);
  const tokens = oauthRes.data;

  while (true) {
    const { option } = await prompt(initQuestion);

    if (option === "Exit") {
      break;
    }
    if (option === "Get accounts") {
      if (!accounts) {
        accounts = await getAccounts(tokens);
      }
      await promptAccount();
    }
    if (option === "Transfer") {
      if (!accounts) {
        accounts = await getAccounts(tokens);
      }

      const fromAccount = await promptAccount();

      const toAccount = await promptAccount();

      const amount = await inquirer.prompt(amountQuestion); // is string

      const date = await inquirer.prompt(dateQuestions);

      try {
        await createTransaction(tokens, {
          toAccount: toAccount.accountNumber,
          fromAccount: fromAccount.accountNumber,
          amount: amount.amount,
          dueDate: date.date,
          message: "Transfer with nerdbank.",
        }).then(() => {
          console.log("Transaction complete!");
        });
      } catch (e) {
        console.log(
          `something went wrong with the transaction.\n\ncode: ${e.code}\nmsg: ${e.message}\n\n`
        );
      }
    }
    if (option === "Update Accounts") {
      accounts = await getAccounts(tokens);
    }
    if (option === "Update tokens") {
      console.log("Not implemented");
    }
  }
}

export default main;
