const print = (str) => console.log(str);

print('--- Part 1 ---');
// Input: string (sentence of words)
// Output: string(sentence of words with words in reverse order)

function reverseSentence(sentence) {
  return sentence.split(' ').reverse().join(' ');
}

console.log(reverseSentence(''));                       // ""
console.log(reverseSentence('Hello World'));            // "World Hello"
console.log(reverseSentence('Reverse these words'));    // "words these Reverse"

print('--- Part 2 ---');

function letterSwap(word) {
  if (word.length >= 5) return word.split('').reverse().join('');
  return word;
}

function reverseWords(sentence) {
  return sentence.split(' ').map(word => letterSwap(word)).join(' ');
}

print(reverseWords('Professional'));             // "lanoisseforP"
print(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
print(reverseWords('Launch School'));            // "hcnuaL loohcS"