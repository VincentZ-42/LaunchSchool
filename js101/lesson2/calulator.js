// Steps
// ask the user for the first number
// Ask the user for the 2nd number
// ask the user for an operation to perform
// Perform the operation on the two numbers
// Print the result to the terminal

// install readline library in cmd with npm install readline-sync --save
const readline = require('readline-sync'); //this line returns the library as object so we can use it
const message = require('./calculator_messages.json');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt(message.welcome);

let cycle = true;

while (cycle) {
  prompt(message.askFor1);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(message.invalidNum);
    number1 = readline.question();
  }

  prompt(message.askFor2);
  let number2 = readline.question();

  while (invalidNumber(number1)) {
    prompt(message.invalidNum);
    number1 = readline.question();
  }

  prompt(message.askForOp);
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(message.invalidOp);
    operation = readline.question();
  }

  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  prompt(`The result is ${output}`);

  prompt(message.askForRe);
  let answer = readline.question();

  while (!['y', 'Y', 'N', 'n'].includes(answer)) {
    prompt(message.askForRe);
    answer = readline.question();
  }
  if (answer.toLowerCase() === 'n') {
    cycle = false;
  }
}
