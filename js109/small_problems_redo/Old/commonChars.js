/* PEDAC
  Input: Array of strings
  Output: Array of common Chars in all Strings
  Rules:
  - Only lowercase letters in strings (duplicates count twice)

  Questions:
  1. How do we deal with empty strings inside of array
  2. What do we do with an array with one element

Data Structure n ALgorthm
  1. sort array with lowest length first
  2. Create empty array called answer
  3. Iterate through first element in array
    - Check if character is in each element of array
    - If yes, add to answer array
  4. Return answer array
*/

function commonChars(array) {
  const words = array.sort((a, b) => a.length - b.length);
  let answer = [];
  const first = words.shift()
  for (let index = 0; index < first.length; index++) {
    if (words.every(word => word.includes(first[index]))) {
      answer.push(first[index]);
    }
  }
  return answer;
}

console.log(commonChars(['adecbdf', 'bc', 'abcd']));
console.log(commonChars(['a', 'b']));
console.log(commonChars(['ab', 'bc']));
console.log(commonChars(['bella', 'label', 'roller']));
console.log(commonChars(['hello', 'goodbye', 'booya', 'random']));

