/* PEDAC
  Input: String
  Output: object
  Rules:
    Object must contain these properties:
    - % of chars with lowercase letters
    - % of chars with uppercase letters
    - % of chars with neither
*/

function letterPercentages(str) {
  let ret = {lowercase: 0, uppercase: 0, neither: 0};

  for (let index = 0; index < str.length; index++) {
    if (str[index] >= 'a' && str[index] <= 'z') {
      ret.lowercase += 1;
    } else if (str[index] >= 'A' && str[index] <= 'Z') {
      ret.uppercase += 1;
    } else {
      ret.neither += 1;
    }
  }

  for (const prop in ret) {
    ret[prop] = (ret[prop] / str.length * 100).toFixed(2);
  }
  return ret;
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

/* Using RegExp
function letterPercentages(string) {
  let count = string.length;

  function percentage(regex) {
    let matchingChars = string.match(regex) || [];
    return ((matchingChars.length / count) * 100).toFixed(2);
  }

  return {
    lowercase: percentage(/[a-z]/g),
    uppercase: percentage(/[A-Z]/g),
    neither:   percentage(/[^a-z]/gi),
  };
}
*/