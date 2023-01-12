const express = require("express");
const morgan = require("morgan");
const flash = require("express-flash");
const session = require("express-session");
const TodoList = require("./lib/todolist");
const Todo = require("./lib/todo");
const { sortTodoLists, sortTodos } = require("./lib/sort");
const { body, validationResult } = require("express-validator");
const { reset } = require("nodemon");
const { title } = require("process");

const app = express();
const host = "localhost";
const port = 3000;

// Static data for inital testing
let todoLists = require("./lib/seed-data");
const { default: nodeTest } = require("node:test");

app.set("views", "./views");
app.set("view engine", "pug");

app.use(morgan("common"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
// Below is for us to create sessions that persists our session
app.use(session({
  name: "launch-school-todos-ession-id",
  resave: false,
  saveUninitialized: true,
  secret: "this is not very secure",
}));

app.use(flash()); // used for displaying error flash messages

app.use((req, res, next) => {
  res.locals.flash = req.session.flash;
  delete req.session.flash;
  next();
});

//Find a todo list with the indicated ID. Returns 'undefined' if not found
// Note that 'todoListId' must be numeric
const loadTodoList = todoListId => {
  return todoLists.find(todoList => todoList.id === todoListId);
}

// FInd a todo with the indicated ID in the indicated todo list.
// Returns 'undefined' ifn ot found. Note that both 'todoListId'
// and 'todoId must be numeric.
const loadTodo = (todoListId, todoId) => {
  let todoList = loadTodoList(todoListId);
  if (!todoList) return undefined;

  return todoList.todos.find(todo => todo.id === todoId); 
};

// Redirect start page
app.get("/", (req, res) => {
  res.redirect("/lists");
});

// Renders the list of todo Lists
app.get("/lists", (req, res) => {
  res.render("lists", {
    todoLists: sortTodoLists(todoLists),
  });
});

app.get("/lists/new", (req, res) => {
  res.render("new-list");
});

// Create a new todo List
app.post("/lists", 
  [
    body("todoListTitle")
      .trim()
      .isLength({ min: 1})
      .withMessage("This list title is required.")
      .isLength({ max: 100 })
      .withMessage("List title must be between 1 and 100 characters.")
      .custom(title => {
        let duplicate = todoLists.find(list => list.title === title);
        return duplicate === undefined;
      })
      .withMessage("List title must be unique"),
  ],
  (req, res) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      errors.array().forEach(message => req.flash("error", message.msg));
      res.render("new-list", {
        flash:req.flash(),
        todoListTitle: req.body.todoListTitle,
      });
    } else {
      todoLists.push(new TodoList(req.body.todoListTitle));
      req.flash("success", "The todo list as been created.");
      res.redirect("/lists");
    }
});

// Render Individual todo list and its todos
app.get("/lists/:todoListId", (req, res, next) => {
  let todoListId = req.params.todoListId;
  let todoList = loadTodoList(+todoListId);
  if (todoList === undefined) {
    next(new Error("Not found."));
  } else {
    res.render("list", {
      todoList: todoList,
      todos: sortTodos(todoList),
    });
  }
});

// Toggle todo completion status
app.post("/lists/:todoListId/todos/:todoId/toggle", (req, res, next) => {
  let { todoListId, todoId } = { ...req.params };
  let todo = loadTodo(+todoListId, +todoId);
  if (!todo) {
    next(new Error("todo not found\n"));
  } else {
    let title = todo.title;
    if (todo.isDone()) {
      todo.markUndone();
      req.flash("success", `"${title}" marked as NOT done!`);
    } else {
      todo.markDone();
      req.flash("success", `"${title}" marked done.`);
    }
  }
  res.redirect(`/lists/${todoListId}`);
});

// Deleting a Todo
app.post("/lists/:todoListId/todos/:todoId/destroy", (req, res, next) => {
  let { todoListId, todoId } = { ...req.params };
  let todo = loadTodo(+todoListId, +todoId);
  let todoList = loadTodoList(+todoListId);
  if (!todo || !todoList) {
    next(new Error("todo not found\n"));
  } else {
    let index = todoList.findIndexOf(todo);
    let title = todo.title;
    todoList.removeAt(index);
    req.flash("success", `${title} has been deleted!`);
  }
  res.redirect(`/lists/${todoListId}`);
});

// Mark All Todos as Done
app.post("/lists/:todoListId/complete_all", (req, res, next) => {
  let todoListId = req.params.todoListId;
  let todoList = loadTodoList(+todoListId);
  if (!todoList) {
    next(new Error("List not found.\n"));
  } else {
    todoList.markAllDone();
    req.flash("success", "All has been completed. Job Done!");
    res.redirect(`/lists/${todoListId}`);
  }
});

// Create a new Todo
app.post("/lists/:todoListId/todos", 
[
  body("todoTitle")
  .trim()
  .isLength({ min: 1})
  .withMessage("This list title is required.")
  .isLength({ max: 100 })
  .withMessage("List title must be between 1 and 100 characters."),
],
(req, res, next) => {
  let errors = validationResult(req);
  let todoListId = req.params.todoListId;
  let todoList = loadTodoList(+todoListId);
  if (!todoList) {
    next(new Error("Not found.\n"));
  }
  if (!errors.isEmpty()) {
    errors.array().forEach(message => req.flash("error", message.msg));
    res.render("list", {
      flash: req.flash(),
      todoList: todoList,
      todos: sortTodos(todoList),
      todoTitle: req.body.todoTitle,
    });
  } else {
    todoList.add(new Todo(req.body.todoTitle));
    req.flash("success", `${req.body.todoTitle} as been created.`);
    res.redirect(`/lists/${todoListId}`);
  }
});

// Render edit todo list form
app.get("/lists/:todoListId/edit", (req, res, next) => {
  let todoListId = req.params.todoListId;
  let todoList = loadTodoList(+todoListId);
  if (!todoList) {
    next(new Error("TodoList not found.\n"));
  } else {
    res.render("edit-list", { todoList });
  }
});

// Error handler
app.use((err, req, res, _next) => {
  console.log(err);
  res.status(404).send(err.message);
});

// Listener
app.listen(port, host, () => {
  console.log(`Todos is listening on port ${port} of ${host}`);
});