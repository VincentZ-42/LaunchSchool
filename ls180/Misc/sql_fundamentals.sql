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
SELECT devices.name, count(part_number), string_agg(parts.part_number::text, ', ') from devices
JOIN parts ON devices.id = parts.device_id
GROUP BY devices.name;

-- Medium: Many to Many --


-- Medium: Subqueries and More --

