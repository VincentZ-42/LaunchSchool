/* eslint-disable max-len */
/* PEDAC
Problem:
  Input: Array
  Output: New Array
  Rules:
  - If Input array is not array, return undefined
  - If no input, return undefined
  - If input is empty array, return empty array
  - Do not modify original array

Examples:

Data Structure and Algorithm
  1. Check input and either return specific cases or continue function
  2. Copy array and perform methods to take off first element and append it to end of array
  3. Return the mutated array

*/

function rotateArray(array) {
  if (!Array.isArray(array)) return undefined;
  if (array.length < 1) return [];

  let returnArr = array.slice();
  returnArr.push(returnArr.shift());
  return returnArr;
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
console.log(array);
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]