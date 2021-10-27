/* PEDAC
Problem - Create function that replaces every occurance of number word with digit character in string
  Input: String
  Output: String (with replaced digits)
  Rules:
  - Only numbers 0-9
  - Implicit word numbers won't match exactly, may have punctuations
  - Case Insensitive
  
Algorithm
  1. Initialize any array of number words to use for replacement in string
  2. Replace any instance of a word number in string with digit number by iterating through array
    - use String.replace with RegEx
    - Make sure this replace is case insensitive
  3. return new string with digit number characters
*/

// g for global
// i for ignore case

function wordToDigit(string) {
  const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  numbers.forEach((word, index) => {
    const regex = new RegExp(word, 'gi');
    string = string.replace(regex, index);
  });  
  return string;
}


console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
console.log(wordToDigit('Please call me at FIVE five Five oNe tWo Three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."
