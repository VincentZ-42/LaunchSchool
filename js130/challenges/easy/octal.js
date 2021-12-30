/* PEDAC
Problem
  - Implement octal to decimal conversion
  Input = octal input String
  Output = Decimal Integer
  Rules:
  - Octal # is linear sum of base 8
  - Decimal is linear sum of base 10
  - valid inputs are chars 0-7 (any letter or 8 or above are invalid)
  - invalid inputs return 0

Examples n Test Cases
  233 # decimal
= 2*10^2 + 3*10^1 + 3*10^0
= 2*100  + 3*10   + 3*1

  233 # octal
= 2*8^2 + 3*8^1 + 3*8^0
= 2*64  + 3*8   + 3*1
= 128   + 24    + 3
= 155

Data Structures
  class Octal
    save static property of base = 8

    constructor
      -> save input

    toDecimal method
      -> convert octal to decimal #

    isValid method
      -> checks if input is valid octal number

Algorithm
  constructor
  - save input as num property

  toDeciaml()
  1. Safeguard
    - If input is invalid, return 0
  2. set sum = 0, set power = 0
  3. Create array to hold each digit of num
    - Make sure to convert char to number, use map()
  4. While there are numbers in the array, calculate decimal sum
    - const cofactor = array.pop()
    - sum += cofactor * (base ** power)
    - power += 1
  5. return sum

  isNotValid()
  1. Iterate through the octal string
    - if any char !== [0-7], return true
  2. return false
*/

class Octal {
  static base = 8;

  constructor(num) {
    this.num = num;
  }

  toDecimal() {
    if (this.isNotValid()) return 0;
    let sum = 0;
    let power = 0;
    let digits = this.num.split('').map(digit => Number(digit));
    while (digits.length > 0) {
      const cofactor = digits.pop();
      sum += cofactor * (Octal.base ** power);
      power += 1;
    }
    return sum;
  }

  isNotValid() {
    for (let idx = 0; idx < this.num.length; idx++) {
      const char = this.num[idx];
      if (!'01234567'.includes(char)) return true;
    }
    return false;
  }
}

let input = '20a47';
let octal = new Octal(input);
// console.log(octal.isNotValid());
console.log(octal.toDecimal());
module.exports = Octal;