/* PEDAC
Problem - Function that finds the next featured number greater than the inputed number
  Input: Integer
  Output: Integer (Featured)
  Rules:
  - Largest possible featured number is 9876543201
  - Issue msg if no possible larger geatured number
  -- "There is no possible number that fulfills those requirements.'
  - Feature number props:
  -- mutiple of 7
  -- all digits occur exactly once
  -- Odd number
  
  Questions:
  - Are negative integers allowed as input?
  - Input always an integer? no floats?
  
Examples - shown

Logic:
  1. Take input number and increment by one to find the next featured number
  - Use helpful function to test if number is a featured number
  - break loop and return featured number if found
  - end loop if we reach max possible number
  2. Helper function checks if input number is a featured number
  
Implementation:
  Helper Function:
  1. Check if odd
  2. Check if multiple of 7
  3. Check if all digits occur once
  - Convert number to string
  - convert number to array of digits by splitting
  - Loop iteration
    - pop one element off array and check if element appears in array
    - If found, return false
    - Keep iterating until array is empty
  - Return true
  
  
  Featured function
  1. Loop
    - Check if number is featured by passing number into helper function
    - If yes, return featured number
    - If no continue
    - if number > 9876543201
    -- return error message
*/

function isfeatured(number) {
  if (number % 2 === 0) return false;
  if (number % 7 !== 0) return false;
  let digits = String(number).split('');
  while (digits.length > 1) {
    const digit = digits.pop();
    if (digits.includes(digit)) return false;
  }
  return true;
};

function featured(num) {
  while (num < 9876543201) {
    num += 1;
    if (isfeatured(num)) return num;
  }
  return "There is no possible number that fulfills those requirements";
};

// console.log(featured(133));
console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."
