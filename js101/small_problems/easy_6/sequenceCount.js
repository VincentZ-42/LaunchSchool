/* eslint-disable id-length */
/* eslint-disable max-len */
/* PEDAC
P - Understand the Problem
  Input: Two integers
  Output: Array of Integers

  Rules:
    1st integer = count (always positive and > 0)
    2nd integer = starting num of sequence (any integer)
    Output: Contain elements equal to the count and as mutiples of the starting num

E - Example n test Cases
  sequence(5, 1);          // [1, 2, 3, 4, 5]
  sequence(4, -7);         // [-7, -14, -21, -28]
  sequence(3, 0);          // [0, 0, 0]
  sequence(0, 1000000);    // []

D - Data Structure
A - Algorithim
C - Code
*/
const print = (str) => console.log(str);

function sequence(count, start) {
  let arr = [];
  for (let i = 0; i < count; i++) {
    arr.push(start + (i * start));
  }
  return arr;
}

print(sequence(5, 1));          // [1, 2, 3, 4, 5]
print(sequence(4, -7));         // [-7, -14, -21, -28]
print(sequence(3, 0));          // [0, 0, 0]
print(sequence(0, 1000000));    // []