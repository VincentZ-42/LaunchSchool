let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

function allMatches(arr, word) {
  return arr.filter(string => word.test(string));
}

console.log(allMatches(words, /lab/));