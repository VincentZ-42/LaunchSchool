const express = require("express");
const morgan = require('morgan');
const app = express();
const PORT = 3000;

const COUNTRY_DATA = [
  {
    path: "/english",
    flag: "flag-of-United-States-of-America.png",
    alt: "US Flag",
    title: "Go to US English site",
  },
  {
    path: "/french",
    flag: "flag-of-France.png",
    alt: "Drapeau de la france",
    title: "Aller sur le site français",
  },
  {
    path: "/serbian",
    flag: "flag-of-Serbia.png",
    alt: "Застава Србије",
    title: "Идите на српски сајт",
  },
];

// Put this code immediately after the `COUNTRY_DATA` declaration.

const LANGUAGE_CODES = {
  english: "en-US",
  french: "fr-FR",
  serbian: "sr-Cryl-rs",
};

app.set("views", './views');
app.set('view engine', 'pug');

// This is middleware
// Function is called each time it recieved an HTTP request and returns...
//...the requested asset whenever the path includes 'public'
app.use(express.static("public"));
app.use(morgan("common"));

const writeLog = (req, res) => {
  let timeStamp = String(new Date()).substring(4, 24); // Mmm dd YYYY HH:MM:SS
  console.log(`${timeStamp} ${req.method} ${req.originalUrl} ${res.statusCode}`);
};

// Put the follow code just before the first `app.get()` call:

app.locals.currentPathClass = (path, currentPath) => {
  return path === currentPath ? "current" : "";
};

// default view and english view
app.get("/:language", (req, res, next) => {
  const language = req.params.language;
  const languageCode = LANGUAGE_CODES[language];
  if (!languageCode) {
    next(new Error(`Language not supported: ${language}`));
  } else {
    res.render(`hello-world-${language}`, {
      countries: COUNTRY_DATA,
      currentPath: req.path,
      language: languageCode,
    });
  }
});


// error handler
app.use((err, req, res, _next) => {
  console.log(err);
  res.status(404).send(err.message);
});

app.listen(PORT, 'localhost', () => {
	console.log(`Listening to port ${PORT}`);
});