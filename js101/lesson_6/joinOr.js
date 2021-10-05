/* eslint-disable id-length */
/* eslint-disable max-lines-per-function */
function joinOr(arr, delimiter = ',', ending = 'or') {
  let string = '';
  if (arr.length === 0) {
    return string;
  } else if (arr.length === 1) {
    string += arr[0];
  } else if (arr.length === 2) {
    string = `${arr[0]} ${ending} ${arr[1]}`;
  } else {
    for (let i = 0; i < arr.length - 1; i++) {
      string += arr[i] + delimiter;
      if (arr[i + 1]) {
        string += ' ';
      }
    }
    if (arr.length >= 2) {
      string += ending + ' ' + arr[arr.length - 1];
    }
  }

  return string;
}

console.log(joinOr([1, 2, 3]));               // => "1, 2, or 3"
console.log(joinOr([1, 2, 3], ';'));         // => "1; 2; or 3"
console.log(joinOr([1, 2, 3], ',', 'and'));  // => "1, 2, and 3"
console.log(joinOr([]));                      // => ""
console.log(joinOr([5]));                     // => "5"
console.log(joinOr([1, 2]));                  // => "1 or 2"