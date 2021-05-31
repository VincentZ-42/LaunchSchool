function extractLanguage(str) {
  return str.slice(0, 2);
}

console.log(extractLanguage('en_US.UTF-8'));
console.log(extractLanguage('ko_KR.UTF-16'));
