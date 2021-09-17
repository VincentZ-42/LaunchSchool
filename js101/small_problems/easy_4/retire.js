/* PEDAC
P - Understand the Problem
  Input: 2 Integers, age and retire age
  Output: Message of current year and year to retire and how many more years

E - Examples and Test Cases
  What is your age? 30
  At what age would you like to retire? 70

  It's 2017. You will retire in 2057.
  You have only 40 years of work to go!

D - Date Structures
  Function that takes in 2 integers and then outputs message

A - Algorithims
  1. Ask for age store as variable
  2. Ask for retire age, store as variable
  3. console log message with calculations

C - Code
  Below
*/

const today = new Date();
const currYear = today.getFullYear();
const readline = require('readline-sync');

const age = Number(readline.question('What is your age? '));
const retireAge = Number(readline.question('At what age would you like to retire? '));

console.log(`It's ${currYear}. You will retire in ${retireAge - age + currYear}`);
console.log(`You have only ${retireAge - age} years of work to go!`);