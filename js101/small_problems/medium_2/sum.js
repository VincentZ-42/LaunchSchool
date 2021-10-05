/* eslint-disable id-length */
/* eslint-disable max-len */
/* PEDAC
  Input: Integer
  Output: Integer
  Rules:
    Output is:
    Square of sum of integers up to input - Sum of squares of integers up to input

  Algorihtim
  1. Function - Calculate square of sum
  2. Function - Calculate sum of Squares
  3. Return 1 - 2
*/

const print = (string) => console.log(string);

function squareSum(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum ** 2;
}

function sumSquare(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i ** 2;
  }
  return sum;
}

function sumSquareDifference(num) {
  return squareSum(num) - sumSquare(num);
}

print(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
print(sumSquareDifference(10));     // 2640
print(sumSquareDifference(1));      // 0
print(sumSquareDifference(100));    // 25164150