function concatenate(...args) {
  if (args.length === 1) {
    let input = args[0];
    return function(str2) {
      if (str2) {
        return input.concat(str2);
      }
      return input;
    };
  } else if (args.length === 2) {
    return args.reduce((str1, str2) => str1.concat(str2), '');
  }
}

console.log(concatenate('ab', 'cd') === 'abcd');            // true
console.log(concatenate('cba', 'xyz') === 'cbaxyz');        // true
console.log(concatenate('cba', '') === 'cba');              // true
console.log(concatenate('', '123'));

const fooCat = concatenate('');
console.log(fooCat('bar') === 'bar');                    // true
console.log(fooCat('xyzzy') === 'xyzzy');                // true
console.log(fooCat('1234'));