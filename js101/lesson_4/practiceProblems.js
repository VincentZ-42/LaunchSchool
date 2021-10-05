/* eslint-disable */

// Problem 1
console.log([1, 2, 3].filter(num => 'hi'));
// Return empty array - Wrong
// Return of filter is always truthy, so entire array is returned

// Problem 2
console.log([1, 2, 3].map(num => {
  num * num;
}));
// Return [1, 4, 9] - Wrong
// Return is [undefined, undefined, undefined]
// This is because there is no explicit return statement

// Problem 3
const three = [1, 2, 3].map(num => num * num);
console.log(three);
// Return [1, 4, 9] - Right

// Problem 4
const four = ['ant', 'bear', 'caterpillar'].pop().length;
console.log(four);
// Return 11 - Right

// Problem 5
const five = [1, 2, 3].every(num => {
  return num = num * 2;
});
console.log(five);
// Callback return is 2 a truthy statement - Partial Right, forgot about iteration
// Return true, since every callback is true - Right

// Problem 6
let arr = [1, 2, 3, 4, 5];
arr.fill(1, 1, 5);
// Return arr = [1, 1, 1, 1, 1] - Right
// fill mutates the array 

// Problem 7
['ant', 'bear'].map(elem => {
  if (elem.length > 3) {
    return elem;
  }
});
// Return ['bear'] - Wrong
// [undefined, 'bear']

// Problem 8
console.log('--- Problem 8 ---');
let flintstones = ["Fred", 'Barney', 'Wilma', 'Betty', 'Pebbles', 'Babam'];

function turnIntoObj(arr) {
  let names = {};
  for (let i = 0; i < arr.length; i++) {
    names[arr[i]] = i;
  }
  return names;
}
console.log(turnIntoObj(flintstones));
// Right

// Problem 9
console.log('--- Problem 9 ---');
let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
}

console.log(Object.values(ages).reduce((a, b) => a + b)); 
// Right

// Problem 10
console.log('--- Problem 10 ---');
// Pick out minimum age from our ages object
console.log(Object.values(ages).sort()[0]);
// Right
// Cooler Solution
// let agesArr = Object.values(ages);
// Math.min(...agesArr);

// Problem 11
console.log('--- Problem 11 ---');
let statement = "The Flintstones Rock";

function hash(str) {
  const hashTable = {};
  const charArr = str.split('').filter(char => char !== ' ');
  charArr.forEach(letter => {
    if (hashTable[letter]) {
      hashTable[letter] += 1;
    } else {
      hashTable[letter] = 1;
    }
  })
  return hashTable;
}

console.log(hash(statement));
// Partial Right, don't include spaces, can fix with filter