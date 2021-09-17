/* eslint-disable max-len */
/* PEDAC
P - Understand the Problem
  Input: String
  Output: Object
  Rules:
    keys are lengths of each word from Input
    values are total number of words with length

E - Examples and test Cases
  wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
  wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
  wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
  wordSizes('');                                            // {}

D - Data Structures
  1. Turn String into array with split
  2. Create empty Object
  3. iterate through words and add keys and values along the way
  4. Return Object

A - Algorithim

C - Code
*/

const wordSizes = (sentence) => {
  if (sentence === '') return {};

  const words = sentence.split(' ');
  const counter = {};

  words.forEach(word => {
    const len = word.length;
    if (counter.hasOwnProperty(len)) {
      counter[len] += 1;
    } else {
      counter[len] = 1;
    }
  });

  return counter;
};

console.log(wordSizes('Four score and seven.'));
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));
console.log(wordSizes("What's up doc?"));
console.log(wordSizes(''));

console.log('------------------ Part 2 ------------------');
// Exclue non-letters when determining word size

function getLetterLength(word) {
  let length = 0;
  word.toLowerCase().split('').forEach(char => {
    if (char >= 'a' && char <= 'z') length += 1;
  });

  return length;
}

const wordSizesV2 = (sentence) => {
  if (sentence === '') return {};

  const words = sentence.split(' ');
  const counter = {};

  words.forEach(word => {
    const len = getLetterLength(word);
    if (counter.hasOwnProperty(len)) {
      counter[len] += 1;
    } else {
      counter[len] = 1;
    }
  });

  return counter;
};

console.log(wordSizesV2('Four score and seven.'));
console.log(wordSizesV2('Hey diddle diddle, the cat and the fiddle!'));
console.log(wordSizesV2("What's up doc?"));
console.log(wordSizesV2(''));