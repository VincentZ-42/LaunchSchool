/* PEDAC
P - Understand the Problem
  Input: 3 positive integers between 0 and 100
  Output: Letter grade from calculated average (A, B, C, D, E, F)
  Rules:
    90 <= score <= 100: 'A'
    80 <= score < 90: 'B'
    70 <= score < 80: 'C'
    60 <= score < 70: 'D'
    0 <= score < 60: 'F'

E - Examples n Test Cases
  getGrade(95, 90, 93); => "A"

D - Data Structure
  1. Calculate Average based on 3 inputs
  2. Use if-else statements to determine grade
  3. return Grade

A - Algorithim
  Same as above

C - Code
  Below
*/


// Note that I don't have secondary conditions for grades
// This is because if it passes if statement before it's condition, then...
// ...it is given to be lower than the previous statement
function getGrade(score1, score2, score3) {
  const average = Math.round((score1 + score2 + score3) / 3);
  if (average >= 90) {
    return 'A';
  } else if (average >= 80) {
    return 'B';
  } else if (average >= 70) {
    return 'C';
  } else if (average >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}

console.log(getGrade(95, 90, 93));
console.log(getGrade(50, 50, 95));