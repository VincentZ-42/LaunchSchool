/* PEDAC
Problem
- Write a function that contains every other element of array passed as arg
Examples
- [1, 2, 3, 4, 5, 6] ==> [1, 3, 5]
- [2, 3, 4, 5, 6] ==> [2, 4, 6]
- [123] => [123]
- [] => []
Data Structure
- Function & array
Algorithim
- For loop iteration n push onto new array
Code
1. Create empty array
2. iterate through array argument
-- Save every other element into new array
3. Return new array
*/

function oddites(list) {
  let oddList = [];
  for (let idx = 0; idx < list.length; idx += 2) {
    oddList.push(list[idx]);
  }
  return oddList;
}

console.log(oddites([2, 3, 4, 5, 6]));
console.log(oddites([1, 2, 3, 4, 5, 6]));
console.log(oddites(["abc", "def"]));
console.log(oddites([123]));
console.log(oddites([]));