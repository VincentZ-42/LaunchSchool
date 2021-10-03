/* PEDAC
  Input: positive integer
  Output: number with digits reversed
*/

const print = (str) => console.log(str);

function reverseNumber(num) {
  return Number(String(num).split('').reverse().join(''));
}

print(reverseNumber(12345));    // 54321
print(reverseNumber(12213));    // 31221
print(reverseNumber(456));      // 654
print(reverseNumber(12000));    // 21 -- Note that leading zeros in the result get dropped!
print(reverseNumber(1));        // 1