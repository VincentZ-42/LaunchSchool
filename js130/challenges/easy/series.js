/* PEDAC
Problem
- Write a program that takes a string of digits and return all...
...possible consectutive number series of specified length
  Rules:
  - Will throw error if requested length is greater than input string
  Note: Input is string, but output is nested array of numbers

Examples n Test Cases
- See series.test.js

Data Structures
- Working with Strings, numbers, and Arrays
  class Series
    instance method slices

Algorithm
  constructor
    - Save input as property

  slices(length)
    - Safeguard, throw error if length is longer than input
    - Create answer array to hold all series
    - As you iterate through the string, add digits to an array to store series
      - Save each substring of number using slice length
        - Convert to array
      - Make sure to convert string to number
      - Use two pointers for moving window algorithm
    - return answer array

*/

class Series {
  constructor(input) {
    this.num = input;
  }

  slices(size) {
    let num = this.num;
    if (size > num.length) throw new Error('length too long');
    let answer = [];
    for (let idx = 0; idx < num.length; idx++) {
      if (num[idx + size - 1]) {
        const series = num.substring(idx, idx + size).split('').map(char => Number(char));
        answer.push(series);
      }
    }
    return answer;
  }
}

let series = new Series('01234');
console.log(series.slices(2));
module.exports = Series;