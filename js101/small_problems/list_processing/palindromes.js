/* PEDAC
P - Understand the Problem
  Input: string
  Output: List of all palindromic substrings of a string

E - Examples n Test Cases
  Look after function

D - Data structures
  1. Create a isPalindrome function to check if palindrome
  2. Create array of all possible subset strings
  3. Create empty array
  4. Iterate through all possible subset strings
    - Check each substring with isPalindrome function
    - Add substring to empty array if return true
  5. return array of all palindrome substrings

A - Algorithim

C - Code
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

function substrings(str) {
  let ans = [];
  for (let start = 0; start < str.length; start++) {
    ans.push(leadingSubstrings(str.slice(start)));
  }
  return ans;
}

function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

function palindromes(str) {
  const allSubstrings = substrings(str);
  let ans = [];

  allSubstrings.forEach(subsets =>
    subsets.forEach(string => {
      if (string.length < 2) return;
      if (isPalindrome(string)) {
        ans.push(string);
      }
    })
  );

  return ans;
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]

/* Elegant Solution

function isPalindrome(word) {
  return word.length > 1 && word === word.split("").reverse().join("");
}

function palindromes(string) {
  return substrings(string).filter(isPalindrome);
}


*/