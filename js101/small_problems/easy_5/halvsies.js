/* eslint-disable id-length */
/* PEDAC
P - Understand the Problem
  Input: Array
  Output: Nested Array of two elements
  Rules:
    First half of input array as first element
    2nd half of input array as 2nd element
    If odd number input array, middle element is in first element

E - Examples n Test Cases
  halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
  halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
  halvsies([5]);                // [[5], []]
  halvsies([]);                 // [[], []]

D - Data Structure
  1. Get length of first half by dividing input array by 2 (ceiling)
  2. Iterate through input array up to length from 1.
    - shift element off input array
    - push element onto output array (1st half)
  3. Iterate through remaining input array
    - Shift element off input array
    - Push element onto output array (2nd half)
  4. Return output array

A - Algorithims


C - Code
*/

function halvsies(inputArray) {
  const halfAndHalf = [[], []];
  const firstHalfLength = Math.ceil(inputArray.length / 2);

  // first half
  for (let i = 0; i < firstHalfLength; i++) {
    halfAndHalf[0].push(inputArray.shift());
  }

  // 2nd Half
  inputArray.forEach(element => {
    halfAndHalf[1].push(element);
  });

  return halfAndHalf;
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]

/* Elegant Solution

function halvsies(array) {
  let half = Math.ceil(array.length / 2);
  let firstHalf = array.slice(0, half);
  let secondHalf = array.slice(half);
  return [firstHalf, secondHalf];
}

*/