/* eslint-disable id-length */
/* PEDAC
P - Understand the Problem
  Input: Two arrays
  Output: Array (combined both elements in alternation)
  Rules:
    Both input arrays are non-empty
    Both have same # of elements

  Questions:
    Do you want mutatable or unmutable function?

E - Example n test cases
  interleave([1, 2, 3], ['a', 'b', 'c',]);  //[1, a, 2, b, 3, c]

D - Data Structures
  1. Create empty Array
  2. Iterate through a for loop of doulbe the length of one array
    - Even numbers is 1st input array elements
    - Odd numbers are 2nd input array elements

A - Algorithim


C - Code
*/

const interleave = ( ... args ) => {
  const newArray = [];
  const combinedLength = args[0].length * 2;

  for (let i = 0; i < combinedLength; i++) {
    if (i % 2 === 0) {
      newArray.push(args[0].shift());
    } else {
      newArray.push(args[1].shift());
    }
  }

  return newArray;
};

console.log(interleave([1, 2, 3], ['a', 'b', 'c',]));

/* Elegant Solution

function interleave(array1, array2) {
  let newArray = [];

  for (let idx = 0; idx < array1.length; idx += 1) {
    newArray.push(array1[idx], array2[idx]);
  }

  return newArray;
}

*/