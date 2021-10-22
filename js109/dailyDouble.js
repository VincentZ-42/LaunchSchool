/* PEDAC
  Input: string
  Output: String
  Rules:
  - Return String collapses all consecutive duplicat characters into single

DA
  1. Create empty string = answer
  2. Iterate through input string
  - If char same as previous char, continue
  - Else, concat char to answer string
  3. Return answer string
*/

function crunch(string) {
  let answer = '';
  for (let index = 0; index < string.length; index++) {
    if (index > 0 && string[index] === string[index - 1]) {
      continue;
    } else {
      answer += string[index];
    }
  }
  return answer;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""