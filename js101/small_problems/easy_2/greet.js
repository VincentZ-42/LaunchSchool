/* PEDAC
Problem
- Ask for user's name
- greet the user, special greeting for !
Example
- Input = Bob
- Output = Hello Bob.
- Input = Bob!
- Output = HELLO BOB. WHY ARE WE SCREAMING?
Data Structure
- will use readline library
- const variables
Algorithim
- None
Code
- READ input
- PRINT message
*/

const readline = require('readline-sync');
let name = readline.question('What is your name? ');

if (name[name.length - 1] === '!') {
  name = name.slice(0, -1);
  console.log(`HELLO ${name.toUpperCase()}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}.`);
}