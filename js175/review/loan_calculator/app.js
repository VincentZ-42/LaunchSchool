const HTTP = require('http');
const URL = require('url').URL;
const PORT = 3000;

const HTML_START = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Loan Calculator</title>
    <style type="text/css">
      body {
        background: rgba(250, 250, 250);
        font-family: sans-serif;
        color: rgb(50, 50, 50);
      }

      article {
        width: 100%;
        max-width: 40rem;
        margin: 0 auto;
        padding: 1rem 2rem;
      }

      h1 {
        font-size: 2.5rem;
        text-align: center;
      }

      table {
        font-size: 2rem;
      }

      th {
        text-align: right;
      }
    </style>
  </head>
  <body>
    <article>
      <h1>Loand Calculator</h1>
      <table>
        <tbody>`;
  
const HTML_END = `
        </tbody>
      </table>
    </article>
  </body>
</html>`;

function getParams(path) {
  const myURL = new URL(path, 'http://localhost:3000');
  return myURL.searchParams;
}

function findMonthlyPayment(amount, duration) {
  let months = duration * 12;
  let apr = 0.05 / 12;
  let payment = amount * (apr / (1 - Math.pow((1 + apr), (-months))));
  return payment.toFixed(2);
}

function createLoanOffer(params) {
  const APR = 5;
  const amount = Number(params.get('amount'));
  const duration = Number(params.get('duration'));
  const payment = findMonthlyPayment(amount, duration);
  const content = `<tr><th>Amount: </th>
                    <td>
                      <a href='/?amount=${amount - 100}&duration=${duration}'>-100</a>
                    </td>
                    <td>$${amount}</td>
                    <td>
                    <a href='/?amount=${amount + 100}&duration=${duration}'>+100</a>
                    </td>
                   <tr>
                   <tr><th>Duration: </th>
                    <td>
                      <a href='/?amount=${amount}&duration=${duration - 1}'>-1</a>
                    </td>
                    <td>${duration} years</td>
                    <td>
                    <a href='/?amount=${amount}&duration=${duration + 1}'>+1</a>
                    </td>
                   <tr>
                   <tr><th>APR:</th><td>${APR}%</td><tr>
                   <tr><th>Monthly payment:</th><td>$${payment}</td><tr>`;
  return `${HTML_START}${content}${HTML_END}`;
}

const SERVER = HTTP.createServer((req, res) => {
  let method = req.method;
  let path = req.url;
  let params = getParams(path);

  if (path === '/favicon.ico') {
    res.statusCode = 404;
    res.end();
  } else {
    res.statusCode = 200;
    let content = createLoanOffer(params);
    
    res.setHeader('Content-Type', 'text/html');
    res.write(`${content}\n`);
    res.end();
  }
})

SERVER.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
})