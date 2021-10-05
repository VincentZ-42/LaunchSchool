function displaySeparator(msg) {
  console.log(`--- ${msg} ---`);
}
displaySeparator('Question 1');
// No error when out of index array element is assigned to array

displaySeparator('Question 2');
// How do you determine a string ends with '!'?
let str1 = "Come over here!";
let str2 = "What's up, Doc?";
const findEnd = (str) => str[str.length - 1] === '!';
console.log(findEnd(str1));
console.log(findEnd(str2));
// Solution = str1.endsWith("!");

displaySeparator('Question 3');
// Does Object contain 'Spot'
// let ages = { herman: 32, lily: 30, grandpa: 402, eddie: 10 };
// console.log(ages.hasOwnProperty('spot'));

displaySeparator('Question 4');
// return string in all lowercase except first letter
let munstersDescription = "the Munsters are CREEPY and Spooky.";
console.log(munstersDescription.charAt(0).toUpperCase() +
            munstersDescription.substring(1).toLowerCase());

displaySeparator('Question 5');
// eslint-disable-next-line eqeqeq
console.log(false == '0'); // true due to implicit coercion
console.log(false === '0'); // false


displaySeparator('Question 6');
// Add entries to object
let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
let additionalAges = { Marilyn: 22, Spot: 237 };
Object.assign(ages, additionalAges);
console.log(ages);

displaySeparator('Question 7');
// find Dino in strings
let string1 = "Few things in life are as important as house training your pet dinosaur.";
let string2 = "Fred and Wilma have a pet dinosaur named Dino.";
console.log(string1.includes('Dino'));
console.log(string2.includes('Dino'));

displaySeparator('Question 8');
// Add Dino to array
let flintstones = ['Fred', 'barney', 'Wilma', 'Betty', 'Bambam', 'Pebbles'];
flintstones.push('Dino');
console.log(flintstones);

displaySeparator('Question 9');
// add more elements to array
flintstones.push('hi', 'bye');
console.log(flintstones);

displaySeparator('Question 10');
let advice = "Few things in life are as important as house training your pet dinosaur";
console.log(advice.slice(0, advice.indexOf('house')));