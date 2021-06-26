/* PEDAC
Problem
- Write a func that takes 2 args and returns true if exactly one arg is true
Example
- xor(5, 0) ==> true
- xor(1, 1) ==> false
Data Struction
- Function
Algorithim
- N/A
Code
1. check truthy of 1st arg
-- if true/false go to next if-statment
2. check truthy of 2nd arg
-- if false & 1st arg true, return true
-- if true & 1st arg true, return false
*/

function xor(arg1, arg2) {
  if (arg1) {
    if (arg2) {
      return false;
    } else {
      return true;
    }
  } else {
    if (arg2) return true;
    return false;
  }
}

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);

/* Solution
function xor(value1, value 2) {
  if ((value1 && !value2) || (value2 && !value1)) {
    return true;
  }
  return false;
}
*/