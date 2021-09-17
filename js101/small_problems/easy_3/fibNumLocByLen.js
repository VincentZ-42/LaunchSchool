/* eslint-disable eqeqeq */
/* PEDAC
P - Understand the Problem
  Input: Integer (length of digits of fibonacci #)
  Output: Integer (first index of fibonacci number that matches digit length)
  Explicit Req: Input will always be >= 2
  Implicit: add "n" after number to use javascript's BigInt Data type

E - Examples n Test Cases
  2n => 7n (1, 1, 2, 3, 5, 8, 13)
  3n => 12n (1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144)

D = Data Structures
  1. function that calculates fibonancci sequence
  2. Loop that searchs the fibonacci sequeence

A = Algorithims
  1. Set variables
    - Index = 2
    - 1st number = 1
    - 2nd number = 1
  2. Start loop to find number
    - 1st num => 3rd num (this variable will be the odd index number)
    - 2nd num => 4th num (this variable will be the even index number)
    - check length of both 1st and 2nd num
      If match, break out of loop
    - increment index

C = Code
  Below
*/

// Things to Note....
// BigInt and Numbers can only be loosely compared, thus ==
// 2n === 2 => false
function findFibonacciIndexBylength(length) {
  let index = 3n;
  let first = 1n;
  let second = 1n;

  // Starts infinite loop until we find the match
  while (true) {
    if (index % 2n == 0) {
      // Index is even
      // adds both variables and stores it in second variable
      second += first;
    } else {
      // Index is odd
      // adds both variables and stores it in first variable
      first += second;
    }
    if (first.toString().length == length ||
    second.toString().length == length) {
      break;
    }
    index++;
    // By doing it this way, we only store 2 numbers as we do our search
  }
  return index;
}

console.log(findFibonacciIndexBylength(2n));
console.log(findFibonacciIndexBylength(3n));
console.log(findFibonacciIndexBylength(10));
console.log(findFibonacciIndexBylength(16n));
console.log(findFibonacciIndexBylength(100n));
console.log(findFibonacciIndexBylength(1000n));
console.log(findFibonacciIndexBylength(10000n));

// Launch School Solution.....more concise
/*
function findFibonacciIndexByLength(length) {
  let first = 1n;
  let second = 1n;
  let count = 2n;
  let fibonacci;

  do {
    fibonacci = first + second;
    count += 1n;
    first = second;
    second = fibonacci;
  } while (String(fibonacci).length < length);

  return count;
}
*/