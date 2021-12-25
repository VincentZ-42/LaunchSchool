function myBind(func, obj) {
  return function(...args) {
    func.call(obj, ...args);
  } 
}

let objA = {
  a: 1,
  b: 2
}

let objB = {
  a: 3,
  b: 4
}

function print() {
  console.log(this.a);
  console.log(this.b);
}

let hi = myBind(print, objA);
hi();
let hi1 = myBind(print, objB);
hi1();

// myBind() Improved

