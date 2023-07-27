#!/usr/bin/env node
import axios from "axios";

const transactionBaseURL =
  "https://api.sparebank1.no/personal/banking/transfer";

async function createDebitTransaction(access_token, data) {
  return axios.post(`${transactionBaseURL}/debit`, data, {
    headers: {
      Authorization: `Bearer ${access_token}`,
      Accept: "application/vnd.sparebank1.v1+json",
    },
  });
}

export { createDebitTransaction };
