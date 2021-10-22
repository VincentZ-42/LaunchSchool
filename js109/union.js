function union(arr1, arr2) {
  return arr1.concat(arr2).sort((a, b) => a - b);
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]