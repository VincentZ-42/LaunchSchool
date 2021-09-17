/* PEDAC
P - Problem
  Input: 4 strings
    - Noun, Verb, Adverb, n Adj
  Output: a matlib (story with blanks for words for person to fill in)

E - Examples n Test cases
  Enter a noun: dog
  Enter a verb: walk
  Enter an adjective: blue
  Enter an adverb: quickly

  // console output
  Do you walk your blue dog quickly? That's hilarious!
  The blue dog walks quickly over the lazy dog.
  The dog quickly walks up blue Joe's turtle.
D - Data Structure
  Will need to use readline-sync to get input from user

A - Algorithim

C - Code
*/

const readline = require('readline-sync');
const noun = readline.question('Enter a noun: ');
const verb = readline.question('Enter a verb: ');
const adjective = readline.question('Enter a adjective: ');
const adverb = readline.question('Enter a adverb: ');

console.log(`\nWhat is ${noun}?`);
console.log(`Can you ${verb} the ${noun}?`);
console.log(`Is ${verb}ing the ${noun} very ${adjective}?`);
console.log(`What if you start ${adverb} ${verb}ing the ${adjective} ${noun}?`);