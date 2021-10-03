/* eslint-disable max-len */
/* PEDAC
P - Understand the Problem
  Input: array of numbers
  Output: Sum of the sums of each elading subsequence

E - Examples
  sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
  sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
  sumOfSums([4]);              // 4
  sumOfSums([1, 2, 3, 4, 5]);  // 35

D - Data Structures
  1. Create empty array
  2. Iterate with For Loop
    - push sum of each slice of array start from 0 to variable end that iterates with loop
  3. Reduce the empty array of sums and return

A - Algorithim
C - Code
*/

function sumOfSums(arr) {
  let ans = [];
  const sum = (a, b) => a + b;
  for (let end = 1; end <= arr.length; end++) {
    ans.push(arr.slice(0, end).reduce(sum));
  }
  return ans.reduce(sum);
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35