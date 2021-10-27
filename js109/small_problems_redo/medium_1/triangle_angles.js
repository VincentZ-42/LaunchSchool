/* PEDAC
Problem:
  - Create triangle function that accepts three angles of triangle and spits out type of triangle
  Input: 3 integer angles in degress
  Output: string (type of triangle)
  Rules:
  - Valid Triangle has:
  -- all angles add to 180
  -- all angles > 0
  - Right triangle
  -- One angle is exactly 90
  - Acute
  -- All angles are less than 90
  - Obtuse
  -- One angle is greater than 90
  
Algorithm
  1. Check if triangle is valid by passing into helper function
  2. Check if triangle is obtuse by comparing each angle
  3. Check if triangle is right by comparing each angle
  4. If none of above, must be acute
*/


function isValid(a, b, c) {
  if ((a + b + c) !== 180) return false;
  if (a <= 0 || b <= 0 || c <= 0) return false
  return true;
};

function triangle(a, b, c) {
  if (!isValid(a, b, c)) return 'invalid';
  if (a > 90 || b > 90 || c > 90) {
    return 'obtuse';
  } else if (a === 90 || b === 90 || c === 90) {
    return 'right';
  }
  return 'acute';
};


console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"
