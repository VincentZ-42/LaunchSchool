const express = require("express");
const app = express();
const PORT = 3000;

app.set("views", './views');
app.set('view engine', 'pug');

// This is middleware
// Function is called each time it recieved an HTTP request and returns...
//...the requested asset whenever the path includes 'public'
app.use(express.static("public"));

const showEnglishView = (req, res) => {
	res.render("hello-world-english");
};

// default view and english view
app.get('/', showEnglishView);
app.get("/english", showEnglishView);

app.get("/french", (req, res) => {
  res.render("hello-world-french");
});

app.get("/serbian", (req, res) => {
  res.render("hello-world-serbian");
});

app.listen(PORT, 'localhost', () => {
	console.log(`Listening to port ${PORT}`);
});