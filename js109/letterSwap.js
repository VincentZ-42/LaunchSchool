/* PEDAC
  Input: String
  Output: String (Every first n last letter of every word is swapped)
  Rules:
    - Every word contains at least 1 letter
    - String will always contain 1 word
    - Only words and spaces
    - No Leading, trailing, or repeated spaces

DA
  1. Create array from splitting words in sentence
  2. Use map to swap first and last letter
  3. return array by joining elements
*/

function swap(sentence) {
  return sentence.split(' ').map(word => {
    if (word.length === 1) {
      return word;
    } else {
      return word.slice(-1) + word.slice(1, word.length - 1) + word[0];
    }
  }).join(' ');
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"