const prompt = (msg) => console.log(`\n--- ${msg} ---`);

prompt('Question 1');
// use of semi-colons are important
// Javascript auto-inserts semi-colons

prompt('Queston 2');
// What does last line output?
let object = { first: [1] };
let numArray = object['first'];
numArray.push(2);

console.log(numArray); // => [1, 2]
console.log(object); // => [1, 2]
// Objects are passed by reference, original
// will always change if you change a referrence
// to avoid mutation, use slice() or concat()

prompt('Queston 3');
// What will code output?
/*
A) No change, shadowing
B) No change, shadowing
C) Output:
one is: one
two is: two
three is: three
spilce changes content of array
*/

prompt('Queston 4');
// Refactor code to handle invalid
function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }
  return false;
}

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length !== 4) return false;
  while (dotSeparatedWords.length > 0) {
    let word = Number(dotSeparatedWords.pop());
    if (!isAnIpNumber(word)) {
      return false;
    }
  }

  return true;
}

console.log(isDotSeparatedIpAddress('10.4.5.11'));
console.log(isDotSeparatedIpAddress('10.4.5'));
console.log(isDotSeparatedIpAddress('10.4.5.11.20'));