/* PEDAC
P - Understand the Problem
  Input: positive integer
  Output: Right Triangle (diagonal lower left start to upper right end)
  Use stars as as length

E - Examples n Test Cases
  triangle(3) =>
    *
   **
  ***

D - Data Structures
  Loop that outputs correct length and height of triangle

A - Algorithim
  1. Set variables
    - height = 0
    - width = input
  2. while height != maxHeight
    - string of empty spaces + stars
    - decrement spaces, increase stars


C - Code
  Below
*/

function triangle(sideLength) {
  let height = 0;
  let width = 1;
  let spaces = sideLength - 1;
  const spaceChar = " ";
  while (height < sideLength) {
    console.log(`${spaceChar.repeat(spaces)}${'*'.repeat(width)}`);
    width += 1;
    spaces -= 1;
    height += 1;
  }
}

triangle(5);
triangle(9);