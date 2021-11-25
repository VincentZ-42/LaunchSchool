/* eslint-disable id-length */
/* PEDAC
  Input: Array of Integers
  Output: Integer
  Rules:
    - Find index of sum of left = sum of right
    - If none, return -1
    - sum of either left and right does not include current index
    - Empty array = 0

  Questions:
  - if array of 1 element, is index, will return be 0?

Data Structure n Algorithm
  1. Function that sums up inputted array
  2. Main Function
    - create vairalbes left and right, set to 0;
    - Iterate through array
      - calculate left sum
      - calculate right sum
      - if equal, return index
    - Return -1;
*/

function sumArray(array) {
  if (array.length < 1) return 0;
  return array.reduce((sum, next) => sum + next);
}

function findEvenIndex(array) {
  let left = 0;
  let right = 0;
  for (let i = 0; i < array.length; i++) {
    right = sumArray(array.slice(i + 1, array.length));
    if (i > 0) {
      left += array[i - 1];
    }
    if (left === right) return i;

  }
  return -1;
}

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]) === 3); // true
console.log(findEvenIndex([1, 100, 50, -51, 1, 1]) === 1); // true
console.log(findEvenIndex([1,2,3,4,5,6]) === -1); // true
console.log(findEvenIndex([20,10,30,10,10,15,35]) === 3); // true
console.log(findEvenIndex([20,10,-80,10,10,15,35]) === 0); // true
console.log(findEvenIndex([10,-80,10,10,15,35,20]) === 6); // true
console.log(findEvenIndex([-1,-2,-3,-4,-3,-2,-1]) === 3); // true