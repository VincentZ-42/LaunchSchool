/* PEDAC
Problem
- write a funct that takes a string of digits and returns number as integer
- Do not worry about + or - or invalid characters
- Can not use String(), Number(), or parseInt()
Examples
- "4321" => 4321
Data Structure
- Function
Algorithim
- Return string multiplied by 1
Code
1. return string * 1;
*/

function stringToIntger(stringNumber) {
  return stringNumber * 1;
}

console.log(stringToIntger("4321") === 4321);
console.log(stringToIntger("570") === 570);

/* Solution
function stringToInteger(string) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  };
  let arrayOfDigits = string.split("").map(char => DIGITS[char]);
  let value = 0;
  arrayOfDigits.forEach(digit => (value = (10 * value) + digit));
  return value;
}
*/