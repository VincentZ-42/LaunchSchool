const prompt = (msg) => console.log(`\n--- ${msg} ---`);

prompt('Question 1');
// three different ways to remove all elements from array
let numbers = [1, 2, 3, 4];
console.log(numbers);
while (numbers.length > 0) {
  numbers.pop();
}
console.log(numbers);

numbers = [1, 2, 3, 4];
numbers.splice(0, numbers.length);
console.log(numbers);

numbers = [1, 2, 3, 4];
do {
  numbers.shift();
} while (numbers.length > 0);
console.log(numbers);

prompt('Question 2');
// What will this output?
console.log([1, 2, 3] + [4, 5]);
// Ans = you can't add arrays this way, they will convered to strings

prompt('Question 3');
// What will this output?
let str1 = 'hello there';
let str2 = str1;
// eslint-disable-next-line no-unused-vars
str2 = 'goodbye';
console.log(str1);

prompt('Question 4');
// What will this output?
let arr1 = [{ first: 'value1'}, { second: 'value2' }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);

prompt('Question 5');
// Refractor function with only one return and does not use true or false
// come up with 2 solutions
function isColorValid(color) {
  return (color === 'blue' || color === 'green');
}

function isColorValid2(color) {
  return ['blue', 'green'].includes(color);
}

console.log(isColorValid('blue'));
console.log(isColorValid('white'));
console.log(isColorValid('green'));
console.log(isColorValid('black'));

console.log(isColorValid2('blue'));
console.log(isColorValid2('white'));
console.log(isColorValid2('green'));
console.log(isColorValid2('black'));