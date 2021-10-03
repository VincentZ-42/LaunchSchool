/* PEDAC
P - Understand the Problem
  Input: Positive integer
  Output: Integer (sum of its digits)
  Rules:
    Can not use for, while, or do...while loops
    Only use methods
*/

const print = (string) => console.log(string);

function sum(num) {
  return Number(
    String(num)
      .split('')
      .map(element => Number(element))
      .reduce((sum, next) => sum + next));
}

print(sum(23));           // 5
print(sum(496));          // 19
print(sum(123456789));    // 45