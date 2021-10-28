/* PEDAC
P - Write a function that computes the difference between square of sum of integers and sum of squares
  Input: Integer
  Output: Integer (sum integers - sum of squares)
  Rules:
  - Only positive integers input
  
  Assumptions:
  - Always valid input

Data Struction
Algorithm
  Logic:
  1. calculate square of sum of positive integers up to input integer
  2. calculate sum of squares of positive integers up to input integer
  3. Return difference between two values
  
  Implementation:
*/

function sumSquareDifference(num) {
  let squareOfSums = 0;
  for (let i = 1; i <= num; i++) {
    squareOfSums += i;
  }
  squareOfSums = squareOfSums**2;
  
  let sumOfSquares = 0;
  for (let i = 1; i <= num; i++) {
    sumOfSquares += i**2;
  }
  
  return squareOfSums - sumOfSquares;
};

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150
