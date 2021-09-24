/* PEDAC
Too easy for this
- Input: Array of positive integers
- Output Average whole number round down
*/

const average = (array) => {
  return Math.floor(array.reduce((sum, next) => sum + next) / array.length);
};

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40