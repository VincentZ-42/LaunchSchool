/* PEDAC
P - Understanding the Problem
  Input:  String
  Output: boolean
  Rules:
    String must meet following to be true:
    Can not use a pair of letters
    Can noy use any pair twice
    Ignore cases

Data Structure n Algorithm
  1. Object to hold pairs of letters (inside func or global)
  2. Iterate through input string and check each letter
    - Is this letter part of block pair
    - If another letter of itself is found, return false
    - If the pair of that letter is found, return false
  3. return true;
*/

const print = (str) => console.log(str);
const BLOCKS = {
  B: 'O', X: 'K', D: 'Q', C: 'P', N: 'A',
  G: 'T', R: 'E', F: 'S', J: 'W', H: 'U',
  V: 'I', L: 'Y', Z: 'M'
};

function isBlockWord(str) {
  // Capitalize string to avoid case sensitive
  str = str.toUpperCase();
  for (let index = 0; index < str.length; index++) {
    // can also just use str[index] !== str[index].toUpperCase()
    if (!Object.entries(BLOCKS).flat().includes(str[index])) return false;
    if (str.lastIndexOf(str[index]) !== index) return false;
    if (str.includes(BLOCKS[str[index]])) return false;
  }
  return true;
}

print(isBlockWord('BATCH'));      // true
print(isBlockWord('BUTCH'));      // false
print(isBlockWord('jest'));       // true
print(isBlockWord('floW'));       // true
print(isBlockWord('APPLE'));      // false
print(isBlockWord('apple'));      // false
print(isBlockWord('apPLE'));      // false
print(isBlockWord('Box'));        // false
