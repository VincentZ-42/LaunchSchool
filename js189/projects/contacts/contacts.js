const express = require("express"); // This is so we can use express for handling our routing
const morgan = require("morgan");   // This is for using mordule to help with logging
const { body, validationResult } = require("express-validator"); // Allows us to use the validation module
const session = require("express-session"); // generates session ID unique to client browser
const store = require("connect-loki");      // Uses session to persist data in noSQL database and store into file

const app = express();              // This is the object of our backend server
const PORT = 3000;                  // local environment to use as PORT
const LokiStore = store(session);   // uses the session in our store to persist data

const contactData = [
  {
    firstName: "Mike",
    lastName: "Jones",
    phoneNumber: "281-330-8004",
  },
  {
    firstName: "Jenny",
    lastName: "Keys",
    phoneNumber: "768-867-5309",
  },
  {
    firstName: "Max",
    lastName: "Entiger",
    phoneNumber: "214-748-3647",
  },
  {
    firstName: "Alicia",
    lastName: "Keys",
    phoneNumber: "515-489-4608",
  },
];

const sortContacts = contacts => {
  return contacts.slice().sort((contactA, contactB) => {
    if (contactA.lastName < contactB.lastName) {
      return -1;
    } else if (contactA.lastName > contactB.lastName) {
      return 1;
    } else if (contactA.firstName < contactB.firstName) {
      return -1;
    } else if (contactA.firstName > contactB.firstName) {
      return 1;
    } else {
      return 0;
    }
  });
};

const clone = object => {
  return JSON.parse(JSON.stringify(object));
};

app.set("views", "./views");                        // server knows where to look for views
app.set("view engine", "pug");                      // designates pug as our view template engine

app.use(express.static("public"));                  // Looks in our public folder for static files
app.use(express.urlencoded({ extended: false }));   // tells express to expect form data in URL-encoded format
                                                    // - Allows us to accept form data and use req.body
app.use(morgan("common"));                          // Uses common logging from morgan module

// Initializes store and allows our data to persist
app.use(session({
  cookie: {
    httpOnly: true,
    maxAge: 31 * 24 * 60 * 60* 1000, // 31 days in milliseconds
    path: "/",
    secure: false,
  },
  name: "launch-school-contacts-manager-session-id",
  resave: false,
  saveuninitialized: true,
  secret: "this is not very secure",
  store: new LokiStore({}),
}));

// Middleware that Checks if we have contact data in req.session and if not, initialize it
// Therefore, we are no longer referrencing contactData, we clone it and use unique data to session
app.use((req, res, next) => {
  if (!("contactData" in req.session)) {
    req.session.contactData = clone(contactData);
  }
  next();
});

app.get("/", (req, res) => {
  res.redirect("/contacts");
});

app.get("/contacts", (req, res) => {
  res.render("contacts", {
    contacts: sortContacts(req.session.contactData),
  });
});

app.get("/contacts/new", (req, res) => {
  res.render("new-contact");
});

const validateName = (name, whichName) => {
  return body(name)
  .trim()
  .isLength({ min: 1 })
  .withMessage(`${whichName} is required`)
  .bail()
  .isLength({ max: 25 })
  .withMessage(`${whichName} is too long. Maximum length is 25 characters.`)
  .isAlpha()
  .withMessage(`${whichName} contains invalid characters. THe name must be alphabetic.`);
};

app.post("/contacts/new",
  [
    // validates first name n last name
    validateName("firstName", "First"),
    validateName("lastName", "Last"),

    // validates phone number
    body("phoneNumber")
      .trim()
      .isLength({ min: 1 })
      .withMessage("Phone number is required")
      .bail()
      .matches(/\d\d\d-\d\d\d-\d\d\d\d$/)
      .withMessage("Invalid phone number format. Use ###-###-####"),
  ],
  // Checks all previous validation and renders form with error messages
  (req, res, next) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.render("new-contact", {
        errorMessages: errors.array().map(error => error.msg),
        fname: req.body.firstName,
        lname: req.body.lastName,
        pnumber: req.body.phoneNumber,
      });
    } else {
      next();
    }
  },
  // Saves data if no errors and returns to contacts page
  (req, res) => {
    // contactData.push({ ...req.body })
    // More common way of data extraction using spread syntax ^^^
    req.session.contactData.push({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phoneNumber: req.body.phoneNumber
    });
    res.redirect("/contacts");
  }
);

app.listen(PORT, "localhost", () => {
  console.log("Listening to port 3000.");
});