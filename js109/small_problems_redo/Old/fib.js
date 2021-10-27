/* eslint-disable max-len */
/* PEDAC
  Input: BigInt
  Output: BigInt
  Rules:
  - Input Integer is the number of digits of interest
  - Output is first term in Fibonacci sequence with input digits
  - Input argument is always >= 2

DA
1. Create fibonacci object to save values
2. Look for number in object
  - If doesn't exist, calculate term until we get desired value
  - Save to object as we calculate
3. return term
*/

function findFibonacciIndexByLength(length) {
  let first = 1n;
  let second = 1n;
  let index = 3;
  while (true) {
    if (index % 2 === 1) first += second;
    if (index % 2 === 0) second += first;
    if (String(first).length === parseInt(length, 10) || String(second).length === parseInt(length, 10)) {
      return BigInt(index);
    }
    index++;
  }
}

console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);

// The last example may take a minute or so to run.