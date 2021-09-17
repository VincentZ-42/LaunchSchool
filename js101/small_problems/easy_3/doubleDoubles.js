/* PEDAC
P - Understand the Problem
  Input: Integer
  Output: Integer (If double number, do nothing. Else x2)
  Rules:
    - Double number is an even-length number whose left-sides are
    exactly the same as its right side digits Ex. 44, 3333, 103103, 7676
  Questions:
    - How are negative numbers handled? Assume only positive integers

E - Examples n Test Cases
  twice(37) => 74
  twice(44) => 44

D - Data Structures
  1. Check if double number
    - even-length number so length % 2 = 0
    - left side = right side
  2. If-else statement

A - Algorithims

C - Code
  Below
*/

function isDoubleNum(num, numLength) {
  let left = num.toString().slice(0, numLength / 2);
  let right = num.toString().slice(numLength / 2, numLength);
  return left === right;
}

function twice(num) {
  const numLength = num.toString().length;

  if (numLength % 2 === 0) {
    if (isDoubleNum(num, numLength)) return num;
  }

  return num * 2;
}

console.log(twice(0));
console.log(twice(37));
console.log(twice(44));
console.log(twice(334433));
console.log(twice(444));
console.log(twice(107));
console.log(twice(103103));
console.log(twice(3333));
console.log(twice(7676));