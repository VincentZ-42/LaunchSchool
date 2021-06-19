/*
Problem - Write a function that takes one integer argument, which may be positive, negative, or zero. This method returns true if the number's absolute value is odd. You may assume that the argument is a valid integer value.

Solution - better
function isOdd(number) {
  return Math.abs(number) % 2 === 1;
}

*/

function isOdd(number) {
  if (number % 2 === 0) {
    return false;
  } else {
    return false;
  }
}

console.log(isOdd(2));
console.log(isOdd(5));
console.log(isOdd(-17));
console.log(isOdd(-8));
console.log(isOdd(0));
console.log(isOdd(7));
