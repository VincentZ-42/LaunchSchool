// You are given an array of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// Example: 

/* PEDAC
  Input: array
  Output: String (created with longest string from elements in array)
  Rules:
    - String must created from consective elements using k
    - Return empty string if array length = 0, k > array length, k <= 0
    
  Assumption:
  -  Input will always array and integer 
    
  Logic
    1. Create variable to hold longest string
      - Calculate intital longest string with given array and k
    2. Iterate through the array to find longest string
    - Using K and a helper function, determine which consective elements is longer
    3. Return longest string variable
    
  Implentation:
    1. Create varible
    2. Loop:
      1. Loop until Counter is 0
      2. concat all string elements together
      3. Compare concated string with current longest string
      4. Continue loop until iterate through loop
    3. Return variable
*/

function longer(string1, string2) {
  return string1.length >= string2.length ? string1 : string2;
};

function longestConsec(array, k) {
  let longestString = '';
  
  if (array.length === 0 || k > array.length || k <= 0) return '';
  
  for (let i = 0; i < k; i++) {
    longestString += array[i];
  };
  
  for (let i = 0; i < array.length; i++) {
    let tempString = '';
    for (let j = 0; j < k && i + j < array.length; j++) {
      tempString += array[i + j];
    }
    longestString = longer(longestString, tempString);
  };
  
  return longestString;
};

// console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2));

//longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2)
// "abigailtheta"

// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

// Test Cases
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2) === "abigailtheta"); // true
console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1) === "oocccffuucccjjjkkkjyyyeehh"); // true
console.log(longestConsec([], 3) === ""); // true
console.log(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2) === "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"); // true
console.log(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2) === "wlwsasphmxxowiaxujylentrklctozmymu"); // true
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2) === ""); // true
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3) === "ixoyx3452zzzzzzzzzzzz"); // true
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15) === ""); // true
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0) === ""); // true
