#!/usr/bin/env node
import http from "http";
import open from "open";
import main from "./cli/index.js";

// The URL of the web page where the user will enter their credentials
const loginUrl = "https://api-auth.sparebank1.no/oauth/authorize";

// Create an HTTP server that listens on a random free port
const server = http.createServer((req, res) => {
  if (!req.url) return server.close();
  const url = new URL(req.url, `http://${req.headers.host}`);
  const code = url.searchParams.get("code");
  if (code) {
    main(code);
    res.end("Success! You can now close this page. 🚀");
  } else {
    res.end("No code found in the URL.");
  }
  console.log("closing server...");
  server.close();
});

const hostname = process.env.HOST_NAME;
const port = process.env.PORT;
const hostURL = `http://${process.env.HOST_NAME}:${process.env.PORT}`;
const finInst = process.env.FINANCIAL_INSTITUTION;
const state = process.env.AUTHENTICATE_STATE;

server.listen(port, hostname, async () => {
  console.log("Server listening on port", port);

  const url = `${loginUrl}?client_id=${process.env.CLIENT_ID}&state=${state}&redirect_uri=${hostURL}&finInst=${finInst}&response_type=code`;

  // Modify the login URL to include our server as the redirect URL
  const loginUrlWithRedirect = url;

  open(loginUrlWithRedirect).catch((error) => {
    console.error("Failed to open the web page:", error);
  });
});
