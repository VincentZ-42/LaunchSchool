/* PEDAC
Problem
- Create Function that takes 2 arguments and prints greeting
- Input
-- 1st arguemnt = array that contains name
-- 2nd arguement = object with title n occupation key
- Output
-- Greeting with name and mentions title
Examples
- Input:
-- ['John', 'Q', 'Doe']
-- {title: 'Master', occupation: 'Plumber'}
- Output
-- Hello, John Q Doe! Nice to have a Master Plumber around.
Data Struction
- Just a function, nothing special
Algorithim
- using String.join and console.log
Code
1. Set Full name
2. Set Full title + occupation
3. return Full name + title + occupation
*/

function greetings(name, job) {
  let fullName = name.join(' ');
  let profession = job.title + ' ' + job.occupation;
  return `Hello, ${fullName}! Nice to have a ${profession} around.`;
}

console.log(
  greetings(['John', 'Q', 'Doe'], {title: 'Master', occupation: 'Plumber'})
);