/* PEDAC
  Input: Integer
  Output: Integer
  Rules:
  - Assume always integer input
  - If double number, return input
  - Anything else, return multiple of 2
  - Double number is an even-length number whose left and right side are equal
*/

function twice(num) {
  let numString = String(num)
  if (numString.length % 2 === 0) {
    let left = '';
    let right = '';
    for (let index = 0; index < numString.length; index++) {
      if (index <= (numString.length / 2) - 1) {
        left += numString[index];
      } else if (index >= (numString.length / 2)) {
        right += numString[index];
      }
    }
    if (left === right) return num;
  }
  return num * 2;
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676