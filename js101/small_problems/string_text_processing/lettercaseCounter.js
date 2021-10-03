function letterCaseCount(str) {
  let ans = {
    lowercase: 0,
    uppercase: 0,
    neither: 0
  };

  str.split('').forEach(char => {
    if (char >= 'a' && char <= 'z') {
      ans.lowercase += 1;
    } else if (char >= 'A' && char <= 'Z') {
      ans.uppercase += 1;
    } else {
      ans.neither += 1;
    }
  });
  return ans;
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }