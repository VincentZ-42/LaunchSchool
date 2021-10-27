/* PEDAC
  Problem: Write a function take takes 3 integers representing the length of sides of a triangle and returns the type of triangle back (invalid, equilateral, isossceles, or scalene).
  Input: 3 Numbers
  Output: string (type of triangle)
  Rules:
  - Implicit: lengths must be greater than 0
  - Assume always 3 inputs that are Numbers
  
Algorithm
  1. Create an array holding all three triangle lengths for ease of passing data around
  2. Pass lengths of triangle into function that checks validity of triangle
  - All lengths are > 0
  - Sum of 2 shortest sides always > longest side
  3. Checks if equilateral triangle
  - All lengths are the same
  4. Checks if Isosceles triangle
  - 2 lengths are equal
  5. If not any of the above, must be scalene
*/

const isValid = (lengths) => {
  for (let i = 0; i < lengths.length; i++) {
    if (lengths[i] <= 0) return false;
  }
  const max = Math.max(lengths[0], lengths[1], lengths[2]);
  let temp = lengths.slice();
  temp.splice(temp.indexOf(max), 1);
  if (max > temp.reduce((sum, next) => sum + next)) return false;
  return true;
};

const isEqual = (lengths) => {
  const perimeter = lengths[0] * 3;
  if (perimeter === lengths.reduce((sum, next) => sum + next)) return true;
  return false;
};

const isIso = (lengths) => {
  if (lengths[0] === lengths[1]) return true;
  if (lengths[0] === lengths[2]) return true;
  if (lengths[1] === lengths[2]) return true;
  return false;
};

function triangle(a, b, c) {
  let lengths = [a, b, c];
  if (!isValid(lengths)) {
    return 'invalid'
  } else if (isEqual(lengths)) {
    return 'equilateral';
  } else if (isIso(lengths)) {
    return 'isosceles';
  }
  return 'scalene';
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"
