/* PEDAC
P - Create a function that compares objects based on key/value pairs
  Input: 2 Objects
  Output: Boolean if keys/values match
  Rules:
    All keys/value pairs must match
    Empty arrays are equal to each other

Examples
Data Structure
Algorithm
  1. Create array that holds keys of objects to iterate and compare values
      keys1 = array for 1st input object
      keys2 = array for 2nd input object
  2. Check if keys length are the same
  3. Iterate through keys1 array to check if keys and values are the same in keys2
    - Look for keys1 element in keys2
    - Compare value of keys1 and value of keys2
    - If either of above is false, return false
  4. Return true

Code:

*/

function objectsEqual(obj1, obj2) {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);
  
  if (keys1.length !== keys2.length) return false;

  for (let i = 0; i < keys1.length; i++) {
    const key = keys1[i];
    if (!keys2.includes(key)) return false;
    if (obj1[key] !== obj2[key]) return false;    
  }

  return true;
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false