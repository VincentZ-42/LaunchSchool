/* PEDAC
Problem: Write a function that roates the last count digits of a number in a certain pattern: Pattern is the specific digit is shifted all the way to the right and the rest of the digits shifted to the left.
  Input: Two integer numbers
  Output: One integer numbers (rotated)
  Rules:
  - Digit in one's space is 1, ten's space is 2, 100's space is 3, etc
  - If count === 1, return number unchanged
  
  Questions:
  - Assume only Integer numbers input
  - Will ```number``` ever be a negative integer or 0? Do we have to handle this?
  - WIll we have to handle edge case of number being greater than amount of digits? Assume always valid inputs
  
Data Structure:
  1. Function
  
Algorithm:
  1. Check if valid input if not always valid inputs
  2. Rotate the digit in the number by following these steps:
  - turning number into an array and splicing the digit of interest out of array
  - Pushing the spliced digit back into the end of the array
  - Combining the array with join to form new number
*/

function rotateRightmostDigits(number, count) {
  if (count === 1) return number;
  
  let newNum = String(number).split('');
  newNum.push(newNum.splice(newNum.length - count, 1));
  return Number(newNum.join(''));
}

console.log(rotateRightmostDigits(735291, 1));
console.log(rotateRightmostDigits(735291, 2));
console.log(rotateRightmostDigits(735291, 3));
console.log(rotateRightmostDigits(735291, 4));
console.log(rotateRightmostDigits(735291, 5));
console.log(rotateRightmostDigits(735291, 6));

