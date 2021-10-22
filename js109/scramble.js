/* PEDAC
  Input: two Strings
  Output: Boolean (2nd strings chars found in 1st string)
  Rules:
  - All input characters will be lowercase letters
  - Assume that All inputs are valid and no empty strings
  - Implicit: each letter only counts once

  Data Sturcture n Algorithm
    1. Iterate through Str2 Input
      - Look in Str1 to find Char
        - If found, continue
        - If not found, return false
    2. Return true
*/

function scramble(str1, str2) {
  for (let index = 0; index < str2.length; index++) {
    const chars = str1.split('');
    if (chars.includes(str2[index])) {
      chars.splice(str1.indexOf(str2[index]), 1);
      str1 = chars.join('');
    } else {
      return false;
    }
  }
  return true;
}

console.log(scramble('javass', 'jjss') === false); // true
console.log(scramble('rkqodlw', 'world') === true); // true
console.log(scramble('cedewaraaossoqqyt', 'codewars') === true); // true
console.log(scramble('katas', 'steak') === false); // true
console.log(scramble('scriptjava', 'javascript') === true); // true
console.log(scramble('scriptingjava', 'javascript') === true); // true
