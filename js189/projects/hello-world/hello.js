const express = require('express');
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
  {
    path: "/chinese",
    flag: "flag-of-China.png",
    alt: "中国国旗",
    title: "去中国网站",
  },
  {
    path: "/japanese",
    flag: "flag-of-Japan.png",
    alt: "日本の国旗",
    title: "日本のサイトへ",
  },
];

const LANGUAGE_CODES = {
  english: "en-US",
  french: "fr-FR",
  serbian: "sr-Cryl-rs",
  chinese: "zh-CN",
  japanese: "ja-JP",
};

app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.static("public"));
app.use(morgan("common"));

app.locals.currentPathClass = (path, currentPath) => {
  return path === currentPath ? "current" : "";
};

app.get('/', (req, res) => {
  res.redirect('/english');
});

app.get('/:language', (req, res, next) => {
  const language = req.params.language;
  const languageCode = LANGUAGE_CODES[language];

  if (!languageCode) {
    next(new Error(`Language not supported: ${language}`));
  } else {
    res.render(`hello-world-${language}`, {
      currentPath: req.path,
      countries: COUNTRY_DATA,
      language: LANGUAGE_CODES[language],
    });
  }
});

app.use((err, req, res, _next) => {
  console.log(err);
  res.status(404).send(err.message);
});

app.listen(PORT, "localhost", () => {
  console.log(`Listening on PORT: ${PORT}`);
});