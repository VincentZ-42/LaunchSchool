/* PEDAC
Problem:
  - Write a program that calculates the Hamming distance between two DNA strands
  Input: String
  Output: Integer (# of diff between dna strand n input)
  Rules:
    - Hamming distance is the differences between two homologous DNA strands
    - If 2 sequences of unequal length, compute Hamming distance for shorter one

  Questions:
    - Assume Inputs are always Strings and Valid

Examples n test cases
  - See dna.test.js

Data Structures
  - Class of DNA
  - Class method of hammingDistance

Algorithm
  Constructor()
    set this.strand = input;

  whichisShorter(dna, input)
  0. if lengths are equal, return both strings in any order
  1. set short = whichever str is shorter
  2. set long = whichever str is longer;
  return [short, long];

  HammingDistance(input)
    - Determine which DNA strand is shorter and set variables
      - [short, long] = whichIsShorter(dna, input);
    - Set count = 0;
    - For loop iteration of short dna
      - If short[index] !== long[i], count += 1
    - return count
*/

class DNA {
  constructor(strand) {
    this.strand = strand;
  }

  whichisShorter(str1, str2) {
    if (str1.length === str2.length) return [str1, str2];
    const short = str1.length < str2.length ? str1 : str2;
    const long = str1.length > str2.length ? str1 : str2;
    return [short, long];
  }

  hammingDistance(input) {
    const [ short, long ] = this.whichisShorter(this.strand, input);
    let count = 0;
    for (let index = 0; index < short.length; index++) {
      if (short[index] !== long[index]) count += 1;
    }
    return count;
  }
}

module.exports = DNA;