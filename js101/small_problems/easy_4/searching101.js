/* PEDAC
P - understand the problem
  Input: 6 numbers from user
  Output: a message stating if last number is in the first 5 given

  Questions:
    Only allow integer inputs?

E - Examples n Test Cases
  Enter the 1st number: 25
  Enter the 2nd number: 15
  Enter the 3rd number: 20
  Enter the 4th number: 17
  Enter the 5th number: 23
  Enter the last number: 17

  The number 17 appears in 25,15,20,17,23.

D - Data Structure
  Prompt user for info
  Store info into array
  Search array with includes
  Output message

A - Algorithim
  1. Prompt User for number
  2. Store fitst 5 numbers in array
  3. Search last number in array, store "appears" as true
    and "does not appear" as false in variable
  4. Output variable in message

C - Code
  Below
*/

const readline = require('readline-sync');
const numArr = [];

numArr[0] = Number(readline.question('Enter the 1st number: '));
numArr[1] = Number(readline.question('Enter the 2nd number: '));
numArr[2] = Number(readline.question('Enter the 3rd number: '));
numArr[3] = Number(readline.question('Enter the 4th number: '));
numArr[4] = Number(readline.question('Enter the 5th number: '));

const find = Number(readline.question('Enter the last number: '));

const verb = numArr.includes(find) ? 'appears' : 'does not appear';

console.log(`The number ${find} ${verb} in ${numArr.join(',')}.`);