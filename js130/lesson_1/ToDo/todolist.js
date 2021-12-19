// This class represents a todo item and its associated
// data: the todo title and a flag that shows whether the
// todo item is done.

class Todo {
  static DONE_MARKER = "X";
  static UNDONE_MARKER = " ";

  constructor(title) {
    this.title = title;
    this.done = false;
  }

  toString() {
    let marker = this.isDone() ? Todo.DONE_MARKER : Todo.UNDONE_MARKER;
    return `[${marker}] ${this.title}`;
  }

  markDone() {
    this.done = true;
  }

  markUndone() {
    this.done = false;
  }

  isDone() {
    return this.done;
  }

  getTitle() {
    return this.title;
  }
}

// This class represents a collection of Todo objects.
// You can perform typical collection-oriented actions
// on a TodoList object, including iteration and selection.

class TodoList {
  constructor(title) {
    this.title = title;
    this.todos = [];
  }

  add(task) {
    if (task instanceof Todo){
      this.todos.push(task);
    } else {
      throw new TypeError('can only add ToDo objects');
    }
  }

  size() {
    return this.todos.length;
  }

  first() {
    return this.todos[0];
  }

  last() {
    let last = this.todos.length - 1;
    return this.todos[last];
  }

  itemAt(index) {
    this._validateIndex(index);
    return this.todos[index];
  }

  // _ in name suggests a "private" method (used by class but not by user)
  _validateIndex(index) {
    if (!(index in this.todos)) {
      throw new ReferenceError(`invalid index: ${index}`);
    }
  }

  markDoneAt(index) {
    this.itemAt(index).markDone();
  }

  markUndoneAt(index) {
    this.itemAt(index).markUndone();
  }

  isDone() {
    return this.todos.every(task => task.isDone());
  }

  shift() {
    return this.todos.shift();
  }

  pop() {
    return this.todos.pop();
  }

  removeAt(index) {
    this._validateIndex(index);
    return this.todos.splice(index, 1);
  }

  toString() {
    console.log("---- Today's Todos ----");
    this.todos.forEach(task => console.log(task.toString()));
  }

  forEach(callback) {
    this.todos.forEach(callback);
  }

  // // Creating forEach from scratch
  // forEach(callback, thisArg) {
  //   for (let i = 0; i < this.todos.length; i++) {
  //     callback.call(thisArg, this.todos[i]);
  //   }
  // }

  filter(callback) {
    let output = new TodoList();
    for (let i = 0; i < this.size(); i++) {
      if (callback(this.itemAt(i)) === true) {
        output.add(this.itemAt(i));
      }
    }
    return output;
  }

  findByTitle(title) {
    return this.filter(task => task.getTitle() === title).first();
  }

  allDone() {
    return this.todos.filter(task => task.isDone());
  }

  allNotDone() {
    return this.todos.filter(task => !task.isDone());
  }

  markDone(title) {
    if (this.findByTitle(title)) {
      this.findByTitle(title).markDone();
    }
  }

  markAllDone() {
    this.todos.forEach(task => task.markDone());
  }

  markAllUndone() {
    this.todos.forEach(task => task.markUndone());
  }

  toArray() {
    return this.todos.slice();
  }
}

let todo1 = new Todo("Buy milk");
let todo2 = new Todo("Clean room");
let todo3 = new Todo("Go to the gym");
let todo4 = new Todo("Go shopping");
let todo5 = new Todo("Feed the cats");
let todo6 = new Todo("Study for Launch School");
let list = new TodoList("Today's Todos");

list.add(todo1);
list.add(todo2);
list.add(todo3);
list.add(todo4);
list.add(todo5);
list.add(todo6);
todo1.markDone();
todo5.markDone();

list.markAllDone();
list.markAllUndone();
console.log(list.toArray());