function evenOrOdd(n) {
  if (!Number.isInteger(n))
    return "Not an Integer.";
  if (n % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

const input = require('readline-sync');
const num = Number(input.question('Number to check: '));
console.log(evenOrOdd(num));