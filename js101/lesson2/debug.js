// debug.js

let counter = 1;

while (counter <= 5) {
  console.log(counter);
  debugger;  // this is a break point
  counter += 1;
}