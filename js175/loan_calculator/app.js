const HTTP = require('http');
const URL = require('url').URL;
const PORT = 3000;
const APR = 0.05;
const MIR = APR / 12; // monthly interest rate

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
      <h1>Loan Calculator</h1>
      <table>
        <tbody>`;

const HTML_END = `
        </tbody>
      </table>
    </article>
  </body>
</html>`;

/*
m = monthly payment
p = loan amount
j = monthly interest = APR / 12
n = loan duration
*/
// let m = p * (MIR / (1 - Math.pow((1 + MIR), (-n))));

function getParams(path) {
	const myURL = new URL(path, `http://localhost:${PORT}`);
	return myURL.searchParams;
}

function getLoanDetails(params) {
	let amount = Number(params.get('amount'));
	let duration = Number(params.get('duration')); // years
	let monthlyPayment = amount * (MIR / (1 - Math.pow((1 + MIR), (-duration * 12))));
	let body = `<tr><th>Amount:</th><td><a href='/?amount=${amount-100}&duration=${duration}'>-$100</a> $${amount} <a href='/?amount=${amount+100}&duration=${duration}'>+$100</a></td></tr>
							<tr><th>Duration:</th><td><a href='/?amount=${amount}&duration=${duration-1}'>-1</a> ${duration} years <a href='/?amount=${amount}&duration=${duration+1}'>+1</a></td></tr>
							<tr><th>APR:</th><td>${APR*100}%</td></tr>
							<tr><th>Monthly payment:</th><td>$${monthlyPayment.toFixed(2)}</td></tr>`;
	return `${HTML_START}${body}${HTML_END}`;
}

const SERVER = HTTP.createServer((req, res) => {
  let method = req.method;
  let path = req.url;

  if (path === '/favicon.ico') {
    res.statusCode = 404;
    res.end();
  } else {
		let content = getLoanDetails(getParams(path));

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
		res.write(`${content}`);
    res.end();
  }
});

SERVER.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
})