/* PEDAC
  Input: string
  Output: Boolean
  Rules:
  - Case matters
  - All characters matter
*/

function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true

console.log('\n---Part 2---\n')

function removeNonAlphanumeric(string) {
  let newString = '';
  for (let index = 0; index < string.length; index++) {
    if (string[index] >= 'a' && string[index] < 'z') {
      newString += string[index];
    } else if (string[index] >= '0' && string[index] <= '9') {
      newString += string[index];
    }
  }
  return newString;
}

function isRealPalindrome(string) {
  return isPalindrome(removeNonAlphanumeric(string.toLowerCase()));
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false