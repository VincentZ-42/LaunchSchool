/* PEDAC
Problem:
  Write a program that can detect anagrams from an input array
  Rules:
  - anagram is a word that contains same words of another
  - case In-sensitive
  - No matches returns empty array
  - identical word is not anagram
  - Must be same length

Examples and Test Cases
  - See anagram.test.js

Data Structures
  - Need a class Anagram with property of pattern
  - Need a match method to search pattern in list of words

  Algorithm
    constructor
      1. Saves pattern as lowercase as property
      2. saves length as property
    match(input)
      1. Set return equal to empty array
      2. Filter input for same length as pattern and iterate through array
      to determine which are anagrams
        - Pass each word to helper function to determine if anagram
        - If yes, push word to return array
      3. return array
    _isAnagram(word)
      0. if word === pattern, return false
      1. Sort the input word and lowercase all letters
      2. sort the pattern word
      3. If word and pattern match, return true
          - else return false
*/

class Anagram {
  constructor(pattern) {
    this.pattern = pattern.toLowerCase();
    this.length = pattern.length;
  }

  match(words) {
    return words.filter(word => {
      if (word.length === this.length) {
        return this.isAnagram(word.toLowerCase());
      }
      return false;
    });
  }

  isAnagram(word) {
    if (word === this.pattern) return false;
    let sortedPattern = this.pattern.split('').sort().join('');
    word = word.split('').sort().join('');
    if (sortedPattern === word) return true;
    return false;
  }
}

let test = new Anagram('MASTER');
console.log(test.match(['stream', 'pigeon', 'maters']));

module.exports = Anagram;