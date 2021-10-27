const read = require('readline-sync');

// Assume all inputs are valid

let array = [];
let num = read.question('Enter the 1st number: ');
array.push(num);
num = read.question('Enter the 2nd number: ');
array.push(num);
array.push(num);
num = read.question('Enter the 3rd number: ');
array.push(num);
num = read.question('Enter the 4th number: ');
array.push(num);
num = read.question('Enter the 5th number: ');
array.push(num);
num = read.question('Enter the 6th number: ');

const toBe = (array.includes(num) ? 'appears' : 'does not appears');
console.log(`The number ${num} ${toBe} in ${array.join(',')}.`);