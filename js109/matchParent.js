/* PEDAC
  Input: String
  Output: Boolean of matching Parenthesis
  Ruels:
    - balanced paris must start with ( 

DA
  1. Create variable balance to track parenthesis
  2. Iteration through string
    - if encounter ) while balance = 0, return false
    - If encounter (, increment balance by 1
    - If encounter ), decrement balance by 1
  3. Return balance === 0
*/

function isBalanced(string) {
  let balance = 0;
  for (let index = 0; index < string.length; index++) {
    if (string[index] === ')') {
      if (balance === 0) return false;
      balance -= 1;
    } else if (string[index] === '(') {
      balance += 1;
    }
  }
  return balance === 0;
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);