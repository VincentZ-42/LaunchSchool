/* eslint-disable max-len */
/* PEDAC
  Input: Array and searchItem
  Output: index of searchItem in array or -1 otherwise
  Rules:
    Array will always be sorted
    Create a binary search function: cuts data in half while it searches

  Algorithm:
  1. see if middle element matches searchItem
      If searchItem >
      - Perform binary search on lower half
      If searchItem <
      - perform binary search on upper half
      If ===
      - Return index
  2.
*/

function binarySearch(array, searchItem) {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    const mid = Math.floor((high + low) / 2);
    if (array[mid] === searchItem) {
      return mid;
    } else if (array[mid] < searchItem) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

let yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
console.log(binarySearch(yellowPages, 'Apple Store'));                // 0

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1

console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6