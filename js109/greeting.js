function greetings(name, job) {
  return `Hello ${name.join(' ')}! Nice to have a ${job.title} ${job.occupation} around.`;
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.

const read = require('readline-sync');

let name = read.question('What is your name? ');
const greeting = `Hello ${name}.`
if (name[name.length - 1] === '!') {
  console.log(greeting.slice(0, -1).toUpperCase() + ' WHY ARE WE SCREAMING');
} else {
  console.log(greeting);
}