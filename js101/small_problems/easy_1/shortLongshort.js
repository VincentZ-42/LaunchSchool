/* Steps
1. Compare string length
-- SET longer and shorter string
2. return Concatenate strings
*/

function shortLongShort(str1, str2) {
  let shorterString = str1;
  let longerString = str2;
  if (str1.length > str2.length) {
    shorterString = str2;
    longerString = str1;
  }
  return shorterString + longerString + shorterString;
}

// test cases
console.log(shortLongShort('abc', 'defgh'));
console.log(shortLongShort('abcde', 'fgh'));
console.log(shortLongShort('', 'xyz'));