/* PEDAC
  INput: array
  Output: Same Array in reverse order
  Rules:
  - Must mutate in place

DA
  1. Iterate until half of the length of input array
    - For each element, swap current element with last element
    - Each iteration increments I and decrements j
  2. Return oringinal element
*/

function reverse(array) {
  let last = array.length - 1;
  if (array.length > 1) {
    for (let begin = 0; begin < Math.floor(array.length / 2); begin++) {
      const temp = begin;
      array[begin] = array[last];
      array[last] = temp;
      last -= 1
    }
  }
  return array;
}

let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true