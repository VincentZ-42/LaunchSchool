/* PEDAC
Problem
- Write function that converts non-negative integer value to string
- No conversion functions allowed
Example
- 4321 =? "4321"
Data Structure
- Array of digits
Algorithim
- iterative loop
Code
1. Divide number by 10
2. Use remainder as index of digit array
3. add the result and continue loop until number = 0
*/

function integerToString(number) {
  const DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  let result = '';
  let sign = '';

  if (number < 0) {
    sign = '-';
    number *= -1;
  } else if (number > 0) {
    sign = '+';
  }

  do {
    let remainder = number % 10;
    number = Math.floor(number / 10);

    result = DIGITS[remainder] + result;
  } while (number > 0);

  return sign + result;
}

console.log(integerToString(4321));
console.log(integerToString(0));
console.log(integerToString(5000));
console.log(integerToString(1234567890));
console.log(integerToString(+4321));
console.log(integerToString(-123));