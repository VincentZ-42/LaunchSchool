const print = (msg) => console.log(`\n--- ${msg} ---`);

print('Question 1');
// Replace 'important' with 'urgent'
let advice = "Few things in life are as important as house training your pet dinosaur.";
console.log(advice.replace('important', 'urgent'));

print('Question 2');
// Use reverse n sort to reverse the order of the array without mutagting it
let numbers = [1, 2, 3, 4, 5];
console.log(`numbers: ${numbers}`);

let wayOne = numbers.slice();
console.log(`with reverse: ${wayOne.reverse()}`);

let wayTwo = numbers.slice();
console.log(`with sort: ${wayTwo.sort((num1, num2) => num2 - num1)}`);

print('Question 3');
// Determine if number is in array
numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];
console.log(numbers.includes(8));
console.log(numbers.includes(95));

print('Question 4');
// Show two different ways to add string in front of string
let famousWords = 'seven years ago...';
console.log('Four scores and ' + famousWords);
console.log("Four scores and ".concat('', famousWords));

print('Question 5');
// remove element at index 2 of array
numbers = [1, 2, 3, 4, 5];
console.log(numbers);
numbers.splice(2, 1);
console.log(numbers);

print('Question 6');
// create a new array that contains all values but not nested
let flintstones = ['Fred', 'WIlma'];
let newArray = flintstones.concat(['Barney', 'Betty']);
newArray = newArray.concat(['Bambam', 'Pebbles']);
console.log(newArray);

print('Question 7');
// Get key value pair from object
flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
let array = [];
for (const [key, value] of Object.entries(flintstones)) {
  array = [key, value];
  if (key === 'Barney') break;
}
console.log(array);

print('Question 8');
// Check if object is array
numbers = [1, 2, 3, 4];
let table = { field1: 1, field2: 2, field3: 3, field4: 4 };
console.log(Array.isArray(numbers));
console.log(Array.isArray(table));

print('Question 9');
// center string about 40 char string
let title = 'Flintstone Family Members';
let padding = Math.floor((40 - title.length) / 2);
console.log(title.padStart(padding + title.length), ' ');
console.log(''.padStart(40, 0));

print('Question 10');
// count the number of lower case t char with two one-line expressions
let statement1 = 'The Flintstones Rock!';
let statement2 = 'Easy come, easy go.';

console.log(statement1.split('').filter(char => char === 't').length);
console.log(statement2.split('').filter(char => char === 't').length);

