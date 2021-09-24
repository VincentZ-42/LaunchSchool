/* PEDAC
P - Understand the Problem
  Input: array of Strings
  Output: log occurances of all strings

E - Examples n test Cases
  let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                  'motorcycle', 'motorcycle', 'car', 'truck'];

  countOccurrences(vehicles);

  // console output -- your output sequence may be different
  car => 4
  truck => 3
  SUV => 1
motorcycle => 2

D - Data Structures
  Use Object to store element as key and value as count

A - Algorithim
  1. Traverse the array and transform each unique value into key use [...]
  2. Traverse the array and if value matches key
  3. console log object

C - Code
*/

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck', 'motorcycle', 'motorcycle', 'car', 'truck'];

function countOccurrences(arr) {
  const tracker = {};

  for (let index = 0; index < arr.length; index++) {
    if (!tracker.hasOwnProperty(arr[index])) {
      tracker[arr[index]] = 1;
    } else {
      tracker[arr[index]] += 1;
    }
  }

  for ( const key in tracker) {
    console.log(`${key} => ${tracker[key]}`);
  }
}

countOccurrences(vehicles);

/* More elegant solution

function countOccurrences(elements) {
  let occurrences = {};

  for (let idx = 0; idx < elements.length; idx += 1) {
    occurrences[elements[idx]] = occurrences[elements[idx]] || 0;
    occurrences[elements[idx]] += 1;
  }

  logOccurrences(occurrences);
}

function logOccurrences(occurrences) {
  for (let item in occurrences) {
    console.log(item + ' => ' + String(occurrences[item]));
  }
}

*/