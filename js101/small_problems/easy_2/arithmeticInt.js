/* PEDAC
Problem = get two integers from user and outputs all operations
Examples = N/A
Data Structure = const variables
Algorithim = N/A
Code
1. ASK for 1st number
2. Ask for 2nd number
3. Print all operations
*/

function prompt(msg) {
  console.log(`==> ${msg}`);
}

function displayAllOp(first, second) {
  prompt(`${first} + ${second} = ${first + second}`);
  prompt(`${first} - ${second} = ${first - second}`);
  prompt(`${first} * ${second} = ${first * second}`);
  prompt(`${first} / ${second} = ${Math.floor(first / second)}`);
  prompt(`${first} % ${second} = ${first % second}`);
  prompt(`${first} ** ${second} = ${first ** second}`);
}

const readline = require('readline-sync');

prompt('Enter the first number:');
const num1 = Number(readline.question());

prompt('Enter the second number:');
const num2 = Number(readline.question());

displayAllOp(num1, num2);