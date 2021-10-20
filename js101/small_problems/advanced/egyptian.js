let Fraction = require('fraction.js');

/* eslint-disable max-len */
/* PEDAC
  Write two functions
  1. egyptian
    Input: Rational number
    Output: array of denominators that are part of an egyptian fraction representation

  2. unegyptian
    Input: Array of numbers (demoninators)
    Output: Rational number

  Data Structure n Algorithm
  egyptian:
  1. initialize empty array
  2. Loop (while num !=== 0)
    - Check if num is > 1 / i
    - If yes
      - then push i to array
      - num -= 1 / i
      - i++
    - If no,
      - Increment i

    unegyptian:
    1. initialize sum
    2. iterate through array (forEach)
      - sum += 1 / element
    3. Return sum;
*/

function egyptian(number) {
  let denominators = [];
  // const [ sign, num, den ] = [fraction.s, fraction.n, fraction.d];
  // let number = num / den;

  let denominatorCount = 1;
  while (number > 0) {
    const unitFraction = new Fraction(1, denominatorCount);
    if (number >= unitFraction) {
      denominators.push(denominatorCount);
      number = number.sub(unitFraction);
    }
    denominatorCount += 1;
    // console.log(number, denominatorCount, unitFraction, denominators);
  }
  return denominators;
}

function unegyptian(arr) {
  let sum = 0;
  arr.forEach(denominator => {
    sum += 1 / denominator;
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