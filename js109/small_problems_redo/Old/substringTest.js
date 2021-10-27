/* PEDAC
  Input: 2 Strings
  Output: Boolean (if common substring is found)
  Rules:
  - Case insensitive
  - Only care about substrings that are longer than one letter
  - Assume all characters are letters, such as space and symbols

Data Structure n Algorithm
  1. set both strings to lowercase version of themselves
  2. Find shorter string
  2. Find all possible substrings of shorter string
  3. filter all substrings that are < 2 length
  4. See if longer string contains substring
    - Returns true
  3. Return false
*/

function allPossibleSubstrings(string) {
  let array = [];
  for (let i = 0; i < string.length; i++) {
    for (let j = i; j < string.length; j++) {
      array.push(string.slice(i, j + 1));
    }
  }
  return array;
}

function substringTest(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  const shortString = str1.length < str2.length ? str1 : str2;
  let substrings = allPossibleSubstrings(shortString).filter(sub => sub.length > 1);
  for (let i = 0; i < substrings.length; i++) {
    if (str1.includes(substrings[i])) return true;
  }
  return false;;
}

console.log(substringTest('Something', 'Fun') === false);
console.log(substringTest('Something', 'Home') === true);
console.log(substringTest('Something', '') === false);
console.log(substringTest('', 'Something') === false);
console.log(substringTest('BANANA', 'banana') === true);
console.log(substringTest('1234567', '541265') === true);
console.log(substringTest('TheUltimateTeSt', 'HELLOtherematey') === true);

