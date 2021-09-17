/* PEDAC
P - Understand the Problem
  Input: String
  Output: string with all non-alphabetic char removed
  Rules:
    No repeating whitespaces in return

E - Examples n Test Cases
  cleanUp("---what's my +*& line?");    // " what s my line "

D - Data Structures
  1. Splits string into array
  2. Loop through array
    - Replacing non-alphabet chars with " "
    - Same time, remove any duplicate whitespaces

A - Algorithim
  1. Split string into array
  2. Loop through array
    - Replace non-alphebet chars with " "
  3. Use crunchText function to remove consective whitespaces
  4. Return new string

C - Code
  Below
*/

const clearConsecutiveSpaces = (text) => {
  let index = 0;
  let crunchText = '';
  while (index < text.length) {
    if (text[index] === ' ' && text[index + 1] === ' ') {
      index += 1;
      continue;
    }
    crunchText += text[index];
    index += 1;
  }
  return crunchText;
};

const cleanUp = (words) => {
  const charArr = words.split('');
  for (let index = 0; index < charArr.length; index++) {
    if (charArr[index] >= 'A' && charArr[index] <= 'Z') {
      continue;
    } else if (charArr[index] >= 'a' && charArr[index] <= 'z') {
      continue;
    } else {
      charArr[index] = ' ';
    }
  }
  return clearConsecutiveSpaces(charArr.join(''));
};

// Added lines so I can see whitespaces at the start and end
console.log('|' + cleanUp("---what's my +*& line?") + '|');