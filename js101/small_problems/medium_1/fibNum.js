const print = (string) => console.log(string);

print('\n --- Part 1: Recursion ---\n');

function fibonacci(nth) {
  if (nth <= 2) return 1;
  return fibonacci(nth - 1) + fibonacci(nth - 2);
}

print(fibonacci(1));       // 1
print(fibonacci(2));       // 1
print(fibonacci(3));       // 2
print(fibonacci(4));       // 3
print(fibonacci(5));       // 5
print(fibonacci(12));      // 144
print(fibonacci(20));      // 6765

print('\n --- Part 2: Procedural ---\n');

function fibonacci2(nth) {
  let first = 1;
  let second = 1;
  let count = 3;

  while (count <= nth) {
    if (count % 2 === 1) {
      first += second;
    } else {
      second += first;
    }
    count++;
  }
  return count % 2 === 1 ? second : first;
}

print(fibonacci2(20));       // 6765
print(fibonacci2(50));       // 12586269025
print(fibonacci2(75));       // 2111485077978050

print('\n --- Part 3: ---\n');

let fib = {1: 1, 2: 1};

function fibonacci3(nth) {
  if (fib[nth]) return fib[nth];
  let count = Number(Object.keys(fib).pop()) + 1;

  while (count <= nth) {
    fib[count] = fib[count - 2] + fib[count - 1];
    count++;
  }
  console.log(fib);
  return fib[nth];
}

print(fibonacci3(20));       // 6765
print(fibonacci3(50));       // 12586269025
print(fibonacci3(75));       // 2111485077978050