const print = (str) => console.log(str);

function swapName(str) {
  return str.split(' ').reverse().join(', ');
}

print(swapName('Joe Roberts'));