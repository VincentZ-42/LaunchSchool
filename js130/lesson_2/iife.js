// Question 2
(function() {
  console.log("Sometimes, syntax isn't intuitive!");
})();

// Question 3
var sum = 0;
sum += 10;
sum += 31;

sum += (function() {
  let arr = [1, 7, -3, 3];
  return arr.reduce((sum, number) => {
    sum += number;
    return sum;
  }, 0);
})();

console.log(sum);

// Question 4
(function(num) {
  while (num >= 0) {
    console.log(num);
    num--;
  }
})(7);

// Question 6

let bar = (function(start) {
  let prod = start;
  return function (factor) {
    prod *= factor;
    return prod;
  };
})(2);
let result = bar(3);
result += bar(4);
result += bar(5);
console.log(result);

// Question 7
(function countdown(num) {
  if (num === -1) return;
  console.log(num);
  countdown(--num);
})(7);