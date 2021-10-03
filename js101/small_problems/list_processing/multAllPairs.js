/* eslint-disable id-length */
/* PEDAC
P - Understand the Problem
  Input: 2 Array of Numbers
  Output: Array of all combination of products sorted
  Rules:
    Neither arguemnt will be an empty array
    Duplicates are allowed

E - Examples n Test Cases
  multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]

D - Data Structure
  1. Create empty array
  2. Iterate through first array
    - During iteration
    1. Multiplate each element in 2nd array
    2. Push product to empty array
  3. return sorted array

A - Algorihtim

C - Code
*/

function multiplyAllPairs(arr1, arr2) {
  let products = [];

  arr1.forEach(num => {
    for (let i = 0; i < arr2.length; i++) {
      products.push(num * arr2[i]);
    }
  });

  return products.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]

/* more elegant solution

function multiplyAllPairs(array1, array2) {
  const result = [];

  array1.forEach(number1 => {
    array2.forEach(number2 => {
      result.push(number1 * number2);
    });
  });

  return result.sort((a, b) => a - b);
}

*/