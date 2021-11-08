function createbook(title, author, read = false) {
  return {
    title,
    author,
    read,
    
    readBook() {
      this.read = true;
    },

    getDescription() {
      return `${this.title} was written by ${this.author}. I ${this.read ? "have" : "haven't"} read it.`;
    },

  };
}

const print = (...string) => console.log(string);
let book1 = createbook('Mythos', 'Stephen Fry');
let book2 = createbook('Me Talk Pretty One Day', 'David Sedaris');
let book3 = createbook("Aunts aren't Gentlemen", 'PG Wodehouse');

// print(book1.getDescription());
// print(book2.getDescription());
// print(book3.getDescription());

// console.log(book1.read); // => false
// console.log(book2.read); // => false
// console.log(book3.read); // => false

print(book1.getDescription()); // Mythos was written by David Fry. I haven't read it.
book1.readBook();
print(book1.getDescription()); // Mythos was written by David Fry. I have read it.