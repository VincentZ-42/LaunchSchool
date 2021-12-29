/* PEDAC
Problem:
  - Write a program that calculates the scrabble score of input
  Input:
    - String
  Output:
    - Integer = score of sum of letters
  Rules:
    - Follow scrabble scoring system
    - whitespaces and empty chars have 0 score
    - null input have 0 score

Examples n Test Cases:
  - Shown in scrabble.test.js

Data Structures:
  class Scrabble
    constructor
      word prop
    score()
      calculates score of letter
    helper function
      holds collection all letter scores
      determines score of letter
    static score method <-- You missed this on first try

ALgorithm:
  constructor
    - Save lowercase word as property

  score()
    1. Check safeguard
      - If word is null or empty, return 0
    2. Create variable sum to hold running sum of entire word
    3. Iterate through the word to calculate total score
      - add value of score of letter to running total
    4. return sum;

  scoreOf(letter)
    1. Create nested array to hold scores for all letters
    2. Iterate through collection to find which letter fits into collection
      - return value associated with letter
    3. return 0 otherwise
*/

class Scrabble {
  constructor(word) {
    if (word === null) {
      this.word = '';
    } else {
      this.word = word.toLowerCase();
    }
  }

  static score(word) {
    let pattern = new Scrabble(word);
    return pattern.score();
  }

  score() {
    let sum = 0;
    for (let idx = 0; idx < this.word.length; idx++) {
      sum += this.scoreOf(this.word[idx].toLowerCase());
    }
    return sum;
  }

  scoreOf(letter) {
    let scores = {
      aeioulnrst: 1,
      dg: 2,
      bcmp: 3,
      fhvwy: 4,
      k: 5,
      jx: 8,
      qz: 10
    };
    let keys = Object.keys(scores);
    for (let index = 0; index < keys.length; index++) {
      if (keys[index].includes(letter)) {
        return scores[keys[index]];
      }
    }
    return 0;
  }
}

let hello = new Scrabble('street');
console.log(hello.score());
module.exports = Scrabble;