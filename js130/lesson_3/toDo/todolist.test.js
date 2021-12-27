const Todo = require('./todo');
const TodoList = require('./todolist');

describe('TodoList', () => {
  let todo1;
  let todo2;
  let todo3;
  let list;

  beforeEach(() => {
    todo1 = new Todo('Buy milk');
    todo2 = new Todo('Clean room');
    todo3 = new Todo('Go to the gym');

    list = new TodoList("Today's Todos");
    list.add(todo1);
    list.add(todo2);
    list.add(todo3);
  });

  // your tests go here
  // size
  test('todolist has a size of 3', () => {
    expect(list.size()).toBe(3);
  });

  // toArray
  test('copy of list', () => {
    expect(list.toArray()).toEqual([todo1, todo2, todo3]);
  });

  // first
  test('calling first todo in list', () => {
    expect(list.first()).toEqual(todo1);
  });

  // last
  test('calling last todo in list', () => {
    expect(list.last()).toEqual(todo3);
  });

  // shift
  test('shift() removes the first item and returns it', () => {
    expect(list.shift()).toEqual(todo1);
    expect(list.todos).toEqual([todo2, todo3]);
  });

  // pop
  test('pop() removes last item and returns it', () => {
    let todo = list.pop();
    expect(todo).toEqual(todo3);
    expect(list.toArray()).toEqual([todo1, todo2]);
  });

  // isDone
  test('Checks if every todo item is completed', () => {
    list.markAllDone();
    expect(list.isDone()).toBe(true);
  });

  // add
  test('TypeError occurs when adding an item that is not a toDo Object', () => {
    expect(() => list.add('hello')).toThrow(TypeError);
    expect(() => list.add(3)).toThrow(TypeError);
    expect(() => list.add(list)).toThrow(TypeError);
    expect(() => list.add({})).toThrow(TypeError);
    expect(() => list.add([])).toThrow(TypeError);
  });

  // itemAt
  test('itemAt checks if index is in list or ReferrenceError', () => {
    expect(() => list.itemAt(5).toThrow(ReferenceError));
    expect(list.itemAt(1)).toEqual(todo2);
  });

  // markDoneAt
  test('marks a todo item as Done at index', () => {
    expect(() => list.markDoneAt(5).toThrow(ReferenceError));
    list.markDoneAt(1);
    expect(todo1.isDone()).toBe(false);
    expect(todo2.isDone()).toBe(true);
    expect(todo3.isDone()).toBe(false);
  });

  // markUndoneAt
  test('marks a todo item as not Done at index', () => {
    expect(() => list.markDoneAt(5).toThrow(ReferenceError));
    list.markAllDone();
    list.markUndoneAt(1);
    expect(todo1.isDone()).toBe(true);
    expect(todo2.isDone()).toBe(false);
    expect(todo3.isDone()).toBe(true);
  });

  // markAllDone
  test('markAllDone marks all todos as true', () => {
    list.markAllDone();
    expect(list.isDone()).toBe(true);
    expect(todo1.isDone()).toBe(true);
    expect(todo2.isDone()).toBe(true);
    expect(todo3.isDone()).toBe(true);
  });
  
  // removeAt
  test('removeAt() splices item from list', () => {
    expect(() => list.removeAt(5).toThrow(ReferenceError));
    let todo = list.removeAt(1)[0];
    expect(todo).toBe(todo2);
    expect(list.toArray()).toEqual([todo1, todo3]);
  });
  
  // toString
  // 1
  test('toString returns string representation of the list', () => {
    let string = `---- Today's Todos ----\n[ ] Buy milk\n[ ] Clean room\n[ ] Go to the gym`;
  
    expect(list.toString()).toBe(string);
  });

  // 2
  test('toString returns string when one todo is done', () => {
    let string = `---- Today's Todos ----\n[X] Buy milk\n[ ] Clean room\n[ ] Go to the gym`;
    list.markDoneAt(0);
    expect(list.toString()).toBe(string);
  });

  // 3
  test('toString returns string when all todos are done', () => {
    let string = `---- Today's Todos ----\n[X] Buy milk\n[X] Clean room\n[X] Go to the gym`;
    list.markAllDone();
    expect(list.toString()).toBe(string);
  });

  // forEach
  test('test if forEach iterates through entire list', () => {
    let arr = [];
    list.forEach(todo => arr.push(todo));
    expect(arr).toEqual(list.toArray());
  });
  
  // filter
  test('filter creates new array based on condition', () => {
    list.markDoneAt(0);
    list.markDoneAt(1);
    let arr = list.filter(todo => todo.isDone());
    list.removeAt(2);
    expect(arr.toString()).toEqual(list.toString());

  });
});