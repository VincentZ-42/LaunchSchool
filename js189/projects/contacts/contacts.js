const express = require("express"); // This is so we can use express for handling our routing
const morgan = require("morgan");   // This is for using mordule to help with logging
const app = express();              // This is the object of our backend server
const PORT = 3000;                  // local environment to use as PORT

let contactData = [
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

app.set("views", "./views");                        // server knows where to look for views
app.set("view engine", "pug");                      // designates pug as our view template engine

app.use(express.static("public"));                  // Looks in our public folder for static files
app.use(express.urlencoded({ extended: false }));   // tells express to expect form data in URL-encoded format
                                                    // - Allows us to accept form data and use req.body
app.use(morgan("common"));                          // Uses common logging from morgan module

app.get("/", (req, res) => {
  res.redirect("/contacts");
});

app.get("/contacts", (req, res) => {
  res.render("contacts", {
    contacts: sortContacts(contactData),
  });
});

app.get("/contacts/new", (req, res) => {
  res.render("new-contact");
});

const isAlphabetic = text => /^[a-z]+$/i.test(text);

app.post("/contacts/new",
  // middleware thaat initates array to hold errors in res.locals (data passed between middleware)
  (req, res, next) => {
    res.locals.errorMessages = [];
    next();
  },
  // middleware to trim all whitespaces from inputs
  (req, res, next) => { // trim whitespace
    res.locals.firstName   = req.body.firstName.trim();
    res.locals.lastName    = req.body.lastName.trim();
    res.locals.phoneNumber = req.body.phoneNumber.trim();
    next();
  },
  // Validates first name
  (req, res, next) => {
    let firstName = res.locals.firstName;
    if (firstName.length === 0) {
      res.locals.errorMessages.push("First name is required.");
    } else if (firstName.length > 25) {
      res.locals.errorMessages.push("First name is too long. Maximum length is 25 characters.");
    } else if (!isAlphabetic(firstName)) {
      res.locals.errorMessages.push("First name contains invalid characters. The name must be alphabetic.");
    }
    next();
  },
  // Valdiates last name
  (req, res, next) => {
    let lastName = res.locals.lastName;
    if (lastName.length === 0) {
      res.locals.errorMessages.push("Last name is required.");
    } else if (lastName.length > 25) {
      res.locals.errorMessages.push("Last name is too long. Maximum length is 25 characters.");
    } else if (!isAlphabetic(lastName)) {
      res.locals.errorMessages.push("Last name contains invalid characters. The name must be alphabetic.");
    }
    next();
  },
  // Validates phone number
  (req, res, next) => {
    if (req.body.phoneNumber.length === 0) {
      res.locals.errorMessages.push("Phone Number is required.");
    } else if (!/^\d\d\d-\d\d\d-\d\d\d\d$/.test(req.body.phoneNumber)) {
      res.locals.errorMessages.push("Invalid phone number format. Use ###-###-####");
    }
    next();
  },
  // middleware that checks for duplicates
  (req, res, next) => {
    let fullName = `${res.locals.firstName} ${res.locals.lastName}`;
    let foundContact = contactData.find(contact => {
      return `${contact.firstName} ${contact.lastName}` === fullName;
    });

    if (foundContact) {
      res.locals.errorMessages.push(`${fullName} is already on your contact list. Duplicates are not allowed.`);
    }

    next();
  },
  // Checks all previous validation and renders form with error messages
  (req, res, next) => {
    if (res.locals.errorMessages.length > 0) {
      res.render("new-contact", {
        errorMessages: res.locals.errorMessages,
      });
    } else {
      next();
    }
  },
  // Saves data if no errors and returns to contacts page
  (req, res) => {
    // contactData.push({ ...req.body })
    // More common way of data extraction using spread syntax ^^^
    contactData.push({
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