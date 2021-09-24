/* eslint-disable max-len */
/* PEDAC
P - Understand the Problem
  Input: Array of Ints
  Output: String (Average of Integers)
  Rules:
    Compute Average of array of Ints
    Output is rounded to three decimal places

  Questions:
    Will there every be an empty array?

E - Examples n Test cases
  multiplicativeAverage([3, 5]);                   // "7.500"
  multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"

D - Data Structure
  1. Use reduce method for array
  2. Round to 3 decimals and turn into String

A - Algorithim

C - Code
*/

function multiplicativeAverage(numList) {
  const average = numList.reduce((sum, number) => sum * number) / numList.length;

  return average.toFixed(3).toString();
}

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"