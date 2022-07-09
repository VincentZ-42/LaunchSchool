-- Create Multiple Talbes

-- #1
-- Step 1
CREATE TABLE continents (
	id serial PRIMARY KEY,
	continent_name varchar(50)
);

-- Step 2
ALTER TABLE countries DROP contient;
ALTER TABLE countries ADD COLUMN contient_id int;
ALTER TABLE countries ADD FORIENG KEY (continent_id) REFERENCES contients (continent_id) ON DELETE CASCADE;

-- #2

-- Continent data
INSERT INTO continents (continent_name) VALUES 
	('Africa'), 
	('Asia'), 
	('Europe'), 
	('North America'), 
	('South America');

-- Country data
INSERT INTO countries (name, capital, population, continent_id) VALUES
	('Brazil', 'Brasillia', 208385000, 5),
	('Egypt', 'Cairo', 96308900, 1),
	('France', 'Paris', 67158000, 3),
	('Germany', 'Berlin', 82349400, 3),
	('Japan', 'Tokyo', 126672000, 2),
	('USA', 'Washington D.C.', 325365189, 4);

-- #3

-- Adding Foreign Key Constraint
ALTER TABLE singers ADD CONSTRAINT unique_id UNIQUE (id);

-- Create albums Table
CREATE TABLE albums (
	id serial PRIMARY KEY,
	album_name varchar(100),
	released date,
	genre varchar(100),
	label varchar(100),
	singer_id int REFERENCES singers (id)
);

INSERT INTO albums (album_name, genre, label, singer_id) VALUES
	('Born to Run', '1975-08-25', 'Rock and roll', 'Columbia', 1),
	('Purple Rain', '1984-06-25', 'Pop, R&B, Rock', 'Warner Bros', 6),
	('')

-- #4

CREATE TABLE customers (
	id serial PRIMARY KEY,
	customer_name varchar(100)
);

CREATE TABLE email_addresses (
	customer_id int PRIMARY KEY,
	customer_email varchar(50),
	FOREIGN KEY (customer_id)
		REFERENCES customers(id)
		ON DELETE CASCADE
);

INSERT INTO customers (name) VALUES ('Aaron Muller'), ('James Bergman'), ('Natasha O''Shea');

INSERT INTO email_addresses (customer_id, customer_email) VALUES
	(3, 'natasha@osheafamily.com'),
	(2, 'james1998@email.com');

-- #5

CREATE TABLE products (
	id serial PRIMARY KEY,
	name varchar(50),
	cost numeric(4,2) DEFAULT 0,
	type varchar(20),
	loyalty_points int
);

INSERT INTO products (name, cost, type, loyalty_points) VALUES
	('LS Burger', 3.00, 'Burger', 10),
	('LS Cheeseburger', 3.50, 'Burger', 15),
	...
	('Strawberry Shake', 2.00, 'Drink', 7);

--  #6
DROP TABLE orders;

CREATE TABLE orders (
	id serial PRIMARY KEY,
	customer_id int REFERENCES customers(id) ON DELETE CASCADE,
	order_status varchar(20)
);

INSERT INTO orders (customer_id, order_status) VALUES
(1, 'In Progress'),
(2, 'Placed'),
(2, 'Complete'),
(3, 'Placed');

CREATE TABLE order_items (
	id serial PRIMARY KEY,
	order_id int REFERENCES orders(id) ON DELETE CASCADE,
	product_id int REFERENCES products(id) ON DELETE CASCADE
);

INSERT INTO order_items (order_id, product_id) VALUES
(1, 3), (1, 5), (1, 6), (1, 8),
(2, 2), (2, 5), (2, 7),
(3, 4), (3, 2), (3, 5), (3, 5), (3, 6), (3, 10), (3, 9),
(4, 1), (4, 5);

-- SQL Joins Problems

-- 1
select countries.name, continent_name from countries 
INNER JOIN continents ON countries.continent_id = continents.id;

-- 2
SELECT countries.name, countries.capital FROM countries
INNER JOIN continents ON countries.continent_id = continents.id
WHERE continent_name LIKE 'Europe';

-- 3
SELECT DISTINCT s.first_name FROM singers AS s
INNER JOIN albums AS a ON a.singer_id = s.id
WHERE occupation ILIKE '%singer%' AND label LIKE 'Warner Bros';

-- 4
SELECT first_name, last_name, album_name, released
FROM singers AS s JOIN albums AS a ON a.singer_id = s.id
WHERE date_part('year', released) > 1979 
AND date_part('year', released) < 1990 
AND deceased = false
ORDER BY date_of_birth DESC;

-- 5
SELECT first_name, last_name from singers
LEFT JOIN albums ON singers.id = albums.singer_id
WHERE album_name IS NULL;

-- 6
SELECT first_name, last_name FROM singers WHERE id NOT IN (SELECT singer_id from albums);

-- 7
SELECT orders.*, products.* FROM order_items
JOIN orders ON orders.id = order_items.order_id
JOIN products ON products.id = order_items.product_id;

-- 8 n 9
SELECT DISTINCT c.customer_name AS "Customers who like Fries" FROM order_items AS oi
JOIN orders AS o ON o.id = oi.order_id
JOIN products AS p ON p.id = oi.product_id
JOIN customers AS c ON c.id = o.customer_id
WHERE p.product_name ILIKE '%Fries%';

-- 10
SELECT sum(product_cost) AS "Total Cost" FROM order_items AS oi
JOIN orders AS o ON o.id = oi.order_id
JOIN products AS p ON p.id = oi.product_id
JOIN customers AS c ON c.id = o.customer_id
WHERE customer_name ILIKE '%Natasha O''Shea';

-- 11
SELECT p.product_name, count(oi.id) FROM order_items AS oi
JOIN products AS p ON p.id = oi.product_id
GROUP BY product_name
ORDER BY product_name ASC;
