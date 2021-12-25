// // Ques 1

// function foo(bar, qux, bax) {
//   return {
//     bar: bar,
//     baz: baz,
//     qux: qux,
//   };
// }

// // Ques 2

// function foo() {
//   return {
//     bar: function() {
//       console.log("bar");
//     },
//     qux: function(arg1) {
//       console.log("qux");
//       console.log(arg1);
//     },
//     baz: function(arg1, arg2) {
//       console.log("baz");
//       console.log(arg1);
//       console.log(arg2);
//     },
//   };
// }

// // Ques 3

// function foo(one, two, three) {
//   return {
//     bar: one,
//     baz: two,
//     qux: three,
//   };
// }

// let baz = foo(1, 2, 3).bar;
// let qux = foo(1, 2, 3).baz
// let bar = foo(1, 2, 3).qux;

// // Ques 4

// function foo(arr) {
//   let one = arr[0];
//   let mid = 5;
//   let three = arr[2];
//   return [three, mid, one];
// }

// let array = [1, 2, 3];
// let result = foo(array);
// // let [ bar, qux, baz ] = result;
// let baz = result[0];
// let qux = result[1];
// let bar = result[2];


// // Ques 5
// function product(num1, num2, num3) {
//   return num1 * num2 * num3;
// }

// let array = [2, 3, 5];
// let result = product(array[0], array[1], array[2]);

// // Ques 6

// function product(arg1, arg2, arg3, arg4) {
//   let  numbers = [arg1, arg2, arg3, arg4]
//   return numbers.reduce((total, number) => total * number);
// }

// let result = product(2, 3, 4, 5);

// // Ques 7
// function qux() {
//   let animalType = "cat";
//   let age = 9;
//   let colors = ["black", "white"];
//   // missing code
//   return {
//     type: animalType,
//     age,
//     colors,
//   };
// }

// let { type, age, colors } = qux();
// console.log(type);    // cat
// console.log(age);     // 9
// console.log(colors);  // [ 'black', 'white' ]

// Quest 8
/* 
Problem:
  Input: 5 Strings
  Output: object with 3 props {first, last, middle}
  Rules:
    Middle property contains 3 middle arguements as sorted array
*/
const { print, newQues } = require("./common");
// import { print, newQues } from "./common";

function hi(a, b, c, d, e) {
  return {
    first: a,
    middle: [b, c, d].sort(),
    last: e,
  };
}

let {first, middle, last} = hi(1, 2, 4, 3, 5);
console.log(first, middle, last);
newQues(1);
print('hi');