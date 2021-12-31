function cat(first, ...rest) {
  return {
    first,
    last: rest.pop(),
    middle: rest.sort()
  };
}

console.log(cat(1, 2, 3, 4, 5));