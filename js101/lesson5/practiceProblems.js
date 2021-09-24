const printQuesNum = (num) => console.log(`\n${'-'.repeat(6)} Question ${num} ${'-'.repeat(6)}\n`);
const print = (...stuff) => console.log(...stuff);

printQuesNum(1);

// Sort by descending numeric Value (largest to smallest)
let arr = ['10', '11', '9', '7', '8'];

print(arr.map(element => Number(element)).sort((a, b) => b - a));

printQuesNum(2);

// Sort by year of publication of each book, earliest to latest
let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];

print(books.sort((a, b) => a.published - b.published));

printQuesNum(3);
// Access the letter g in each array/object
let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];
let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];
let arr3 = [['abc'], ['def'], { third: ['ghi'] }];
let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };
let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }};

print(
  arr1[2][1][3],
  arr2[1]['third'][0],
  arr3[2].third[0].split('')[0],
  obj1.b[1],
  Object.keys(obj2.third)[0]
);

printQuesNum(4);
// Demonstrate how you would change the value 3 to 4

arr1 = [1, [2, 3], 4];
arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
obj1 = { first: [1, 2, [3]] };
obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };

arr1[1][1] = '4';
arr2[2] = '4';
obj1.first[2][0] = '4';
obj2.a.a[2] = '4';

print(arr1, arr2, obj1, obj2);

printQuesNum(5);
// COmpute and display the total age of the male members of the family
let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let totalAge = 0;
for (const person in munsters) {
  if (munsters[person].gender === 'male') totalAge += munsters[person].age;
}

print(`Total male age = ${totalAge}`);

printQuesNum(6);
// Print name, age, and gender of Munster Family

for (const person in munsters) {
  const name = person;
  const { age, gender } = munsters[person];
  console.log(`${name} is ${age}-year-old ${gender}.`);
}

printQuesNum(7);
print('no coding for this');

printQuesNum(8);
// Use forEach method to output all vowels from strings in the arrays

let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

const keys = Object.keys(obj);
keys.forEach(key => obj[key].forEach(word => word.split('').forEach(char => {
  if (['a', 'e', 'i', 'o', 'u'].includes(char)) console.log(char);
})));

printQuesNum(9);
// eslint-disable-next-line max-len
// Return a new array with same sturcture but with values in each subarray ordered
arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

print(arr);
print(arr.map(subArray => {
  if (typeof subArray[0] === 'number') {
    return subArray.slice().sort((a, b) => a - b);
  } else {
    return subArray.slice().sort();
  }
}));

printQuesNum(10);
// Same as above but in descending order


print(arr.map(subArray => {
  if (typeof subArray[0] === 'number') {
    return subArray.slice().sort((a, b) => b - a);
  } else {
    return subArray.slice().sort().reverse();
  }
}));

printQuesNum(11);
// eslint-disable-next-line max-len
// Use map method to return a new identical array structure but increment all values by 1
// Must do so non-destructively

arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let ans = arr.map(obj => {
  const newObj = {};
  Object.assign(newObj, obj);
  for (const key in newObj) {
    newObj[key] += 1;
  }
  return newObj;
});

print(arr);
print(ans);

printQuesNum(12);
// Use a combination of methods, including filter, to return a new array...
//...identical in strcuture but contain only multiples of 3

arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

ans = arr.map(subArray => subArray.filter(num => num % 3 === 0));
print(arr);
print(ans);

printQuesNum(13);
// Sort the array so that sub-arrays are ordered based on the sum...
//...of the odd numbers they contain

arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

arr.sort((a, b) =>
  a.filter(num => num % 2 === 1).reduce((sum, element) => sum + element) -
  b.filter(num => num % 2 === 1).reduce((sum, element) => sum + element));

print(arr);

printQuesNum(14);

obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

ans = [];

for (const thing in obj) {
  if (obj[thing].type === 'vegetable') {
    ans.push(obj[thing]['size'].slice().toUpperCase());
  } else if (obj[thing].type === 'fruit') {
    // eslint-disable-next-line max-len
    ans.push( obj[thing]['colors'].map(element => element[0].toUpperCase() + element.slice(1)));
  }
}

print(ans);

printQuesNum(15);
// Return an array which contains only objects where all numbers are even

arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

print(arr.filter(obj => {
  for (const key in obj) {
    if (!obj[key].every(element => element % 2 === 0)) return false;
  }
  return true;
}));

/* More elegant solution
arr.filter(obj => {
  return Object.values(obj).every(subArr => {
    return subArr.every(num => num % 2 === 0);
  });
});

// => [ { e: [ 8 ], f: [ 6, 10 ] } ]
*/

printQuesNum(16);
// convery flat array into object with first item as key and value as second

// eslint-disable-next-line quote-props
arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

ans = {};

arr.forEach((subArray) => {
  ans[subArray[0]] = subArray[1];
});

print(ans);

printQuesNum(17);
// Create a function that takes no arguments and returns a string...
//...that contains a UUID
// UUID = 32 hexadecimal characters (0-9 and a-f) as a string
// UUID has 5 sections 8-4-4-4-12 pattern
// Ex. 'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'

const createRandomString = (len) => {
  const choices = 'abcdef0123456789';
  const max = choices.length;
  let pattern = '';
  do {
    pattern += choices[Math.floor(Math.random() * (max - 0))];
    len--;
  }
  while (len > 0);
  return pattern;
};

function uuid() {
  let pattern = '';
  pattern += createRandomString(8) + '-';
  pattern += createRandomString(4) + '-';
  pattern += createRandomString(4) + '-';
  pattern += createRandomString(4) + '-';
  pattern += createRandomString(12);

  return pattern;
}

print(uuid());
print(uuid());
print(uuid());