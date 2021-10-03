/* PEDAC
P - Understand the Problem
  Input: Array of integers [0, 19]
  Output: Sorted array of integers based on word of number

E - Examples n Test Cases
  alphabeticNumberSort(
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
  // [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

D - Data Structure
    Use Object to hold word of each number
    create callback function that accesses the object while comparing

A - Algorithim

C - Code
*/

const print = (string) => console.log(string);

const NUM_WORD = ['zero', 'one', 'two', 'three', 'four', 'five',
  'six', 'seven', 'eight', 'nine', 'ten',
  'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
  'sixteen', 'seventeen', 'eighteen', 'nineteen'];

function wordSort(a, b) {
  if (NUM_WORD[a] > NUM_WORD[b]) {
    return 1;
  } else if (NUM_WORD[a] < NUM_WORD[b]) {
    return -1;
  } else {
    return 0;
  }
}

function alphabeticNumberSort(arr) {
  return [...arr].sort(wordSort);
}

print(alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]