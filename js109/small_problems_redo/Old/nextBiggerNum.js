/* PEDAC
  Input: Positive integer
  Output: Integer
  Rules:
  - Return must be formed by same digits
  - Assume input is always Number
  - If not bigger number, then return - 1
Data Structure n Algorithm
  1. Check if input is max possible number with digits
    - ipnut = input.sort().reverse()
  2. Create function that checks if digits are same between two numbers
  3. Increment input number until we find match with previous function
*/

function isSameDigits(num1, num2) {
  return String(num1).split('').sort().join('') === String(num2).split('').sort().join('');
}

function nextBiggerNum(num) {
  const maxNum = parseInt(String(num).split('').sort().reverse().join(''), 10);
  if (num === maxNum) return -1;
  for (let temp = num + 1; temp <= maxNum; temp++) {
    if (isSameDigits(temp, num)) return temp;
  }
  return -1;
}

console.log(nextBiggerNum(9) === -1); //true
console.log(nextBiggerNum(12) === 21); //true
console.log(nextBiggerNum(513) === 531); //true
console.log(nextBiggerNum(2017) === 2071); //true
console.log(nextBiggerNum(111) === -1); //true
console.log(nextBiggerNum(531) === -1); //true
console.log(nextBiggerNum(123456789) === 123456798); //true