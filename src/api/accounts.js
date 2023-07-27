#!/usr/bin/env node
import axios from "axios";
const accountBaseURL = "https://api.sparebank1.no/personal/banking";

async function fetchAccounts(access_token) {
  return await axios.get(`${accountBaseURL}/accounts`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
      Accept: "application/vnd.sparebank1.v1+json",
    },
  });
}

export { fetchAccounts };
