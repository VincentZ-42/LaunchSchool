function removeLastChar(str) {
  let word = str.split('');
  word.pop();
  console.log(word.join(''));
  return word.join('');
}
removeLastChar('ciao!');
removeLastChar('hello');
