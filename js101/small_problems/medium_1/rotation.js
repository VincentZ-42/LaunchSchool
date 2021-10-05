/* eslint-disable id-length */
const print = (string) => console.log(string);

print('\n --- Part 1 --- \n');
/* PEDAC
  Input: Array
  Output: Array with first element as last
  Rules:
    If input is not array, return undefined
    if array is empty, return []
    Do not modify the oringinal array
*/

function rotateArray(arr) {
  if (typeof arr !== 'object') return undefined;
  if (arr.length < 1) return [];
  let newArray = arr.slice();
  newArray.push(newArray.shift());
  return newArray;
}

print(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
print(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
print(rotateArray(['a']));                    // ["a"]
print(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
print(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
print(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
print(rotateArray());                         // undefined
print(rotateArray(1));                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
print(rotateArray(array));                    // [2, 3, 4, 1]
print(array);                                 // [1, 2, 3, 4]

/* Elegant Solution

function rotateArray(array) {
  if (!Array.isArray(array)) {
    return undefined;
  }

  if (array.length === 0) {
    return [];
  }

  return array.slice(1).concat(array[0]);
}

*/

print('\n --- Part 2 --- \n');

function rotateRightmostDigits(number, count) {
  let num = String(number).split('');
  const temp = num[num.length - count];
  num[num.length - count] = '';
  num.push(temp);
  return Number(num.join(''));
}

print(rotateRightmostDigits(735291, 1));      // 735291
print(rotateRightmostDigits(735291, 2));      // 735219
print(rotateRightmostDigits(735291, 3));      // 735912
print(rotateRightmostDigits(735291, 4));      // 732915
print(rotateRightmostDigits(735291, 5));      // 752913
print(rotateRightmostDigits(735291, 6));      // 352917

print('\n --- Part 3 --- \n');

function maxRotation(number) {
  let length = String(number).length;
  for (let i = 0; i < length; i++) {
    number = rotateRightmostDigits(number, length - i);
  }
  return number;
}

print(maxRotation(735291));          // 321579
print(maxRotation(3));               // 3
print(maxRotation(35));              // 53
print(maxRotation(105));             // 15 -- the leading zero gets dropped
print(maxRotation(8703529146));      // 7321609845