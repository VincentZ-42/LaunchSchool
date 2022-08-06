const express = require('express');

const app = express();
const PORT = 3000;

app.set('view engine', 'pug');

app.get('/', (req, res) => {
	res.render('index');
})

app.get('/account', (req, res) => {
	res.render('account', { money: '$230', recentTransaction: true });
});

app.listen(PORT, () => {
	console.log(`Listening on port: ${PORT}`);
});