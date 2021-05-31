
function multiply() {
  const input = require('readline-sync');
  const a = input.question('Enter the first number: ');
  const b = input.question('Enter the second number: ');
  console.log(`${a} * ${b} = ${a * b}`);
  return (a * b);
}

multiply();