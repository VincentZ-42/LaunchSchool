const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function getLoan() {
  prompt("Please enter loan amount (Ex, 5214.23):");
  let input = parseFloat(readline.question());
  while (isNaN(input) || input === 0) {
    prompt("Please enter a valid amount");
    input = parseFloat(readline.question());
  }
  return input;
}

function getMonthly() {
  prompt("Please enter APR as decimal (Ex. 25% = 0.25):");
  let input = parseFloat(readline.question()) / 12;
  while (isNaN(input) || input === 0 || input > 1 || input < 0) {
    prompt("Please enter a valid amount");
    input = parseFloat(readline.question());
  }
  return input;
}

function getDuration() {
  prompt("Please enter loan duration in months:");
  let input = parseInt(readline.question(), 10);
  while (isNaN(input) || input === 0 || input < 0) {
    prompt("Please enter a valid amount");
    input = parseInt(readline.question(), 10);
  }
  return input;
}

let loanAmount = getLoan();
let monthyInterest = getMonthly();
let loanDuration = getDuration();
let monthlyPayments = loanAmount * (monthyInterest /
                      (1 - Math.pow((1 + monthyInterest), (-loanDuration))));
console.log(`You're monthly payments will be $${monthlyPayments.toFixed(2)}.`);
