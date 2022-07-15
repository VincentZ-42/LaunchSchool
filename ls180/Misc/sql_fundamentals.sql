-- Easy 1 --

-- Insert Date
INSERT INTO birds (name, age, species) VALUES
('Charlie', 3, 'Finch'),
('Allie', 5, 'Owl'),
('Jennifer', 3, 'Magpie'),
('Jamie', 4, 'Owl'),
('Roy', 8, 'Crow');

-- UPDATE DATA
UPDATE birds SET species = 'Raven' WHERE species = 'Crow';

-- ADD Constraint
ALTER TABLE birds ADD CONSTRAINT positive_age CHECK (age >  0);

-- DML, DDL, DCL --
1. 
DDL = Data Definition Language
	a. ALTER Table
	b. Add / DROP COLUMN
	c. CREATE
DML = Data Manipulate Language
	a. INSERT INTO
	b. SELECT 
	c. UPDATE
	d. DELETE

-- DDL --
-- 1. Create an Extrasolar Planetary Database
CREATE DATABASE extrasolar;

CREATE TABLE stars (
	id serial PRIMARY KEY,
	name varchar(25) UNIQUE NOT NULL,
	distance int NOT NULL CHECK (distance > 0),
	spectral_type char(1),
	companions int NOT NULL CHECK (companions >= 0)
);

CREATE TABLE planets (
	id serial PRIMARY KEY,
	designation char(1) UNIQUE,
	mass int
);
-- 2. Relating Stars and Planets
ALTER TABLE planets ADD COLUMN star_id int NOT NULL REFERENCES stars(id);

-- 3. Increase Star Name Length
ALTER TABLE stars ALTER COLUMN name TYPE varchar(50);

-- 4. Stellar Distance Precision
ALTER TABLE stars ALTER COLUMN distance TYPE numeric;

-- 5. Check Values in List
ALTER TABLE stars 
ADD CHECK (spectral_type IN ('O', 'B', 'A', 'F', 'G', 'K', 'M')),
ALTER COLUMN spectral_type SET NOT NULL;

-- 6. Enumerated Types
CREATE TYPE spectral_type_enum AS ENUM ('O', 'B', 'A', 'F', 'G', 'K', 'M');
ALTER TABLE stars 
ALTER COLUMN spectral_type TYPE spectral_type_enum USING spectral_type::spectral_type_enum,
ALTER COLUMN spectral_type SET NOT NULL;

-- 7. Planetary Mass Precision
ALTER TABLE planets 
ALTER COLUMN mass TYPE numeric,
ADD CHECK (mass > 0),
ALTER COLUMN mass SET NOT NULL;
ALTER COLUMN designation SET NOT NULL;

-- 8. Add a Semi-Major Axis Column
ALTER TABLE planets
ADD COLUMN semi_major_axis numeric NOT NULL;

-- 9. Add a Moons Table
CREATE TABLE moons (
	id serial PRIMARY KEY,
	designation int NOT NULL CHECK (designation > 0),
	semi_major_axis numeric CHECK (semi_major_axis > 0),
	mass numeric CHECK (mass > 0),
	planet_id int NOT NULL,
	FOREIGN KEY (planet_id)
		REFERENCES planets(id)
);

-- DML --

-- 1. Set Up Database
createdb workshop

