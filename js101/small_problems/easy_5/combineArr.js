/* PEDAC
P - Understand the Problem
  Input: Two array assignments
  Output: Array of combined array from input
  Rules:
    No Duplicates in the returned array
    Both arguments will always be arrays

  Questions:
    WIll ther be undefined, NaN, or other values in arrays?

E - Examples n Test Cases
  union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]

D - Data structure
  1. Create empty array
  2. Use ForEach Iterate to traverse loop
    Copy element if it does not exist in current array
  3. Return array

A - Algorithim

C - Code
*/

function union(arr1, arr2) {
  const union = [];

  arr1.forEach(element => {
    if (!union.includes(element)) union.push(element);
  });

  arr2.forEach(element => {
    if (!union.includes(element)) union.push(element);
  });

  return union;
}

console.log(union([1, 3, 5], [3, 6, 9]));