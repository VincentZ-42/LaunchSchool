const print = (str) => console.log(str);

function negative(num) {
  if (num < 0) return num;
  return '-' + num;
}

print(negative(5));     // -5
print(negative(-3));    // -3
print(negative(0));     // -0