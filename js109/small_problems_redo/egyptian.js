/* eslint-disable max-len */
/* Egyptian Fractions
Problems:
  1. Create egyptian function that takes a rational number as argument and returns an array of demoninators that can be used as an egyptian fraction represtationat
    Input: Rational Number
    Output: Array of Integers (demoninators)

  2. Create unegyptian function that takes an array of demoninators and calculates the resulting rational number
    Input: Array of integers (demoninators)
    Output: Rational Number

  Rules:
    - Rational Number is any number that can be represented by division between two integers
    - Unit fraction is a rational number where the numerator is 1
    - egyptian fraction is the sum of a series of distinct unit fractions

Examples:

console.log(egyptian(new Fraction(2, 1))); // -> [1, 2, 3, 6]
console.log(egyptian(new Fraction(137, 60))); // -> [1, 2, 3, 4, 5]
console.log(egyptian(new Fraction(3, 1))); // -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 230, 57960]

console.log(unegyptian(egyptian(new Fraction(1, 2)))); // logs 0.5

Data Structure
- Use of Fraction module
- For loop
- Array methods (forEach, push, maybe reduce)

Algorithim:
  Logic:
  1. egyptian function
    a. Create empty array, answer, to hold egyptian fractions
    b. Create demoninator variable that will be used to find unit fractions
      - Set deominator to 1 as starting denominator
    c. Use a while loop to find demoninators to add into above array
      - Condition of while loop is as long as input num is greater than zero
      - if (input num >= 1 / denominator ) // changed after testing, was (num - 1 / denominator > 0)
        - Push denominator value to answer array
      - SET num -= 1 / denominator
    d. return array

  2. unegyptian function
    a. Create variable sum to hold the sum of the egyptian fractions arr
    b. Iterate through each element of input arr to calculate sum
      - before adding to sum, convert element into fraction // added this after testing

  PseudoCode:
  1. egyptian function
    Input = num
    a. SET answer = []
    b. SET denominator = 1
    c. WHILE num > 0.0 (comparing floating numbers)
      SET unit = 1 / denominator (fraction)
      if (num - unit > 0) || Changed to num >= unit after testing (same conditional)
        ADD unit to answer
        SET num -= unit || Changed to num = num.sub(unit) after testing
    d. return answer

  2. unegyptian function
    Input = arr
    a. Set sum = 0
    b. arr.forEach(ele => sum += 1 / ele)
    c. return sum;
*/

// Need this in order to use Fraction module
let Fraction = require("fraction.js");

function egyptian(num) {
  num = Fraction(num);        // This is to account for any rational number that does not use Fraction module
  let answer = [];
  let denominator = 1;
  while (num > 0.0) {
    const unit = new Fraction(1, denominator);
    if (num - unit > 0) {
      answer.push(denominator);
      num = num.sub(unit);
    }
    denominator += 1;
  }
  return answer;
}

function unegyptian(arr) {
  if (arr.length < 1) return 0;    // This is to account for an empty array, produced from egyptian(0)
  let sum = new Fraction(0);
  arr.forEach(denominator => {
    sum += Fraction(1, denominator);
  });
  return sum;
}

console.log(egyptian(new Fraction(2, 1))); // -> [1, 2, 3, 6]
console.log(egyptian(new Fraction(137, 60))); // -> [1, 2, 3, 4, 5]
console.log(egyptian(new Fraction(3, 1))); // -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 230, 57960]

console.log(unegyptian(egyptian(new Fraction(1, 2)))); // logs 0.5
console.log(unegyptian(egyptian(new Fraction(3, 4)))); // logs 0.75
console.log(unegyptian(egyptian(new Fraction(39, 20)))); // logs 1.95
console.log(unegyptian(egyptian(new Fraction(127, 130)))); // logs 0.9769230769230768
console.log(unegyptian(egyptian(new Fraction(5, 7)))); // logs 0.7142857142857142
console.log(unegyptian(egyptian(new Fraction(1, 1)))); // logs 1
console.log(unegyptian(egyptian(new Fraction(2, 1)))); // logs 2
console.log(unegyptian(egyptian(new Fraction(3, 1)))); // logs 3


// edge cases to consider
console.log(unegyptian(egyptian(5 / 3)));
console.log(unegyptian(egyptian(0)));
console.log(unegyptian(egyptian(0 / 3)));

// Safe guards were added after testing the functions
// - Line 70 to account for inputs that does not use Fraction
// - Line 85 to account for inputs of 0
// Conditional on line 75 was changed after testing due to infinite looping
// subtraction syntax was also changed on line 77 to refect accurate calculation of fraction