const input = require('readline-sync');

const firstName = input.question("What's your first name? ");
const lastName = input.question("What's your last name? ");
console.log(`Hello, ${firstName} ${lastName}.`);