CREATE TABLE devices (
	id serial PRIMARY KEY,
	name text NOT NULL,
	created_at timestamp DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE parts (
	id serial PRIMARY KEY,
	part_number int UNIQUE NOT NULL,
	device_id int REFERENCES devices(id) 
);

-- 2. Insert Data for Parts and Devices
INSERt INTO devices (name) VALUES ('Accelerometer'), ('Gyroscope');

INSERT INTO parts (part_number, device_id) VALUES
(11, 1), (12, 1), (13, 1),
(21, 2), (22, 2), (23, 2), (24, 2), (25, 2),
(31, NULL), (32, NULL);

-- 3. INNER JOIN
SELECT devices.name, parts.part_number from devices
JOIN parts ON devices.id = parts.device_id; 

-- 4. SELECT part_number
SELECT * from parts WHERE left(part_number::text, 1) = '3'; 


-- 5. Aggregate Functions
SELECT devices.name, count(part_number), string_agg(parts.part_number::text, ', ') AS "part_numbers" from devices
JOIN parts ON devices.id = parts.device_id
GROUP BY devices.name
ORDER BY devices.name DESC;

-- 6. IS NULL and IS NOT NULL
SELECT * from parts WHERE device_id IS NOT NULL;
SELECT * from parts where device_id IS NULL;

-- 7. Oldest Device
SELECT name from devices
ORDER BY created_at ASC LIMIT 1;

-- 8. UPDATE device_id
UPDATE parts SET device_id = 1 WHERE id IN (7, 8);

-- 9. Delete Accelerometer

-- Medium: Many to Many --

-- 1. Set Up Database
CREATE DATABASE billing

CREATE TABLE customers (
	id serial PRIMARY KEY,
	name text NOT NULL,
	payment_token char(8) NOT NULL UNIQUE CHECK (payment_token = upper(payment_token))
);

CREATE TABLE services (
	id serial PRIMARY KEY,
	description text NOT NULL,
	price numeric(10,2) NOT NULL CHECK (price >= 0.00)
);

CREATE TABLE customers_services (
	id serial PRIMARY KEY,
	customer_id int REFERENCES customers(id) ON DELETE CASCADE NOT NULL,
	service_id int REFERENCES services(id) NOT NULL,
	UNIQUE (customer_id, service_id)
);

INSERT INTO services (description, price) VALUES
('Unix Hosting', 5.95), 
('DNS', 4.95),
('Whois Registration', 1.95),
('High Bandwidth', 15.00),
('Business Support', 250.00),
('Dedicated Hosting', 50.00),
('Bulk Email', 250.00),
('One-to-one Training', 999.00);

INSERT INTO customers(name, payment_token) VALUES
('Pat Johnson', 'XHGOAHEQ'),
('Nancy Monreal', 'JKWQPJKL'),
('Lynn Blake', 'KLZXWEEE'),
('Chen Ke-Hua', 'KWETYCVX'),
('Scott Lakso', 'UUEAPQPS'),
('Jim Pornot', 'XKJEYAZA');

INSERT INTO customers_services (customer_id, service_id)
VALUES
(1, 1),
(1, 2), 
(1, 3), 
(3, 1), 
(3, 2), 
(3, 3), 
(3, 4), 
(3, 5), 
(4, 1), 
(4, 4), 
(5, 1), 
(5, 2), 
(5, 6), 
(6, 1), 
(6, 6), 
(6, 7);


-- 2. Get Customers With Services
SELECT DISTINCT c.* from customers_services AS cs
JOIN customers AS c ON cs.customer_id = c.id; 

-- 3. Get Customers With No Services
SELECT DISTINCT c.* from customers_services AS cs
RIGHT OUTER JOIN customers AS c ON cs.customer_id = c.id
WHERE service_id IS NULL;

SELECT * from customers WHERE id NOT IN (SELECT customer_id FROM customers_services);

SELECT c.*, s.* from customers_services AS cs
FULL JOIN customers AS c ON cs.customer_id = c.id
FULL JOIN services as s ON cs.service_id = s.id
WHERE customer_id IS NULL;

-- 4. Get Services With No Customers
SELECT description FROM services WHERE id NOT IN (SELECT service_id FROm customers_services);

SELECT description FROM services
LEFT JOIN customers_services ON service_id = services.id
WHERE service_id IS NULL;

-- 5. Services for each Customer
SELECT customers.name, string_agg(description, ', ') AS "services" from customers
LEFT JOIN customers_services ON customer_id = customers.id
LEFT JOIN services ON service_id = services.id
GROUP BY customers.id;

-- 6. Services With At Least 3 Customers
SELECT s.description, count(s.id) FROM services AS s
JOIN customers_services AS cs ON cs.service_id = s.id
GROUP BY s.id
HAVING count(s.id) >= 3
ORDER BY description;

-- 7. Total Gross Income
SELECT sum(price) AS "gross" from services
JOIN customers_services AS cs ON cs.service_id = services.id;

-- 8. Add New Customer
INSERT INTO customers (name, payment_token) VALUES ('John Doe', 'EYODHLCN');
INSERT INTO customers_services (customer_id, service_id) VALUES (7, 1), (7, 2), (7, 3);

-- 9. Hypothetically
SELECT sum(price) from services AS s
JOIN customers_services AS cs ON cs.service_id = s.id
WHERE price > 100.0;  

-- with cross join
SELECT SUM(price) from services
CROSS JOIN customers
WHERE price > 100;

--  with subqueries
SELECT count(customers.id) FROM customers; 
SELECT sum(price) from services WHERE price > 100;
SELECT (SELECT count(customers.id) FROM customers) * (SELECT sum(price) from services WHERE price > 100) AS "sum";

-- 10. Deleting Rows\
DELETE FROM customers_services WHERE service_id = 7;
DELETE FROM services WHERE description LIKE 'Bulk Email';
DELETE FROM customers WHERE name LIKE 'Chen Ke-Hua';

-- Medium: Subqueries and More --

