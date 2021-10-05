/* eslint-disable id-length */
/* PEDAC
Input: 3 Integers (Degrees)
  Output: String (type of angle: acute, right, obtuse, invalid)
  Rules:
    Each degree > 0
    All angles sum to 180

  Conditions:
    Right = 1 angle is 90
    Acute = all angles are < 90
    Obtuse = one angle > 90

  Algorithim:
    1. Check if valid triangle
    - Add all angles === 180
    - All angles > 0
    2. Find max value
    - If max value > 90, Obtuse
    - If max value = 90, Right
    - If max value < 90, Acute
*/

function checkValid(a, b, c) {
  if (a + b + c !== 180) return false;
  if (a <= 0 || b <= 0 || c <= 0) return false;
  return true;
}

function triangle(a, b, c) {
  if (!checkValid(a, b, c)) return 'invalid';
  const largestAngle = Math.max(a, b, c);
  if (largestAngle > 90) {
    return 'obtuse';
  } else if (largestAngle === 90) {
    return 'right';
  } else {
    return 'acute';
  }
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"