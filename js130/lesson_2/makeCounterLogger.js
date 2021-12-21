function makeCounterLogger(num) {
  return function(num2) {
    if (num2 > num) {
      for (let i = num; i <= num2; i++) {
        console.log(i);
      }
    } else if (num2 < num) {
      for (let i = num; i >= num2; i--) {
        console.log(i);
      }
    } else {
      console.log(num2);
    }
  }
}

let countlog = makeCounterLogger(5);
countlog(8);
countlog(2);