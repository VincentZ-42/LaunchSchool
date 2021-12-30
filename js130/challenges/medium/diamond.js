/* PEDAC
Problem
  - Write a program that creates a diamond shape with letters
  - Diamond shape and letters are based on input letter
  - See All conditions on exercise page

Examples n Test Cases
  - see diamond.test.js
  - we will have a class Diamond and a static method of makeDiamond
  - Each line has newline

Data Strcutures
  - String Manipulation
  class Diamond
    static makeDiamond(char)

Algorithm
  makeDiamond(char)
  1. input helps us determine the height of diamond
    - If char is A, just return A\n
  2. Create an array that holds half of the diamond
    - from input, determine the whitespace needed for each row
  3. Join created array with the reverse of the created array
  4. Return the diamond
*/

class Diamond {
  static makeDiamond(letter) {
    if (letter === 'A') return 'A\n';
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const spacing = alphabet.indexOf(letter);
    const width = (spacing * 2) + 1;
    let insideSpace = 1;
    let half = [`${' '.repeat(spacing)}A${' '.repeat(spacing)}\n`];
    for (let idx = 1; alphabet[idx] <= letter; idx++) {
      const char = alphabet[idx];
      const outsideSpace = Math.floor((width - insideSpace - 2) / 2);
      const out = ' '.repeat(outsideSpace);
      const mid = ' '.repeat(insideSpace);
      let line = out + char + mid + char + out + '\n';
      half.push(line);
      insideSpace += 2;
    }
    let bottomHalf = half.slice(0, half.length - 1).reverse();
    return half.concat(bottomHalf).join('');
  }
}

console.log(Diamond.makeDiamond('C'));
module.exports = Diamond;