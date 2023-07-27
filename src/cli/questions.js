#!/usr/bin/env node
const amountQuestion = [
  {
    type: "input",
    name: "amount",
    message: "Enter the amount:",
    validate: (input) => {
      const isValidAmount = /^\d+(\.\d{1,2})?$/.test(input);
      if (isValidAmount) {
        return true;
      }
      return "Please enter a valid amount (e.g., 10 or 10.50)";
    },
  },
];

const dateQuestions = [
  {
    type: "input",
    name: "date",
    message: "Enter the date (YYYY-MM-DD):",
    validate: (input) => {
      const isValidDate = /^\d{4}-\d{2}-\d{2}$/.test(input);
      if (isValidDate) {
        return true;
      }
      return "Please enter a valid date in the format YYYY-MM-DD";
    },
  },
];

function accountsQuestion(accounts) {
  [
    {
      type: "list",
      name: "account",
      message: "Select an account:",
      choices: accounts.map((acc) => ({
        name: acc.name,
        value: acc,
      })),
    },
  ];
}

const initQuestion = [
  {
    type: "list",
    name: "option",
    message: "What do you want to do?",
    choices: [
      "Get accounts",
      "Transfer",
      "Transactions",
      "Update Accounts",
      "Exit",
    ],
  },
];

const YNquestion = [
  {
    type: "confirm",
    name: "confirmation",
    message: "Are you sure?",
    default: false,
  },
];

export {
  amountQuestion,
  dateQuestions,
  accountsQuestion,
  initQuestion,
  YNquestion,
};
