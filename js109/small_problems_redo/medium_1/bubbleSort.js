/* PEDAC
Problem - Create a bubble sort function that sortings the array in place
  Input: array
  Output: sorted array
  Rules:
    - Input array will have at least 2 elements
    
Data Structures
Algorithms
 Logic:
 1. Iterate through the array to swap elements
 
 Implementation:
 1. Loop through arrray
  - Nested loop through array to compare elements
  - swap elements with smaller in front 
*/

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
    if (arr[j] < arr[i]) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    }
  }
};

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
