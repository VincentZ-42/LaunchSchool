/* eslint-disable id-length */
/* PEDAC
  Create a Madlibs program that can use different templates
*/

const print = (string) => console.log(string);
const ADJ = ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'];
const NOUN = ['fox', 'dog', 'head', 'leg', 'tail', 'cat'];
const VERB = ['jumps', 'lifts', 'bites', 'licks', 'pats'];
const ADV = ['easily', 'lazily', 'noisily', 'excitedly'];

function getRand(arr) {
  return arr[Math.floor(Math.random() * (arr.length))];
}

const template1 = `The **N** **V** the **N**'s **N**`;
const template2 = `I am a **ADJ** **N** who likes to **ADV** **V**`;

function madlibs(template) {
  let output = template.split(' ');
  for (let i = 0; i < output.length; i++) {
    if (output[i].includes('**N**')) {
      output[i] = output[i].replace('**N**', getRand(NOUN));
    } else if (output[i].includes('**V**')) {
      output[i] = output[i].replace('**V**', getRand(VERB));
    } else if (output[i].includes('**ADJ**')) {
      output[i] = output[i].replace('**ADJ**', getRand(ADJ));
    } else if (output[i].includes('**ADV**')) {
      output[i] = output[i].replace('**ADV**', getRand(ADV));
    }
  }
  return output.join(' ');
}

print(madlibs(template1));
print(madlibs(template2));