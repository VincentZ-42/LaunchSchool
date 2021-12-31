/* PEDAC
Problem:
  - Implement a simple linked list class
  - Head is last element
  - Tail is first element
  - LIFO = last in, first out

Examples n Test Cases:
  - See simple-linked-list.js

Data Structures:
  - Class Element for nodes
  - Class LInked List for list
  - Some array and number manipulation

Algorithm:
  class Element
    constructor(value, next)

    instance method:
      datum -> returns value inside element
      isTail -> is last element in list (if next points to null)
      next() -> returns the next element attach to element

  class SimpleLinkedList
    static methods:
      fromArray(arr) -> converts arr to linked List
      toArray(arr) -> converse Linked List to Array
        Does not mutate linked list

    instance methods:
      head() -> returns the last element that was added to list
      push() -> Adds new element to list
      pop() -> removes the most recently added item
      size() -> returns # of elements in list
      isEmpty() -> true or false if empty
      peek() -> returns value of head
      reverse() -> reverses linked list (does not need to be same object)
        Does not mutate linked list
*/
"use strict";

class Element {
  constructor(value, nextElement = null) {
    this.value = value;
    this.nextElement = nextElement;
  }

  datum() { return this.value }
  isTail() { return this.next() === null }
  next() { return this.nextElement }
}

class SimpleLinkedList {
  constructor() {
    this.list = [];
    this.last = null;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    } else {
      return this.last.datum();
    }
  }
  size() { return this.list.length }
  isEmpty() { return this.size() === 0 }
  head() { return this.last }

  static fromArray(arr) {
    let list = new SimpleLinkedList();
    if (arr === null || arr.length < 1) return list;
    let temp = arr.slice().reverse();
    for (let idx = 0; idx < temp.length; idx++) {
      list.push(temp[idx]);
    }
    return list;
  }

  toArray() {
    let arr = [];
    let node = this.last;
    while (node) {
      arr.push(node.value);
      node = node.next();
    }
    return arr;
  }

  push(value) {
    let node = new Element(value);
    if (!this.isEmpty()) {
      node.nextElement = this.last;
    }
    this.list.push(node);
    this.last = node;
  }

  pop() {
    let node = this.list.pop();
    this.last = node.next();
    return node.value;
  }

  reverse() {
    let reverse = new SimpleLinkedList();
    let node = this.last;
    while (node) {
      reverse.push(node.value);
      node = node.next();
    }
    return reverse;
  }
}

let list = SimpleLinkedList.fromArray([1, 2]);
console.log(list, list.head());
module.exports = { Element, SimpleLinkedList };