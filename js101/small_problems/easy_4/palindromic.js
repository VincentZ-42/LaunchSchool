/* PEDAC
P - Understand the Problem
  Input: String
  Output: Boolean
  Rules:
    Palindrome is the same forwards and backwards
    Case sensitive and all characters matter

E - Examples n Test Cases
  isPalindrome('madam') => true
  isPalindrome('Madam') => false

D - Data Structures
  Break string into array
  Create new array and reverse it
  Compare each character in both arrays

A - Algorithims
  1. Create array of characters of input string
  2. Create another arry of chars in reverse order
  3. Traverse through both arrays and compare individual chars
    - If any values are no equal, return false
  4. Return true if successful traverse

C - Code
  Below
*/

const isPalindrome = (word) => {
  const wordArr = word.split('');
  const wordArrRev = wordArr.slice(0).reverse();
  for (let index = 0; index < wordArr.length; index++) {
    if (wordArr[index] !== wordArrRev[index]) return false;
  }
  return true;
};

console.log(isPalindrome('madam'));
console.log(isPalindrome('Madam'));
console.log(isPalindrome("madam i'm adam"));
console.log(isPalindrome('356653'));

/* Elegant Solution
function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}
*/

// ------ Part 2 ------
// New Rules:
//  case insensitive
//  ignore all non-alphanumeric characters
console.log('--------------------Part 2--------------------');

const isAlphaNumeric = (char) => {
  if (char >= 'a' && char <= 'z') {
    return true;
  } else if (char >= '0' && char <= '9') {
    return true;
  }
  return false;
};

function isRealPalidrome(string) {
  const reverse = string.toLowerCase().split('').reverse().filter(isAlphaNumeric).join('');
  const fixedString = string.toLowerCase().split('').filter(isAlphaNumeric).join('');
  return fixedString === reverse;
}

console.log(isRealPalidrome('madam'));
console.log(isRealPalidrome('Madam'));
console.log(isRealPalidrome("Madam I'm Adam"));
console.log(isRealPalidrome('356653'));
console.log(isRealPalidrome('356a653'));
console.log(isRealPalidrome('123ab321'));

/* Palindromic Numbers
  Rules:
    Palindromic function just for numbers
*/
console.log('----------Palindromic Number----------');

function isPalindromicNumber(num) {
  return isRealPalidrome(String(num));
}

console.log(isPalindromicNumber(34543));
console.log(isPalindromicNumber(123210));
console.log(isPalindromicNumber(22));
console.log(isPalindromicNumber(5));