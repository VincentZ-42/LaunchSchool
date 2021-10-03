/* eslint-disable max-len */
/* eslint-disable id-length */

const print = (string) => console.log(string);

print('\n --- Part 1 --- \n');

// function staggeredCase(str) {
//   let ans = str.toLowerCase().split('');

//   for (let i = 0; i < ans.length; i++) {
//     if (i % 2 === 0) ans[i] = ans[i].toUpperCase();
//   }

//   return ans.join('');
// }

// print(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
// print(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
// print(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"

print('\n --- Part 2 --- \n');

function staggeredCase(str) {
  let ans = str.toLowerCase().split('');
  let flag = 1;
  for (let i = 0; i < ans.length; i++) {
    if (flag === 1 && ans[i] >= 'a' && ans[i] <= 'z') {
      flag = 0;
      ans[i] = ans[i].toUpperCase();
    } else if (flag === 0 && ans[i] >= 'a' && ans[i] <= 'z') {
      flag = 1;
    }
  }

  return ans.join('');
}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);