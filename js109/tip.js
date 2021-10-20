/* PEDAC
P = Build Program that prompts bill amount and tip rate, compute tip, and ...
...logs tip and total mount of bill to console
  Input: 2 String Numbers from user
  Output: 2 Strings of tip and total bill
  Rules:
  - Ignore input validation
*/

const readline = require('readline-sync');

function add(a, b) {
  return a + b;
}
const bill = Number(readline.question('What is the bill? '));
const tipPercentage = Number(readline.question('What is the tip percentage? ')) / 100;
const tip = Number((bill * tipPercentage).toFixed(2));
const total = add(bill, tip).toFixed(2);

console.log(`The tip is ${tip}\nThe total is ${total}`);