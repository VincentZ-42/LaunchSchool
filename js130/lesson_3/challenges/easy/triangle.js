/* PEDAC
Problem: Write a program to determine whether a triagnel is equilaterial, isosceles, or scalene
  Input: 3 Numbers
  Output: Type of Triangle (Equ, Isos, Sca)
  Rules:
    - all side lengths must > 0
    - sum of lengths of any two sides > 3rd
    - Equ = 3 sides are equal
    - Iso = exactly 2 sides are equal
    - Sca = all sides are unequal

Examples n Test Cases
  - See triangles.test.js

Data Structures
  - We need Triangle Class with constructor and kind method
  - Check for valid inputs during constructor

Algorithms
  Constructor
    1. property length: Save all values into array
    2. Use _valid function to test if triangle is valid
        - Throw error if false outputed

  kind()
    1. if all sides =, equilateral
    2. if 2 sides =, isosceles
    3. Else scalene

  _valid()
    - all 3 sides > 0, else return false
    - Any 2 sides > 3rd side, else return false
    - Return true
*/

class Triangle {
  constructor(a, b, c) {
    if (!this._valid(a, b, c)) throw new Error('Not a valid triangle');
    this.lengths = [a, b, c];
  }

  kind() {
    let [a, b, c] = this.lengths;
    if (a === b && a === c) return "equilateral";
    else if (a === b || b === c || a === c) return "isosceles";
    else return "scalene";
  }

  _valid(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0) return false;
    if ((a + b <= c) || (a + c <= b) || (b + c <= a)) return false;
    return true;
  }
}

module.exports = Triangle;