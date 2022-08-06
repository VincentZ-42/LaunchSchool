const express = require('express');

const app = express();
const PORT = 3000;

app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.static("public"));

app.get('/', (req, res) => {
	res.redirect('/english');
});

app.get('/english', (req, res) => {
	res.render('hello-world-english');
});

app.get('/french', (req, res) => {
	res.render('hello-world-french');
});

app.get('/serbian', (req, res) => {
	res.render('hello-world-serbian');
});

app.get('/chinese', (req, res) => {
	res.render('hello-world-chinese');
});

app.get('/japanese', (req, res) => {
	res.render('hello-world-japanese');
});

app.listen(PORT, "localhost", () => {
	console.log(`Listening on PORT: ${PORT}`);
});