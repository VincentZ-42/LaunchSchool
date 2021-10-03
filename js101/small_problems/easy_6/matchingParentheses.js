/* eslint-disable id-length */
/* PEDAC
P - Understand the Problem
  Input: String
  Output: Boolean
  Write a function that returns true if all parentheses
  in string are properly balanced
*/

function isBalanced(string) {
  const arr = string.split('');
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "(" || arr[i] === ")") temp.push(arr[i]);
  }

  // empty means there are no ()
  if (temp.length === 0) return true;

  // elements must be even to have matching ()
  if (temp.length % 2 === 1) return false;

  if (temp[0] === ')' || temp[temp.length - 1] === '(') return false;

  // Checker
  // inside is a flag to show that we are looking for the ) char
  // 0 for false, 1 for inside one parenthesis, 2 for inside 2 parenthese, etc
  let inside = 0;
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] === '(') {
      inside += 1;
    } else if (temp[i] === ')') {
      inside -= 1;
    }
  }
  if (inside === 0) return true;
  return false;
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);

/* More elegant solution
function isBalanced(string) {
  let parens = 0;
  for (let idx = 0; idx < string.length; idx++) {
    if (string[idx] === "(") {
      parens += 1;
    } else if (string[idx] === ")") {
      parens -= 1;
    }
    if (parens < 0) return false;
  }
  return parens === 0;
};
*/