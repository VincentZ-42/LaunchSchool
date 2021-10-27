/* PEDAC
  Input: two values
  Output: boolean
  Rules:
  - Returns true if exactly one argument is truthy
  - ALl other cases falsy

DA
  1. If statment Checking...
  - If value1 && !value2 || !value1 && value2, Return true
  2. Return false
*/

function xor(value1, value2) {
  if ((value1 && !value2) || (!value1 && value2)) {
    return true;
  }
  return false;
}

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);