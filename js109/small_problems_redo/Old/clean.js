/* PEDAC
  Input: string
  Output: String
  Rules:
  - Returng String with all non-alphabetic chars replaced with spaces
  - Only one space between characters

DA
  1. Iterate through string
    - If char is not number or letter and last char is not space, append space
    - else append character
  3. return new string
*/

function isAlphaNumeric(char) {
  char = char.toLowerCase();
  if (char >= 'a' && char <= 'z') return true;
  // if (char >= '0' && char <= '9') return true;
  return false;
}

function cleanUp(string) {
  let answer = '';
  for (let index = 0; index < string.length; index++) {
    if (isAlphaNumeric(string[index])) {
      answer += string[index];
    } else if (index > 0 && !isAlphaNumeric(string[index - 1])) {
      continue;
    } else {
      answer += ' ';
    }
  }
  return answer;
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "