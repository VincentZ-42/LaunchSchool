/* PEDAC
  Input: array of strings
  Output: array of Strings without vowels
*/

function removeVowels(arr) {
  const VOWELS = 'aeiouAEIOU';
  return arr.map(word => word.split('').filter(char => !VOWELS.includes(char)).join(''));
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]

/* Elegant

function removeVowels(strings) {
  return strings.map(string => string.replace(/[aeiou]/gi, ""));
}

*/