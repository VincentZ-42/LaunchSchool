"use strict";

function makeMultipleLister(num) {
  return function() {
    for (let i = num; i < 100; i++) {
      if (i % num === 0) {
        console.log(i);
      }
    }
  }
}

let lister = makeMultipleLister(17);
// lister();

let total = 0;
function calc() {

  function add(num) {
    total += num;
    return total;
  }
  
  function subtract(num) {
    total -= num;
    return total;
  }

  return [add, subtract];
}

let add = calc()[0];
let subtract = calc()[1];

console.log(add(1));       // 1
console.log(add(42));      // 43
console.log(subtract(39)); // 4
console.log(add(6));       // 10

function later(callback, arg) {
  return function() {
    return callback(arg); 
  }
}

const logger = message => console.log(message);
let logWarning = later(logger, "The system is shutting down!");
logWarning(); // The system is shutting down!

function later2(func, arg) {
  return function(more) {
    return func(arg, more);
  }
}

const notify = function(message, when) {
  console.log(`${message} in ${when} minutes!`);
};

let shutdownWarning = later2(notify, "The system is shutting down");
shutdownWarning(30); // The system is shutting down in 30 minutes!

function bind(obj, func) {
  return () => func.call(obj);
}

let obj = {};
let boundFunc = bind(obj, function() {
  this.foo = "bar";
});

boundFunc();
console.log(obj); // { foo: 'bar' }