/* PEDAC
  Write a function that takes a string and returns an object containing ratios of UpperCase n lowercase letters
  Input: String
  Output: Object
  Rules:
  - Ratios are fixed to 2 decimals places
  - Properties:
  -- lowercase, uppercase, neither
  - String input will always contain at least one character
  
  Algorithm
  1. Create object with three properties as tracker of characters of string
  2. Iterate through the entire string to count number of uppercase, lowercase, and neither letter characters
  - Use helper function to properly place counter in object
  3. Iterate through object to calculate percent ratios and save ratio in object
  - use the for..in loop to iterate through each property of object
  - divide each value in each property by the total number of characters in string
  - Make sure use toFixed(2) to calculate each ratio to 2 decimal places
  4. return object
*/

function placeLetter(obj, char) {
  if (char >= 'a' && char <= 'z') {
    obj.lowercase += 1;
  } else if (char >= 'A' && char <= 'Z') {
    obj.uppercase += 1;
  } else {
    obj.neither += 1;
  }
}

function letterPercentages(string) {
  // Step 1
  let ratios = {
    lowercase: 0,
    uppercase: 0,
    neither: 0
  };
  
  // Step 2
  for (let index = 0; index < string.length; index++) {
    placeLetter(ratios, string[index]);
  }
  
  // Step 3
  for (const prop in ratios) {
    ratios[prop] = ((ratios[prop] / string.length) * 100).toFixed(2);
  }
  
  return ratios;
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
