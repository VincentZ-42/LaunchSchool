function assignProperty(obj, prop, value) {
  if (obj === null) return;
  if (obj.hasOwnProperty(prop)) {
    obj[prop] = value;
    return;
  } else {
    console.log(Object.getPrototypeOf(obj));
    assignProperty(Object.getPrototypeOf(obj), prop, value);
  }
}

let fooA = { bar: 1 };
let fooB = Object.create(fooA);
let fooC = Object.create(fooB);

assignProperty(fooC, "bar", 2);
console.log(fooA.bar); // 2
console.log(fooC.bar); // 2

assignProperty(fooC, "qux", 3);
console.log(fooA.qux); // undefined
console.log(fooC.qux); // undefined
console.log(fooA.hasOwnProperty("qux")); // false
console.log(fooC.hasOwnProperty("qux")); // false

let foo = {
  1: 'hi',
  2: 'bye',
  3: 'hello'
};

let random = {
  cool: 'I am cool'
};

Object.setPrototypeOf(foo, random);

for (let property in foo) {
  console.log(`${property}: ${foo[property]}`);
}

Object.keys(foo).forEach(property => {
  console.log(`${property}: ${foo[property]}`);
});

global.foo = 5;
if (isFinite(foo)) {
  let bar = 3;
  xyz = 5;
  console.log(bar);
}

console.log( typeof global);
// console.log( foo in global);
// console.log( isFinite in global);
// console.log( xyz in global);
// console.log( console in global);