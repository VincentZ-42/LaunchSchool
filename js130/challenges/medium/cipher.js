/* PEDAC
Problem
  - Rotate character by 13 characters
  - first half rotates down
  - 2nd half rotates up
  - Case is preversed during shift
  - Only works for letters

Examples n Test Cases
  - class Cipher
    - static method encode


Data Structures
  - String manipulation

Algorithm
  constructor -> n/a
  encode(string)
    1. Create a new string to hold encoding
    2. Iterate through input string to create encoded string
      - If char is letter
        - check if capitalized
        - find index of char in array
        - if index is < 14, add + to unicode and append to string
        - if index is > 14, subtract to unicode and append to string

  Helper function
    isLetter()
    isCap()

*/

class Cipher {
  static alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  static encode(str) {
    let code = '';

    for (let idx = 0; idx < str.length; idx++) {
      let char = str[idx];

      if (Cipher.isLetter(char)) {
        const nth = Cipher.alphabet.indexOf(char.toUpperCase());
        let ascii = str.charCodeAt(idx);
        if (nth < 13) {
          code += String.fromCharCode(ascii + 13);
        } else if (nth >= 13) {
          code += String.fromCharCode(ascii - 13);
        }
      } else {
        code += char;
      }
    }
    return code;
  }

  static isLetter(char) {
    if (Cipher.alphabet.includes(char)) return true;
    if (Cipher.alphabet.toLowerCase().includes(char)) return true;
    return false;
  }
}

module.exports = Cipher;