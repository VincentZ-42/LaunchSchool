/* PEDAC
Problem
  - Write a program that finds the sum of all multiples of given num
  Rules:
  - Default multiples are 3 and 5
  - Assume always valid input (natural numbers)

Examples n Test Cases
 - see sumOfMutiples.test.js

Data Structures
  class SumOfMultiples
    constructor(...args)
      multiples default = [3, 5]

    static method to(num)
    - same as below

    instance method to(num)
    - calculates sum of mutiples of input num

    helper function
    - Determines if input num is a multiple to add

Algorithm
  static property muliples = [3,5]

  Constructor
  - sets multiples = [3, 5] if no input

  static to(num)
  - Instantiate new object
  - Return the method call of object.to

  to(num)
  - Set variable sum = 0
  - Iterate from 1 to the input number, adding any num that...
  ...meets the condition of helper function

  isMultiple(num)
  - Checks if num has any multiples of input
  - use return of foreach and customize return
*/

class SumOfMultiples {
  constructor(...args) {
    this.multiples = args.length > 0 ? args : [3, 5];
  }

  static to(num) {
    return new SumOfMultiples().to(num);
  }

  to(num) {
    let sum = 0;
    for (let idx = 1; idx < num; idx++) {
      if (this.isMultiple(idx)) {
        sum += idx;
      }
    }
    return sum;
  }

  isMultiple(num) {
    let mults = this.multiples;
    for (let idx = 0; idx < mults.length; idx++) {
      const mult = mults[idx];
      if (num % mult === 0) return true;
    }
    return false;
  }

  // Better helper function
  // anyMultiple(num) {
  //   return this.multiples.some(multiple => {
  //     return num % multiple === 0;
  //   });
  // }
}

let hi = new SumOfMultiples(4, 6);
console.log(hi.to(15));
module.exports = SumOfMultiples;