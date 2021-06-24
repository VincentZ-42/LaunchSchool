/*
1. Read input from user
2. Calculation tip n Total
3. PRINT tip and Total
*/

const readline = require('readline-sync');

// read input
const bill = Number(readline.question('What is the bill? '));
const tipPercent = Number(readline.question('What is the tip percentage? '));

// Calculation
const tipAmmount = bill * (tipPercent / 100);
const total = bill + tipAmmount;

// Print tip and total
console.log(`The tip is $${tipAmmount.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);