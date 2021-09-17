/* eslint-disable id-length */
/* PEDAC
P - Understand the Problem
  Input: String (words separated by spaces)
  Output: String (swaps first and last letters of  every word)
  Rules:
    Every word contains at least one letter
    String will always contain at least one word
    String contains only words and spaces
    No leading, trailing, or repeated spaces

E - Examples and test Cases
  swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
  swap('Abcde');                          // "ebcdA"
  swap('a');                              // "a"

D - Data Structures
  1. Create word arr from splitting input
  2. iterate through each word
    - Split the word in char array
    - Check if word length = 1, skip next steps
    - shift first element off and save variable
    - pop last element off and save variable
    - push first variable to last
    - unshift last element to first
    - join the word
  3. Join the words into new Sentence
  4. Return Sentence

A - Algorithims

C - Code
  Below
*/

function swap(sentence) {
  const words = sentence.split(' ');
  const swapped = [];

  for (let i = 0; i < words.length; i++) {
    const chars = words[i].split('');
    if (chars.length < 2) {
      swapped[i] = words[i];
    } else {
      const first = chars.shift();
      const last = chars.pop();
      chars.push(first);
      chars.unshift(last);
      swapped[i] = chars.join('');
    }
  }
  return swapped.join(' ');
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"

/* More elegant solution
function swap(words) {
  let wordsArray = words.split(' ');

  for (let idx = 0; idx < wordsArray.length; idx += 1) {
    wordsArray[idx] = swapFirstLastCharacters(wordsArray[idx]);
  }

  return wordsArray.join(' ');
}

function swapFirstLastCharacters(word) {
  if (word.length === 1) {
    return word;
  }

  return word[word.length - 1] + word.slice(1, -1) + word[0];
}
*/