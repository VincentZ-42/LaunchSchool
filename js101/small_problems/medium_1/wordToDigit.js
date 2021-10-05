/* PEDAC
  Input: String
  Output: String with number words replaced
  Rules:
    Replace all number works with actualy numbers

  Algorithim:
  1. Create object with all number words and numbers
  2. Iterate through object
    - Use String.replace to change all number words
  3. Return new string
*/

// Make sure to use the word boundary anchor when use RegExp to protect...
//...against words like weight turning into w8
function wordToDigit(str) {
  const numWords = ['zero', 'one', 'two', 'three',
    'four', 'five', 'six', 'seven', 'eight', 'nine'];

  for (let index = 0; index < numWords.length; index++) {
    const regex = new RegExp('\\b' + numWords[index] + '\\b', 'g');
    str = str.replace(regex, index);
  }
  return str;
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
console.log(wordToDigit('The weight is done.'));      // "The w8 is d1."
// "Please call me at 5 5 5 1 2 3 4. Thanks."