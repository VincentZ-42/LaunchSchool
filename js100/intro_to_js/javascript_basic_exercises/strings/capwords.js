function capWords(str) {
  let arr = str.split(' ');
  arr.forEach(word => word[0].toUpperCase());
  return arr.join(' ');
}

console.log(capWords('launch school tech & talk'));
