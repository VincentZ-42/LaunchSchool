/* PEDAC
  Input: String
  Output: Array
  Rules:
    Each word is an element + its length
    Empty string or no arg = return empty array

  Algorithim
  - Default empty string if no arguemtn
  - If empty string, return []
  1. Split the string into elements
  2. find length of each element and concat to element
  3. Return
*/

const print = (string) => console.log(string);

function wordLengths(str = '') {
  if (str.length < 1) return [];
  let words = str.split(' ');
  for (let index = 0; index < words.length; index++) {
    words[index] += ' ' + words[index].length;
  }
  return words;
}

print(wordLengths('cow sheep chicken'));
// ["cow 3", "sheep 5", "chicken 7"]

print(wordLengths('baseball hot dogs and apple pie'));
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

print(wordLengths("It ain't easy, is it?"));
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

print(wordLengths('Supercalifragilisticexpialidocious'));
// ["Supercalifragilisticexpialidocious 34"]

print(wordLengths(''));      // []
print(wordLengths());        // []