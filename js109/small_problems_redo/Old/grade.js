/* PEDAC
  Input: 3 Integers
  Output: String (Letter Grade)
  Rules:
  - Input always between 0 and 100

DA
1. Compute average
2. Use if else statements to return letter grade
*/

function getGrade(test1, test2, test3) {
  const average = (test1 + test2 + test3) / 3;
  if (average >= 90) {
    return 'A';
  } else if (average >= 80) {
    return 'B';
  } else if (average >= 70) {
    return 'C';
  } else if (average >= 60) {
    return 'D';
  }
  return 'F';
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"