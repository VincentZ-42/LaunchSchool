const { Client } = require('pg');
let client = new Client({ database: 'films' });

async function logQuery(queryText) {
  await client.connect();

  let data = await client.query(queryText);

  // console.log(data);

	// console.log(data.rows[0].title);

	// console.log(data.rows[1].duration);

	console.log(data.rows[2].count);

	client.end();
};

// logQuery('SELECT * FROM directors');

// Question One
// logQuery("SELECT * FROM films JOIN directors ON films.director_id = directors.id WHERE name = 'Sidney Lumet'");

// Q2
// logQuery("SELECT * FROM films WHERE duration BETWEEN 110 AND 115 ORDER BY duration DESC");

// Q3
logQuery("SELECT count(id) FROM films WHERE duration < 110 GROUP BY genre;");