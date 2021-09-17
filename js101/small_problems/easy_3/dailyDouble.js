/* PEDAC
P = Understand the Problem
  Create function that gets rid of consecutive duplicate letters in string
  Input = string
  Output = string with no duplicat consecutive characters
  Explicit requirements
  - Does this trim consecutive whitespaces as well?
  - empty strings return empty strings
  - All test cases are strings?
  Implicit
  - Remember that Javascript strings are primitive and not mutable

E = Examples n Test Cases
  crunch('ddaaiillyy ddoouubbllee');    // "daily double"
  crunch('4444abcabccba');              // "4abcabcba"
  crunch('ggggggggggggggg');            // "g"
  crunch('a');                          // "a"
  crunch('');                           // ""

D = Data structure
  1. set new string as empty string
  2. Traverse through old string
    - If char at curr is not equal to char at next index, add to new string
    - Else, continue with loop

A = Algorithim
  Same as D

C = Code
  Below
*/

const crunch = (text) => {
  let index = 0;
  let crunchText = '';
  while (index <= text.length - 1) {
    if (text[index] !== text[index + 1]) {
      crunchText += text[index];
    }
    index++;
  }
  return crunchText;
};

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));     // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""