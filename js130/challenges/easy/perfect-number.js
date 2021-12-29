/* PEDAC
Problem:
  - Determine if number is perfect, deficient, or abundant
  Rules:
  - Aliquot sum is the of the positive divisors of the number
  - Perfect number is aliquot sum = num
  - Deficient number is aliquot sum < num
  - Abundant number is aliquot sum > num
  - Prime numbers are always defiicient
  - Throw an exception if negative num input

  Question: What do we do if input is 0?
    - Same as negative, throw an exception

Examples and Test Cases:
- 6 is perfect num, divisors of 1, 2, 3 = 6
- 15 is deficient num, divisors of 1, 3, 5 = 8
- See perfect-number.test.js

Data Structures:
  class PerfectNumber
    static method classify

    helper methods
    - isPrime() method that checks if input is prime num
    - factorsOf() method to return array of all factors of input

ALgorithm:
  static classify(num)
    1. Safeguard
      - If num <= 0, throw an exception
      - if num is prime, return 'deficient'
    2. Calculate Aliquot sum of num
    3. Compare aliquot sum to num
      - If sum > num, return abundant
      - if sum < num, return deficient
    4. return 'perfect'

  isPrime(num)
    - if factorsOf(num) returns an array of 2, return true
    - otherwise, return false

  factorsOf(num)
    - create an empty array to hold factors
    - Iterate from 1 to num to determine factors
      - If num % iterator === 0, push iterator to array
    - Return array of factors
*/

class PerfectNumber {
  static classify(number) {
    if (number <= 0) throw new Error('Input must be Positive');
    let factors = PerfectNumber.factorsOf(number);
    if (factors.length === 1) return 'deficient';
    let aliquotSum = factors.reduce((sum, factor) => sum + factor);
    if (number > aliquotSum) return 'deficient';
    if (number < aliquotSum) return 'abundant';
    return 'perfect';
  }

  static factorsOf(number) {
    let factors = [1];
    for (let factor = 2; factor < number; factor++) {
      if (number % factor === 0) {
        factors.push(factor);
      }
    }
    return factors;
  }
}
// let hi = new PerfectNumber();
// console.log(hi.factorsOf(28));
console.log(PerfectNumber.classify(15));

module.exports = PerfectNumber;