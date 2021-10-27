/* PEDAC
  Input: string
  Output: Boolean
  Rules:
  - non-empty string input that consist of only lowercase English chars
  - Input always valid? What about 1 char string inputs?

Data Structure n Algorithm
  1. Create substring with 1 char of input string
  2. mutiple that until length of input string test if they're the same
    - If yes, return true
    - If no, return false
*/

function testPattern(string, test) {
  // Take test str, mutiple it until length of string, see if equal
  while (test.length < string.length) {
    test += test;
  }
  return string === test;
}

function repeatedSubstringPattern(string) {
  if (string.length === 1) return false;
  for (let index  = 0; index < string.length / 2; index++) {
    const pattern = string.slice(0, index + 1);
    if (testPattern(string, pattern)) {
      return true;
    };
  }
  return false;
}

console.log(repeatedSubstringPattern('abab') === true);
console.log(repeatedSubstringPattern('aba') === false);
console.log(repeatedSubstringPattern('aabaaba') === false);
console.log(repeatedSubstringPattern('abaababaab') === true);
console.log(repeatedSubstringPattern('abcabcabcabc') === true);