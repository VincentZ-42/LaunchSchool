function capitalize(str) {
  if (str.length > 10) {
    return str.toUpperCase();
  } else {
    return str;
  }
}

const input = require('readline-sync');
const word = input.question('Enter word: ');
console.log(capitalize(word));