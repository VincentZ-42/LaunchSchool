/* eslint-disable id-length */
/* PEDAC
P = Create program that determines sum or product of all numbers...
...between 1 and input integer, inclusively
  Input: integer
  Output: INteger
  Rules:
  - assume valid input?
*/

const read = require('readline-sync');
const num = read.question('Please enter an integer greater than 0: ');
const choice = read.question("Enter 's' to compute the sum, or 'p' to compute the product. ");
let answer = 1;
for (let i = 2; i <= num; i++) {
  if (choice === 'p') {
    answer *= i;
  } else if (choice === 's') {
    answer += i;
  }
}
console.log(`The ${choice === 'p' ? "product" : "sum"} of the integers between 1 and ${num} is ${answer}.`);