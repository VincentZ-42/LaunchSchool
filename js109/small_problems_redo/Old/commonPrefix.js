const print = (string) => console.log(string);

/* PEDAC
  Input: Array of strings
  Output: String (prefix shared by all strings)
  Rules:
  - If no common prefix, return empty
  - All inputs are in lowercase letters a-z

  Questions:
  - Does all input arrays have more than 1 element? Assume yes
  - Edge case, will there be empty string in array? Assume no

Data Structure n Algorithm
  1. Sort input array by length (shortest first)
  2. create variable prefix = ''
  3. Iterate through first element in array
    - If char at index is same for every elment, add char to prefix
  4. Return prefix
*/

function commonPrefix(array) {
  array.sort((a, b) => a.length - b.length);
  let prefix = '';
  const first = array[0];
  for (let i = 0; i < first.length; i++) {
    if (array.every(word => word[i] == first[i])) {
      prefix += first[i];
    }
  }
  return prefix;
}

print(commonPrefix(['flower', 'flow', 'flight']) === 'fl'); // true
print(commonPrefix(['dog', 'racecar', 'car']) === ''); // true
print(commonPrefix(['interspecies', 'interstellar', 'interstate']) === 'inters'); // true
print(commonPrefix(['throne', 'dungeon' ]) === ''); // true
print(commonPrefix(['throne', 'throne']) === 'throne'); // true
print(commonPrefix([]) === ''); // true