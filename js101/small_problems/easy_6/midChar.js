const print = (str) => console.log(str);

const centerOf = (str) => {
  if (str.length % 2 === 0) {
    return str.substr((str.length / 2) - 1, 2);
  } else {
    return str[parseInt((str.length / 2), 10)];
  }
};

print(centerOf('I Love JavaScript')); // "a"
print(centerOf('Launch School'));     // " "
print(centerOf('Launch'));            // "un"
print(centerOf('Launchschool'));      // "hs"
print(centerOf('x'));                 // "x"