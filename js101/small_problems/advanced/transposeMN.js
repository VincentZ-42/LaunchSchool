/* eslint-disable id-length */
const print = (string) => console.log(string);

function transpose(matrix) {
  let newMatrix = [];

  for (let i = 0; i < matrix[0].length; i++) {
    newMatrix.push([]);
  }

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      newMatrix[col][row] = matrix[row][col];
    }
  }

  return newMatrix;
}

const matrix = [
  [1, 5, 8, 5],
  [4, 7, 2, 0],
  [3, 9, 6, 1]
];

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6], [5, 0, 1]]
console.log(matrix);         // [[1, 5, 8, 5], [4, 7, 2, 0], [3, 9, 6, 1]]

print(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
print(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
print(transpose([[1]]));                     // [[1]]

print(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]