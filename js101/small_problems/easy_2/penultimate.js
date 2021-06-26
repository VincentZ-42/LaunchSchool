/* PEDAC
Problem
- Write a function that returns the next to last word in string
- words are any sequence of non-blank characters
- assum input string will always contain at least two strings
Example 1
- Input = "last wood"
- Output = "last"
Example 2
- Input = "Launch School is great!"
- Output = "is"
Data Structure
- function
Algorithim
- N/A
Code
1. Split string into array of words
2. return 2nd to last element
*/

function penultimate(sentence) {
  let words = sentence.split(' ');
  // Instead of popping, can ...
  //...return words[words.lenght - 2]
  words.pop();
  return words.pop();
}

console.log(penultimate("last word") === "last");
console.log(penultimate("Launch School is great") === 'is');