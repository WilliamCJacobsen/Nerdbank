#!/usr/bin/env node
import { createDebitTransaction } from "../api/transactions.js";

function isValidDate(dateString) {
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  return dateRegex.test(dateString);
}
//
async function createTransaction(
  tokens,
  { amount, dueDate, message, toAccount, fromAccount }
) {
  if (toAccount === fromAccount) {
    console.log("cannot send to the same account");
    return;
  }

  if (Number.parseFloat(amount) > 10) {
    console.log("amount is larger than 10 NOK");
    return;
  }
  if (!isValidDate(dueDate)) {
    console.log("invalid duedate");
    return;
  }
  if (!message) {
    console.log("need a message");
    return;
  }

  return createDebitTransaction(tokens.access_token, {
    amount,
    dueDate,
    message,
    toAccount,
    fromAccount,
  });
}

export { createTransaction };
