/* PEDAC
Problem:
  - Write a program that generates lyrics to 99 Bottles of Beer song

Examples n Test Cases:
- See beer-song.test.js
- Sepcial string for verse at 1 and 0

Data Structures:
- Working with String manipulates
- class of BeerSong
- 3 static methods
  - verse(num) that gives us a single verse
  - verses(start, end) that gives us multiple verses
  - lyrics() that gives us the entire song

Algorithm:
  static verse(num)
    - Use a switch case to determine what the verse will output
    - Case 0: --- no more bottles of beer
    - Case 1: --- Use singular bottle
    - default: --- Use common lyrics

  static verses(start, end)
    - Set empty string variable to hold lyrics
    - Iterate from start to end, adding each verse to lyrics
    - return lyrics string

  static lyrics()
    - return static method of verses, starting at 99 and ending at 0
*/

class BeerSong {
  static verse(line) {
    let endS = (line - 1) > 1 ? 's' : '';
    switch (line) {
      case 0:
        return "No more bottles of beer on the wall, no more bottles of beer.\n" +
        "Go to the store and buy some more, 99 bottles of beer on the wall.\n";
      case 1:
        return "1 bottle of beer on the wall, 1 bottle of beer.\n" +
        "Take it down and pass it around, no more bottles of beer on the wall.\n";
      default:
        return `${line} bottles of beer on the wall, ${line} bottles of beer.\n` +
        `Take one down and pass it around, ${line - 1} bottle${endS} of beer on the wall.\n`;
    }
  }

  static verses(start, end) {
    let lyrics = '';
    while (start >= end) {
      lyrics += this.verse(start);
      if (start !== end) lyrics += '\n';
      start--;
    }
    return lyrics;
  }

  static lyrics() {
    return BeerSong.verses(99, 0);
  }
}

console.log(BeerSong.verse(99, 98));
module.exports = BeerSong;