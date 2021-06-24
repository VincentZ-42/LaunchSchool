/* Steps
1. Read input from user
2. Calculate
3. Print calculation
*/

function getSum(endNumber) {
  let total = 0;
  for (let index = 1; index <= endNumber; index++) {
    total += index;
  }
  return total;
}

function getProduct(endNumber) {
  let total = 1;
  for (let index = 1; index <= endNumber; index++) {
    total *= index;
  }
  return total;
}

// Read input
const readline = require('readline-sync');

let num = Number(readline.question('Please enter an integer greater than 0: '));
while (num <= 0) {
  num = Number(readline.question('Please enter an integer greater than 0: '));
}

let operation = readline.question('Enter "s" to compute the sum, or "p" to compute the product: ');
while (!['s', 'p'].includes(operation.toLowerCase())) {
  operation = readline.question('Enter "s" to compute the sum, or "p" to compute the product: ');
}

// Calculate operation
let sum = 0;
let product = 0;
if (operation === 's') {
  sum = getSum(num);
} else if (operation === 'p') {
  product = getProduct(num);
}

// Print Calculation
if (operation === 's') {
  console.log(`The sum of the integers between 1 and ${num} is ${sum}.`);
} else if (operation === 'p') {
  console.log(`The product of the integers between 1 and ${num} is ${product}.`);
}