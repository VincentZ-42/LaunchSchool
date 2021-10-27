/* PEDAC
P - Program that gets length and width from user and ouputs area of room
  Inputs: 2 Numbers
  Output: Number
  Rules:
  - output has 2 decimal precision
  - 1 sq meter === 10.7639 sq ft
*/

const readline = require('readline-sync');
const length = readline.question('Enter the length of the room in meters:\n');
const width = readline.question('Enter the width of the room in meters:\n');
const areaMeters = (length * width).toFixed(2);
const areaFeet = (areaMeters * 10.7639).toFixed(2);

console.log(`The area of the room is ${areaMeters} square meters (${areaFeet} square feet).`);
