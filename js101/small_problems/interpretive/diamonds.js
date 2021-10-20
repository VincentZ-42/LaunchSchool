/* PEDAC
  Input: an odd integer
  Output: Diamond drawing
  Rules:
    - Diameter of middle = input
    - Diamond is printed in n x n grid

Examples:
  diamond(1);
  // logs
  *

  diamond(3);
  // logs
   *
  ***
   *

Data Structure n Algorithim:
  0. If input = 1, return *
  1. Initialize an array of strings (top)
  2. Initialize stars = 1
  3. padding = 0;
  4. Loop to create half diamond
    - padding = (diameter - stars) / 2
    - Push string literal of padding + stars + padding
    - stars increment
    - End Loop if stars == number input (diameter)
  5. add bottom half of diamond
    - top.concat(top.slice(0, top.length).reverse())
  6. Iterate through array
    - Console log each element
*/

const print = (str) => console.log(str);

function diamonds(diameter) {
  if (diameter === 1) return print('*');
  let diamond = [];
  let stars = 1;

  // Create top half of Diamond
  while (stars <= diameter) {
    const padding = Math.floor( (diameter - stars) / 2);
    diamond.push(`${' '.repeat(padding)}${'*'.repeat(stars)}${' '.repeat(padding)}`);
    stars += 2;
  }

  // Create bot half of Diamond
  diamond = diamond.concat(diamond.slice(0, diamond.length - 1).reverse());

  diamond.forEach(line => print(line));

  return diamond;
}

diamonds(1);
print('---');
diamonds(3);
print('---');
diamonds(9);