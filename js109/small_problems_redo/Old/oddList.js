/* PEDAC
Input: array
Output: Array
Rules:
1. Return array is every odd element in input array

DA
1. return filter using the condition index % 2 === 1
*/

function oddities(array) {
  return array.filter((element, index) => index % 2 === 0);
}

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []