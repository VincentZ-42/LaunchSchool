/* PEDAC
Problem: Write side1 program to determine whether type of triagnel
  Input: 3 Numbers
  Output: Type of Triangle (Equ, Isos, Sca)
  Rules:
    - all side lengths must > 0
    - sum of lengths of any two sides > 3rd
    - Types = equilaterial, isosceles, or scalene
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
  constructor(side1, side2, side3) {
    if (!this._valid(side1, side2, side3)) throw new Error('Not a valid triangle');
    this.lengths = [side1, side2, side3];
  }

  kind() {
    let [side1, side2, side3] = this.lengths;
    if (side1 === side2 && side1 === side3) return "equilateral";
    else if (side1 === side2 || side2 === side3 || side1 === side3) return "isosceles";
    else return "scalene";
  }

  _valid(side1, side2, side3) {
    if (side1 <= 0 || side2 <= 0 || side3 <= 0) return false;
    if ((side1 + side2 <= side3) ||
        (side1 + side3 <= side2) ||
        (side2 + side3 <= side1)) {
      return false;
    }
    return true;
  }
}

module.exports = Triangle;