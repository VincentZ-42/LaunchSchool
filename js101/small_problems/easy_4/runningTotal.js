/* PEDAC
P - Understand the Problem
  Input: Array of Ints
  Output: Array of Ints (each index is running total of last)

E - Examples and test cases
  runningTotal([2, 5, 13]);             // [2, 7, 20]
  runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
  runningTotal([3]);                    // [3]
  runningTotal([]);                     // []

D - Data Structure
  Create new Array
  Traverse input array and sum up total as you traverse

A - Algorithim

C - Code
*/

function runningTotal(numbers) {
  const runningTotalNum = [];

  for (let index = 0; index < numbers.length; index++) {
    if (index > 0) {
      runningTotalNum[index] = numbers[index] + runningTotalNum[index - 1];
    } else {
      runningTotalNum[index] = numbers[index];
    }
  }
  return runningTotalNum;
}

console.log(runningTotal([2, 5, 13]));
console.log(runningTotal([14, 11, 7, 15, 20]));
console.log(runningTotal([3]));
console.log(runningTotal([]));