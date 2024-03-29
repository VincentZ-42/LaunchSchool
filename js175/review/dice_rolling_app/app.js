const HTTP = require('http');
const URL = require('url').URL;
const PORT = 3000;

function dieRoll(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const SERVER = HTTP.createServer((req, res) => {
  let method = req.method;
  let path = req.url;
  let myURL = new URL(path, 'http://localhost');
  let params = myURL.searchParams;

  if (path === '/favicon.ico') {
    res.statusCode = 404;
    res.end();
  } else {
    let rolls = params.get('rolls');
    let sides = params.get('sides');  

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    for (let i = 0; i < rolls; i++) {
      const content = dieRoll(1, sides);
      res.write(`${content}\n`);
    }
    res.write(`${method} ${path}\n`);
    res.end();
  }
});

SERVER.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});

