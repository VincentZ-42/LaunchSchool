/* PEDAC
P = Understand the Problem
  Input = positive integer
  Output = alternative 1 and 0 that is length of input
  Always start with 1

E = Examples n Test Cases
  stringy(6) => 101010
  stringy(4) => 1010

D = Data Structure
  1. Create empty string
  2. use loop with input as end condition
    - Append 1 for even index
    - Append 0 for odd index

A = Algorithim
  Follow through with steps above

C = Code
  Below
*/

const stringy = (length) => {
  let result = '';
  for (let idx = 0; idx < length; idx++) {
    if (idx % 2 === 0) {
      result += '1';
    } else {
      result += '0';
    }
  }
  return result;
};

console.log(stringy(6));
console.log(stringy(9));
console.log(stringy(4));
console.log(stringy(7));