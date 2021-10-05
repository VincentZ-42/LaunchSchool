/* eslint-disable max-lines-per-function */
/* PEDAC
  Input: two sorted Arrays
  Output: Combined Sorted Array
  Rules:
    Can not use a sort method
    Do not mutate input arrays
    Allow duplications
*/

function merge(arrA, arrB) {

  if (arrA.length === 0) return arrB;
  if (arrB.length === 0) return arrA;

  const finalLength = arrA.length + arrB.length;
  let ret = [];
  let [indexA, indexB] = [0, 0];

  while (ret.length < finalLength) {
    if (arrA[indexA] < arrB[indexB]) {
      ret.push(arrA[indexA]);
      indexA += 1;
    } else if (arrB[indexB] < arrA[indexA]) {
      ret.push(arrB[indexB]);
      indexB += 1;
    } else {
      if (arrA[indexA]) ret.push(arrA[indexA]);
      if (arrB[indexB]) ret.push(arrB[indexB]);
      indexA += 1;
      indexB += 1;
    }
  }
  return ret;
}

console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]

/* More elegant solution

function merge(array1, array2) {
  let copy1 = array1.slice();
  let copy2 = array2.slice();
  let result = [];

  while (copy1.length > 0 && copy2.length > 0) {
    result.push(copy1[0] <= copy2[0] ? copy1.shift() : copy2.shift());
  }

  return result.concat(copy1.length === 0 ? copy2 : copy1);
}

*/