# Nerdbank

Powered by the Sparebank1 API

## Terms of Service and Disclaimer

This open source software ("Software") is created and made available by me, the individual developer. The software is in no way associated or affiliated with Sparebank1 or their alliance. The software is developed independently and utilizes Sparebank1's public API to function but is not officially endorsed, supported, or otherwise recognized by Sparebank1 or any of its affiliates.

1. **Acknowledgement of Risks**: You understand that the use of this Software may result in unforeseen consequences, which could include but are not limited to financial loss or exposure to malicious cyber activity.
2. **Assumption of Responsibility**: By using this Software, you accept all responsibility and risk associated with these potential outcomes. You agree that you are using the Software at your own risk and discretion, and that you are informed about the potential risks involved.
3. **Limitation of Liability**: The developer, as well as any contributors to this Software, will not be held responsible for any direct, indirect, incidental, special, consequential or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data or other intangible losses resulting from the use of this Software.
4. **No Guarantee of Service**: While the developer will attempt to ensure the Software functions as intended, there is no guarantee of uninterrupted or error-free service, and the developer is not liable for any issues or interruptions that may arise during the use of the Software.

This Software is provided on an "as is" basis, and no warranties, express or implied, are made with respect to the Software, including without limitation, any implied warranties of merchantability, fitness for a particular purpose, title, and non-infringement.

By using this Software, you acknowledge that you have read and understand these terms of service and disclaimer, and you agree to be bound by all its terms.

## Prerequisites

- Node.js
- npm
- Bank account at Sparebank1
- Some money in said bank

## Access to the API

1. Follow the Gettings started guide at https://developer.sparebank1.no/#/documentation/gettingstarted
2. Set the redirect url to http://localhost:3000.

## Installation

1. run `cp .template.env .env` in the terminal at the root dir.
2. Add _CLIENT_SECRET_, and _CLIENT_ID_ to the .env file from https://developer.sparebank1.no/#/.
3. Add which finInst you are using to the .env file _FINANCIAL_INSTITUTION_. The institution is found on the getting started page visited in Step: Access to the API.
4. There are also two States that needs to be added to the .env. _AUTHENTICATE_STATE_ and _TOKEN_STATE_. _AUTHENTICATE_STATE_ can be found on step 2 of getting started. _TOKEN_STATE_ is on step 3.

```
https://api-auth.sparebank1.no/oauth/authorize
    ?client_id=CLIENT_ID
    &state=STATE
    &redirect_uri=REDIRECT_URI
    &finInst=FINANCIAL_INSTITUTION
    &response_type=code
```

5. Run `npm install -g .` at the rootdir of the project. This saves the application globally as `nerdbank`.

## Run

1. Type `nerdbank` in your terminal.
2. This opens up your browser in order to authenticate with Bank ID.
3. After autheticating check out the terminal and you can select different actions with your arrow keys and enter.

## Further work

1. **Caching**: I want to be able to not log in with bank ID each time, and utilize the refresh_token for what it is worth.
2. **Actions**: I want to add more actions. The endgame is to do most of my bank activites in the terminal.
3. **Readability**: Im not a fan of untyped languages. So converting the .js into .ts would be amazing. However, I had some difficulites running the app when the transpiler did its thing.
4. **Bells and whistles**: It would be nice to add some charm to the terminal application. Maybe the sparebank1 logo in ascii art. Also, some cool features which makes the UX better.
