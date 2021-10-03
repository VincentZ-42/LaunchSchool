/* PEDAC
*/
const print = (string) => console.log(string);

print("--- Part 1 ---");
// Input: String
// Output: New String with double of every character

function repeater(str) {
  let ans = '';
  for (let index = 0; index < str.length; index++) {
    ans += `${str[index].repeat(2)}`;
  }
  return ans;
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""

/* More elegant solution
function repeater(string) {
  return string.split("").map(char => char + char).join("");
}
*/

print("--- Part 2 ---");
// Input: string
// Output: new string with only consonant char doubled
// no double vowels, digits, punctuation, or whitespace

const isConsonant = (char) => {
  char = char.toLowerCase();
  if (char >= 'a' && char <= 'z' && !'aeiou'.includes(char)) return true;
  return false;
};

function doubleConsonants(str) {
  return str.split('').map(char => {
    if (isConsonant(char)) return char + char;
    return char;
  }).join('');
}

print(doubleConsonants('String'));          // "SSttrrinngg"
print(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
print(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
print(doubleConsonants(''));                // ""