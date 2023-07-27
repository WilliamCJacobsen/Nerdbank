#!/usr/bin/env node
import { fetchAccounts } from "../api/accounts.js";

function checkForErrors(response) {
  if (response.data.errors[0] !== undefined) {
    throw new Error(response.data.errors[0]);
  }
}

async function getAccounts(tokens) {
  try {
    let response = await fetchAccounts(tokens.access_token);
    checkForErrors(response);
    const accounts = response.data.accounts;
    return accounts;
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

async function getAccount() {}

export { getAccounts, getAccount };
