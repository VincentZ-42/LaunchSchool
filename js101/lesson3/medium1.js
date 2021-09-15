const prompt = (msg) => console.log(`\n--- ${msg} ---`);

prompt('Question 1');
// write a function that ouputs string 10 times with each line indented more +1
function displayRock(msg) {
  for (let spaces = 0; spaces < 10; spaces++) {
    console.log(`${' '.repeat(spaces)}${msg}`);
  }
}
displayRock('The Flintstones Rock!');

prompt('Question 2');
// return new string that swaps case of all Letters
let munstersDescription = 'The Munsters are creepy and spooky.';
function swapCase(str) {
  return str.split('').map(function(char) {
    if (char === char.toUpperCase()) {
      return char.toLowerCase();
    } else {
      return char.toUpperCase();
    }
  }).join('');
}

console.log(swapCase(munstersDescription));

prompt('Question 3');
// use while loop instead do-while loop

prompt('Question 4');
// push() mutates, concat() does not

prompt('Question 5');
// What will code ouput?
console.log(0.3 + 0.6); // 0.89999999
console.log(0.3 + 0.6 === 0.9); // false;

prompt('Question 6');
// What will code output?
let nanArray = [NaN];
// eslint-disable-next-line use-isnan
console.log(nanArray[0] === NaN);
// Javascript doesn't let you use == or === on NaN
// must use Number.isNan();

prompt('Question 7');
// What will code output?
// 34

prompt('Question 8');
// objects are passed by reference
// mutating an object elsewhere will
// Change it everywhere

prompt('Question 9');
// What will code output?
// paper

prompt('Question 10');
// What will code output?
// no
