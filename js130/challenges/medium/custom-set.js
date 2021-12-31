"use strict";
/* PEDAC
Problem
  - Implement custom set object
  - Assume all elements are numbers
  - Sets are collections of numbers that are each unique

Examples and Test Cases
  - see custom-set.js
  class CustomSet
    constructor(arr = [])
      this.set = arr;

  instance methods:
    isEmpty()
      -> returns true if no elements
    contains(num)
      -> return boolean if set contains value
    isSubset(obj)
      -> return boolean if obj set contains all elements in "this"
    isDisjoint(obj)
      -> return true if both sets do not share any elements
    isSame()
      -> returns boolean if obj and "this" have all same elements
      - Order does not matter
    add(num)
      -> adds number to set
      - If number exists in set, nothing changes
    intersection(obj)
      -> returns a set of numbers that are shared in both
      - Empty set if no shared elements
    difference(obj)
      -> returns a set of all elements that are only in the first set
      - Does not include any numbers from 2nd set
    union(obj)
      -> returns a set of all unique elements in either set

Data Structures
  - Can use arrays or dictionarys
  - Dictionarys will provide easier lookup times
  - Arrays are acceptable, but searching is a bit harder and will be slow

ALgorithm
  constructor(arr = [])
    this.set = arr;

  isEmpty()
    -> returns true if no elements

  contains(num)
    -> return boolean if set contains value

  isSubset(obj)
    - check if all values this set is contained within obj
    - Use Array.prototype.every( value => obj.contains(value))
    - returns true if all values of this set is obj set

  isDisjoint(obj)
    - Checks if no elements are the same in both sets
    - Use this.difference(obj) = empty Set
    -> return true if both sets do not share any elements

  isSame()
    - Check if set sizes are equal
    - return true if both sets are a subset of each other
      - Order does not matter
    -> returns boolean if obj and "this" have all same elements

  add(num)
    - Check if set contains number
      - If not, add value to set

  intersection(obj)
    - Create an array using filter method to see which elements...
    ... are contained in both sets
    - Create a new set from this array, else empty set
    - Return that set

  difference(obj)
    - create a copy of first set
    - look through all values of 2nd set, and remove any values...
    ... from first set that matches
    - return the modified copy of first set

  helper method:
    delete(value)
      - if set contains value
        - remove value from set

  union(obj)
    - create a copy of first set
    - look through all values of 2nd set, and add any values...
    ... that first set does not contain
    - return the modified copy of first set
*/

class CustomSet {
  constructor(arr = []) {
    this.set = arr;
  }

  isEmpty() { return this.set.length === 0 }
  contains(value) { return this.set.includes(value) }

  add(value) {
    if (this.contains(value)) {
      return this;
    }
    let arr = this.set.slice();
    arr.push(value);
    return new CustomSet(arr);
  }

  delete(value) {
    if (this.contains(value)) {
      const index = this.set.indexOf(value);
      this.set.splice(index, 1);
    }
  }

  isSubset(obj) {
    if (this.isEmpty()) return true;
    return this.set.every(value => obj.contains(value));
  }

  isDisjoint(obj) {
    return this.set.every(num => !obj.contains(num));
  }

  isSame(obj) {
    if (this.set.length !== obj.set.length) return false;
    return this.isSubset(obj);
  }

  intersection(obj) {
    let arr = this.set.filter(value => obj.contains(value));
    return new CustomSet(arr);
  }

  difference(obj) {
    let diff = new CustomSet(this.set);
    obj.set.forEach(num => {
      if (diff.contains(num)) diff.delete(num);
    });
    return diff;
  }

  union(obj) {
    let combined = new CustomSet(this.set);
    obj.set.forEach(value => combined = combined.add(value));
    return combined;
  }
}

let set1 = new CustomSet([1, 2, 3]);
let set2 = new CustomSet([4, 1, 2]);
let set3 = new CustomSet().add(3);
console.log(set1.union(set2));
// console.log(set1.isSame(set2));
module.exports = CustomSet;