const print = (string) => console.log(string);

/* PEDAC
  Input: string
  Output: Object (keys = word length, values: occurance in sentence)
  Rules:
    - Words consist of any seuqnece of non-space characters

DA
  1. Split string into array of words
  2. Create empty object
  3. Iterate through array of words
    - For each word, find length
    - set key to length || 0
    - object[key] += 1;
  4. Return object
*/

function wordSizes(sentence) {
  if (!sentence) return {};
  const words = sentence.split(' ');
  let counter = {};
  words.forEach(word => {
    const size = word.replace(/[^A-Za-z]/g, '').length;
    counter[size] = counter[size] || 0;
    counter[size] += 1;
  });
  return counter;
}

print(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
print(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
print(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
print(wordSizes(''));                                            // {}