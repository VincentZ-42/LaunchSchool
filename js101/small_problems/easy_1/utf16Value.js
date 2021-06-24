/*
Write a function that returns UTF-16 string value passed as argument
- UTF-16 value is sum of the UTF-16 values of every char in string

Steps
1. iterate through the string
-- Add each UTF-16 value of char to sum
2. Return sum
*/

function utf16Value(str) {
  let sum = 0;

  for (let index = 0; index < str.length; index++) {
    sum += str.charCodeAt(index);
  }

  return sum;
}

console.log(utf16Value('Four score'));
console.log(utf16Value('Launch School'));
console.log(utf16Value('a'));
console.log(utf16Value(''));
const OMEGA = "\u03A9";
console.log(utf16Value(OMEGA));
console.log(utf16Value(OMEGA + OMEGA + OMEGA));