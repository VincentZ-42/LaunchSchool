/* PEDAC
  Input: Array
  Output: Array
  Rules:
  - Each element is the sum of itself and all previous elements in return array
*/

function runningTotal(array) {
  let newArray = array.slice();
  for (let index = 1; index < array.length; index++) {
    newArray[index] += newArray[index - 1];
  }
  return newArray;
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []