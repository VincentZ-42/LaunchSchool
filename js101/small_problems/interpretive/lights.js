/* eslint-disable array-callback-return */
/* eslint-disable id-length */
/* PEDAC
P - Understand the Problem
  Input: Integer (total number of switches and passes we'll do)
  Output: Array of integers (after count passes)
  Rules:
    - Assume only positive integers are inputed

E - Examples n Test Cases
  lightsOn(5);        // [1, 4]
  // Detailed result of each round for `5` lights
  // Round 1: all lights are on
  // Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
  // Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
  // Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
  // Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

DA - Data Structure n Algorithim
  1.

*/

const print = (str) => console.log(str);

function switchFlip(arr, nth) {
  let index = nth;
  while (index - 1 < arr.length) {
    arr[index - 1] = !arr[index - 1];
    index += nth;
  }
  // for (let index = nth; index < arr.length; index += nth) {
  //   print(index);
  // }
  return arr;
}

function lightsOn(switches) {
  let bank = [];
  for (let i = 0; i < switches; i++) {
    bank.push(true);
  }
  let pass = 2;
  while (pass <= switches) {
    bank = switchFlip(bank, pass);
    pass++;
  }
  return bank.map((light, index) => {
    if (light === true) return index + 1;
    return undefined;
  }).filter(element => typeof element !== 'undefined');
}

print(lightsOn(5));
print(lightsOn(100));