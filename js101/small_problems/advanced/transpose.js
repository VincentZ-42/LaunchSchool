/* PEDAC
  Write a function that transposes a 3x3 Matrix without any libraries
*/

function transpose(matrix) {
  let newMatrix = [[], [], []];
  let col = 0;
  matrix.forEach(row => {
    newMatrix[0][col] = row[0];
    newMatrix[1][col] = row[1];
    newMatrix[2][col] = row[2];
    col += 1;
  });
  return newMatrix;
}

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]