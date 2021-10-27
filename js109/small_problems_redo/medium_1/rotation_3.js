/* PEDAC
Input:
- Number
Output:
- The maximum rotation of that integer (number)

Rules:
- Implicit: maximum rotation is 1 less than length of number
- Implicit: leading zeros in maximum rotation number gets dropped

Assumptions:
- Assume no negative integer inputs

Algorithm
- Convert number into string, then into array, so we can manipulate digits
- Shift digits until we get maximum rotation
-- This is a loop that will run length - 1 times:
-- Starting the left most digit, shift this digit to the right most position
-- Each iteration keeps the left side of the number unchanged
- convery array back into string
- Return as a number

*/

function rotateRightmostDigits(number, count) {
  if (count === 1) return number;
  
  let newNum = String(number).split('');
  newNum.push(newNum.splice(newNum.length - count, 1));
  return Number(newNum.join(''));
}

function maxRotation(number) {
  let numberLength = String(number).length;
  let maxRotNum = number;
  for (let count = numberLength; count > 0; count--) {
    maxRotNum = rotateRightmostDigits(maxRotNum, count);
  }
  return maxRotNum;
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845
