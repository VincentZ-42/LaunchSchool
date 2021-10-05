/* PEDAC
  Input: Integer
  Output: Next Integer that matches rules
  Rules:
    Feature number has following properties:
    - is an odd number
    - is multiple of 7
    - all digits occuring only once
    - greater than the input Integer

  Algorithim:
  1. Check if Input is greater than largest possible featured number
  2. starting at input, iterate up one
    - Check if odd
    - Check if mult of 7
    - Check if all digits occur once
  3. If all true, return number
  4. If not, iterate up
*/

const print = (string) => console.log(string);
const ERR_MSG = "There is no possible number that fulfills those requirements.";
const isOdd = (num) => num % 2 === 1;
const isMultOfSeven = (num) => num % 7 === 0;
const isUniqueDigits = (num) => {
  const numArray = String(num).split('');
  return !numArray.some((digit, index) => numArray.indexOf(digit) !== index);
};

function featured(num) {
  if (num === 9876543201) return ERR_MSG;

  do {
    num += 1;
    // print(isOdd(num) ? 'Odd' : 'false');
    // print(isMultOfSeven(num) ? 'Seven' : 'false');
    // print(isUniqueDigits(num) ? 'Unique' : 'false');
    if (isOdd(num) && isMultOfSeven(num) && isUniqueDigits(num)) return num;
  } while (num < 9876543201);

  return ERR_MSG;
}

print(featured(12));           // 21
print(featured(20));           // 21
print(featured(21));           // 35
print(featured(997));          // 1029
print(featured(1029));         // 1043
print(featured(999999));       // 1023547
print(featured(999999987));    // 1023456987
print(featured(9876543186));   // 9876543201
print(featured(9876543200));   // 9876543201
print(featured(9876543201));   // "There is no possible number that fulfills those requirements."
