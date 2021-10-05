/* eslint-disable id-length */
/* PEDAC
  Input: 3 Numbers
  Output: String (equilateral, isosceles, scalene, or invalid)
  Rules:
    Input Numbers must be > 0
    Any two sides must be greater than the 3rd
    Must take 3 arguments
    Must be Number inputs
*/

function checkValid(a, b, c) {
  if (a + b <= c) return false;
  if (a + c <= b) return false;
  if (b + c <= a) return false;
  return true;
}

function checkIso(a, b, c) {
  if (a === b) return true;
  if (b === c) return true;
  if (a === c) return true;
  return false;
}

function checkEqu(a, b, c) {
  if (a === b && b === c) return true;
  return false;
}

function triangle(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) return 'invalid';
  if (!checkValid(a, b, c)) return 'invalid';

  if (checkEqu(a, b, c)) {
    return 'equilateral';
  } else if (checkIso(a, b, c)) {
    return 'isosceles';
  } else {
    return 'scalene';
  }
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"