/* eslint-disable max-len */
/* PEDAC
P - Understand the Problem
  Input: Integer (odd number >= 7)
  Output: Picture of Star
  Rules:
    - Smallest N is 7
    - Display 8 pointed star in NxN grid
    - Input number is diameter of Star on middle line
    - Star expands until outisde padding is 0

Date Structure n Algorithim
  1. Initialize array by Creating middle line of star
  2. Create bottom half of star
    - SET inside_pad = 0;
    - SET outisde_pad = (n - 3) / 2;
    - Loop (while outside pad >= 0)
      - push( outside_pad + star + inside_pad + star + inside_pad + outside_pad)
      - inside_pad += 1
      - outside_pad -= 1;
  3. Create top half of star
    - concat the reverse array of the bottom half
*/

const print = (str) => console.log(str);

function star(diameter) {
  let output = ['*'.repeat(diameter)];
  let insidePadding = 0;
  let outsidePadding = (diameter - 3) / 2;

  while (outsidePadding >= 0) {
    output.push(`${' '.repeat(outsidePadding)}*${' '.repeat(insidePadding)}*${' '.repeat(insidePadding)}*${' '.repeat(outsidePadding)}`);
    insidePadding += 1;
    outsidePadding -= 1;
  }

  // Take note of the order of when you concat, since we are creating the bottom half first
  output = (output.slice(1, output.length).reverse()).concat(output);

  output.forEach(line => print(line));
}

star(7);
print('-'.repeat(10));
star(9);