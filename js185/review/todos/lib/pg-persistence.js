const { dbQuery } = require("./db-query");

module.exports = class PgPersistence {
  constructor(session) {
    // this._todoLists = session.todoLists || deepCopy(SeedData);
    // session.todoLists = this._todoLists;
  }

  // Returns a promise that resolves to a sorted lsit of all the todo lists
  // together with their todos. The list is sorted by completion status and
  // title (case-insensitive). The todos in the lsit are unsorted.
  async sortedTodoLists() {
    const ALL_TODOLISTS = "SELECT * FROM todolists ORDER BY lower(title) ASC";
    const FIND_TODOS = "SELECT * FROM todos WHERE todolist_id = $1";

    let result = await dbQuery(ALL_TODOLISTS);
    let todoLists = result.rows;

    for (let index = 0; index < todoLists.length; ++index) {
      let todoList = todoLists[index];
      let todos = await dbQuery(FIND_TODOS, todoList.id);
      todoList.todos = todos.rows;
    }

    return this._partitionTodoLists(todoLists);
  }

  // Are all of the todos in the todo list done? if the todo list has at least
  // one todo and all of its todos are marked as done, the nthe todo list is
  // done. Otherwise, it is undone.
  isDoneTodoList(todoList) {
    return todoList.todos.length > 0 && todoList.todos.every(todo => todo.done);
  }

  // Does the todo list have any undone todos? Returns true if yes, false if no.
  hasUndoneTodos(todoList) {
    return todoList.todos.some(todo => !todo.done);
  }

  // Returns a promise that resolves t othe todo list with the specified ID. The
  // todo list contains the otodos for that list. The todos are not sorted. The
  // Promise resolves to 'undefined' if the todo list is not found
  async loadTodoList(todoListId) {
    const FIND_TODOLIST = "SELECT * FROM todolists WHERE id = $1";
    const FIND_TODOS = "SELECT * FROM todos WHERE todolist_id = $1";

    let resultTodoList = dbQuery(FIND_TODOLIST, todoListId);
    let resultTodos = dbQuery(FIND_TODOS, todoListId);
    let resultBoth = await Promise.all([resultTodoList, resultTodos]);

    let todoList = resultBoth[0].rows[0];
    if (!todoList) return undefined;

    todoList.todos = resultBoth[1].rows;
    return todoList;
  };

  // Return a Promise that resolves to a sorted list of all todos in the
  // specified todo list. The list sorted by completion status and title
  // case insensitive
  async sortedTodos(todoList) {
    const SORTED_TODOS = "SELECT * FROM todos WHERE todolist_id = $1 " +
                         "ORDER BY done ASC, lower(title) ASC"

    let result = await dbQuery(SORTED_TODOS, todoList.id);
    todoList.todos = result.rows;
    return todoList;
  }

  // Find a todo with the indicated ID in the indicated todo list through a Query
  // Returns undefined if either todo list or todod is not found
  // Note that both `todoListId` and `todoId` must be numeric.
  async loadTodo(todoListId, todoId) {
    const FIND_TODO = "SELECT * FROM todos WHERE todolist_id = $1 AND id = $2";

    let result = await dbQuery(FIND_TODO, todoListId, todoId);

    return result.rows[0];
  };

  // Toggle a todo between the done and not done state. Returns a promise that
  // resolves to 'true' on success, 'false' if the todo or todo list doesn't 
  // exist. The id arguments must both be numeric.
  async toggleDoneTodo(todoListId, todoId) {
    const TOGGLE_DONE = "UPDATE todos SET done = NOT done " +
                        "WHERE todoList_id = $1 AND id = $2";

    let result = await dbQuery(TOGGLE_DONE, todoListId, todoId);
    return result.rowCount > 0;
  }

  // Deletes the specified todo in database using todo list ID and todo ID. 
  // Returns a Promise that resolves to 'true' on success, 'false' on failure
  // The id arguments must both be numeric.
  async deleteTodo(todoListId, todoId) {
    const DELETE_TODO = "DELETE FROM todos WHERE todolist_id = $1 and id = $2";

    let result = await dbQuery(DELETE_TODO, todoListId, todoId);
    return result.rowCount > 0;
  }

  // Delete a todo list and all its todos (handled by cascade) 
  // Returns a promise that resolves to 'true' on success, false if todo list
  // does not exist. The ID argument must be numeric
  async deleteTodoList(todoListId) {
    let DELETE_TODOLIST = "DELETE FROM todolists WHERE id = $1";

    let res = await dbQuery(DELETE_TODOLIST, todoListId);
    return res.rowCount > 0;
  }

  // Marks all todos in todoList as done. Returns 'true' on success
  // 'false' if the todo list doesn't exist. The todo list ID must be numeric
  async completeAllTodos(todoListId) {
    const COMPLETE_TODOS = "UPDATE todos SET done = TRUE " +
                           "WHERE todolist_id = $1 AND NOT done";

    let result = await dbQuery(COMPLETE_TODOS, todoListId);
    return result.rowCount > 0;
  }

  // Create a new todo in our database with the specified title 
  // Returns a promise that resolves to 'true' on sucess, 'false' on failure
  // todoListId must be numeric and title is string input
  async createTodo(todoListId, title) {
    const CREATE_TODO = "INSERT INTO todos (title, todolist_id) VALUES ($1, $2)";

    let result = await dbQuery(CREATE_TODO, title, todoListId);
    return result.rowCount > 0;
  }

  // Create a new todo list with the specified title and add it to the list of
  // todo lists. Returns 'true' on success, 'false' on failure. (At this time,
  // there are no known failure onditions.)
  createTodoList(title) {
    // if (this.existsTodoListTitle(title)) return false;

    // this._todoLists.push({
    //   id: nextId(),
    //   title,
    //   todos: [],
    // });

    // return true;
  }

  // Set the title for specified Todo List
  // Returns a promise that resolves to true on success, false if todo lsit isn't found
  // THe todo list ID must be numeric
  async setTodoListTitle(todoListId, title) {
    const UPDATE_TODOLIST_TITLE = "UPDATE todolists SET title = $1 WHERE id = $2";

    let res = await dbQuery(UPDATE_TODOLIST_TITLE, title, todoListId);

    return res.rowCount > 0;
  }

  // Returns a Promise that resolves to 'true' if a todo list with teh specified
  //  title exists in the list of todo lists. 'false' otherwise
  async existsTodoListTitle(title) {
    const FIND_TODOLIST = "SELECT null from todolists WHERE title = $1";

    let res = await dbQuery(FIND_TODOLIST, title);

    return res.rowCount > 0;
  }

  // Returns a new list of todo lists partitioned by completion status.
  _partitionTodoLists(todoLists) {
    let undone = [];
    let done = [];

    todoLists.forEach(todoList => {
      if (this.isDoneTodoList(todoList)) {
        done.push(todoList);
      } else {
        undone.push(todoList);
      }
    });

    return undone.concat(done);
  }
};