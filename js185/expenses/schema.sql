CREATE TABLE expenses (
	id serial PRIMARY KEY,
	amount numeric(6,2) NOT NULL CHECK( amount::numeric > 0.0),
	memo text NOT NULL,
	created_on date NOT NULL
);