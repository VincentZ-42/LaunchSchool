/* PEDAC
  Input: String
  Output: String
  Rules:
  - Return String is 2nd to last word
  - Input always contain at least 2 words
  - Words are sequenced of non-blank characters

Data Structure n Algorithm
1. Create array by splitting input string
2. return array[array.length - 2] to get last element
*/

function penultimate(sentence) {
  let words = sentence.split(' ');
  return words[words.length - 2];
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true