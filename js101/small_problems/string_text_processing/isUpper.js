/* eslint-disable id-length */
function isUppercase(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= 'a' && str[i] <= 'z') return false;
  }

  return true;
}

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true

/* more elegant

function isUppercase(string) {
  return string.toUpperCase() === string;
}

*/