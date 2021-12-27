/* PEDAC
Problem: Convert decimal numbers into ROman number equivalents
  Rules:
    - No input will be larger than 3000
    - Assume always valid integer input

Examples n test cases
  - See roman-numeral.test.js

Data Structures
  - class RomanNumeral to store decimal
  - class method toRoman() to output roman equivent

Algorithm
  constructor
    - saves decimal value

  toRoman()
    - Input: None
    - Return: String of Roman Numeral of decimal
    1. Set decNum = number stored inside class
    2. Set romanNum = empty string
    3. iterate through collection of roman Letters 
      - while decNum is greater than value asscoated with roman letter
        - add letter to romNum
        - Subtract value from decNum
      - Specific conditions for 900, 400, 90, 40, 9, and 4
*/

class RomanNumeral {
  constructor(num) {
    this.num = num;
  }

  toRoman() {
    let decNum = this.num;
    let romNum = "";
    const romanLetter = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
    const romanValues = [1000, 500, 100, 50, 10, 5, 1];
    romanLetter.forEach((letter, index) => {
      while (decNum >= romanValues[index]) {
        romNum += letter;
        decNum -= romanValues[index];
      }
      if (letter === 'M') {
        if (decNum >= 900) {
          romNum += 'CM';
          decNum -= 900;
        }
      } else if (letter === 'D') {
        if (decNum >= 400) {
          romNum += 'CD';
          decNum -= 400;
        }
      } else if (letter === 'C') {
        if (decNum >= 90) {
          romNum += 'XC';
          decNum -= 90;
        }
      } else if (letter === 'L') {
        if (decNum >= 40) {
          romNum += 'XL';
          decNum -= 40;
        }
      } else if (letter === 'X') {
        if (decNum >= 9) {
          romNum += 'IX';
          decNum -= 9;
        }
      } else if (letter === 'V') {
        if (decNum >= 4) {
          romNum += 'IV';
          decNum -= 4;
        }
      }
    });
    return romNum;
  }
}
let num = new RomanNumeral(9);
console.log(num.toRoman());
module.exports = RomanNumeral;

/* More elegant solution
class RomanNumeral {
  static ROMAN_NUMERALS = {
     M: 1000,
    CM: 900,
     D: 500,
    CD: 400,
     C: 100,
    XC: 90,
     L: 50,
    XL: 40,
     X: 10,
    IX: 9,
     V: 5,
    IV: 4,
     I: 1
  }

  constructor(number) {
    this.number = number;
  }

  toRoman() {
    let romanVersion = '';
    let toConvert = this.number;

    Object.keys(RomanNumeral.ROMAN_NUMERALS).forEach(numeral => {
      let value = RomanNumeral.ROMAN_NUMERALS[numeral];
      let multiplier = Math.floor(toConvert / value);
      let remainder = toConvert % value;

      if (multiplier > 0) {
        romanVersion += (numeral.repeat(multiplier));
      }

      toConvert = remainder;
    });

    return romanVersion;
  }
}

module.exports = RomanNumeral;
*/