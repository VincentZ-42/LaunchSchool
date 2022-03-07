const HTTP = require('http');
const URL = require('url').URL;
const PORT = 3000;

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const SERVER = HTTP.createServer((req, res) => {
  let method = req.method;
  let path = req.url;
  const myURL = new URL(path, 'http://localhost:3000');
  let rolls = myURL.searchParams.get('rolls');
  let max = myURL.searchParams.get('sides');


  if (path === '/favicon.ico') {
    res.statusCode = 404;
    res.end();
  } else {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    for (let i = 0; i < rolls; i++) {
      res.write(`You're dice roll is..... ${getRandomInt(1, max)}\n`)
    }
    res.write(`${method} ${path}\n`);
    res.end();
  }
});

SERVER.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}...`);
});