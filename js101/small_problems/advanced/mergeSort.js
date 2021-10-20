/* eslint-disable max-len */
function merge(array1, array2) {
  let copy1 = array1.slice();
  let copy2 = array2.slice();
  let result = [];

  while (copy1.length > 0 && copy2.length > 0) {
    result.push(copy1[0] <= copy2[0] ? copy1.shift() : copy2.shift());
  }

  return result.concat(copy1.length === 0 ? copy2 : copy1);
}

const print = (string) => console.log(string);

/* PEDAC
  Create a merge sorting algorithm
  - Breaks array's elements into nested subarrays
  - Combines nested subarays back together into sorted order
*/

function mergeSort(array) {
  if (array.length < 2) return array;
  const mid = Math.floor(array.length / 2);
  const subArray1 = mergeSort(array.slice(0, mid));
  const subArray2 = mergeSort(array.slice(mid));
  return merge(subArray1, subArray2);
}

print(mergeSort([9, 5, 7, 1]));           // [1, 5, 7, 9]
print(mergeSort([5, 3]));                 // [3, 5]
print(mergeSort([6, 2, 7, 1, 4]));        // [1, 2, 4, 6, 7]

print(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

print(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]