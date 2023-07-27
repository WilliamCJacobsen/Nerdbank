#!/usr/bin/env node
import axios from "axios";
import querystring from "querystring";
import "dotenv/config";

const tokenURL = "https://api-auth.sparebank1.no/oauth/token";
const headers = {
  "Content-Type": "application/x-www-form-urlencoded",
};

const client = {
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET,
};
const redirectURL = `http://${process.env.HOST}:${process.env.PORT}`;

function getQueryString(code) {
  return querystring.stringify({
    ...client,
    grant_type: "authorization_code",
    state: process.env.TOKEN_STATE,
    redirect_uri: redirectURL,
    code,
  });
}

export async function getAccessToken(code) {
  return axios({
    method: "post",
    url: tokenURL,
    headers: headers,
    data: getQueryString(code),
  });
}

function getRefreshQueryString(refreshToken) {
  return querystring.stringify({
    ...client,
    grant_type: "refresh_token",
    refresh_token: refreshToken,
  });
}

export async function refreshAccessToken(refreshToken) {
  return axios({
    method: "post",
    url: tokenURL,
    headers: headers,
    data: getRefreshQueryString(refreshToken),
  });
}
