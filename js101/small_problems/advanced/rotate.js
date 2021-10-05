/* eslint-disable id-length */
/* PEDAC
  Write a function that rotates a MxN Matrix 90 degrees
*/

function rotate90(matrix) {
  let newMatrix = [];

  for (let i = 0; i < matrix[0].length; i++) {
    newMatrix.push([]);
  }

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      newMatrix[col][row] = matrix[row][col];
    }
  }

  for (let i = 0; i < newMatrix.length; i++) {
    newMatrix[i].reverse();
  }

  return newMatrix;
}

let matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

let matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

let newMatrix1 = rotate90(matrix1);
let newMatrix2 = rotate90(matrix2);
let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]
