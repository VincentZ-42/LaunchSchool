// Question 1
// 1, 2, 3, 4

function makeMultipleLister(num) {
  let arr = [];
  for (let idx = num; idx < 100; idx += num) {
    arr.push(idx);
  }
  return function() {
    arr.forEach(num => console.log(num));
  }
}

let lister = makeMultipleLister(17);
lister();

function create() {
  let total = 0;
  function add(num) { return total += num }
  function subtract(num) { return total -= num }
  return [add, subtract];
}

let [add, subtract] = create();
console.log(add(1));       // 1
console.log(add(42));      // 43
console.log(subtract(39)); // 4
console.log(add(6));       // 10

// Question 7
// Line 11: 6 + 6*4
// Line 12: Line 11 + 120
// Line 13: 150

console.log('\nQuestion 8\n');

function later(func, msg) {
  return function() {
    func(msg);
  };
}

const logger = message => console.log(message);
let logWarning = later(logger, "The system is shutting down!");
logWarning(); // The system is shutting down!


console.log('\nQuestion 9\n');

function later2(func, msg) {
  return function(time) {
    func(msg, time);
  };
}

const notify = function(message, when) {
  console.log(`${message} in ${when} minutes!`);
};

let shutdownWarning = later2(notify, "The system is shutting down");
shutdownWarning(30); // The system is shutting down in 30 minutes!


console.log('\nQuestion 10\n');

function bind (obj, func) {
  return () => func.call(obj);
}

let obj = {};
let boundFunc = bind(obj, function() {
  this.foo = "bar";
});

boundFunc();
console.log(obj); // { foo: 'bar' }