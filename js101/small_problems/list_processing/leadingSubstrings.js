/* PEDAC
*/

function leadingSubstrings(string) {
  let substrings = [];
  let end = 1;
  while (end <= string.length) {
    substrings.push(string.substring(0, end));
    end++;
  }
  return substrings;
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

console.log('\n--- Part 2: All Substrings---\n');

function substrings(str) {
  let ans = [];
  for (let start = 0; start < str.length; start++) {
    ans.push(leadingSubstrings(str.slice(start)));
  }
  return ans;
}

console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]

export {leadingSubstrings, substrings};