// function fibonacci(num) {
//   if (num === 1 || num === 2) return 1;
//   return fibonacci(num - 1) + fibonacci(num - 2);
// }

// console.log(fibonacci(1));       // 1
// console.log(fibonacci(2));       // 1
// console.log(fibonacci(3));       // 2
// console.log(fibonacci(4));       // 3
// console.log(fibonacci(5));       // 5
// console.log(fibonacci(12));      // 144
// console.log(fibonacci(20));      // 6765

function fibonacci(num) {
  if (num === 1 || num === 2) return 1;
  let first = 1;
  let second = 1;
  let count = 3;
  while (count++ <= num) {
    if (count % 2 === 1) first += second;
    if (count % 2 === 0) second += first;
  }
  return count % 2 === 1 ? second: first;
}

console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050
