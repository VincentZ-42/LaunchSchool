-- 1
-- Need constraint to check for digits of year?
CREATE TABLE movies (
id serial PRIMARY KEY,
title text NOT NULL,
year int NOT NULL CHECK (length(year::text) = 4),
run_time int NOT NULL
);

-- 2
INSERT INTO movies (title, year, run_time) VALUES
('Gravity', 2013, 91),
('M*A*S*H', 1970, 116),
('My Fair Lady', 1964, 170),
('Ocean''s Eleven', 2001, 116),
('The Perfect Storm', 2000, 130),
('While You Were Sleeping', 1995, 103),
('2001: A Space Odyssey', 1968, 149);


-- 3
SELECT title AS "Movie Title", year AS "Realeased", run_time AS "Run Time" from movies
WHERE year < 2000
ORDER BY run_time DESC
LIMIT 3;

-- 4
CREATE TABLE actors (
	id serial PRIMARY Key,
	name text NOT NULL
);

INSERT INTO actors (name) VALUES 
('Abe Vigoda'),
('Audrey Hepburn'),
('Barbara Billingsley'),
('Elliot Gould'),
('George Clooney'),
('Sandra Bullock');

-- 5
CREATE TABLE actors_movies (
	id serial PRIMARY KEY,
	actor_id int NOT NULL REFERENCES actors(id) ON DELETE CASCADE,
	movie_id int NOT NULL REFERENCES movies(id) ON DELETE CASCADE,
	UNIQUE (actor_id, movie_id)
);

INSERT INTO actors_movies (movie_id, actor_id) VALUES
(4, 5), (4, 4),
(5, 5),
(2, 4),
(3, 2),
(1, 6), (1, 5),
(6, 6);

SELECT title, name FROM actors_movies AS am
JOIN actors ON actors.id = am.actor_id
FULL JOIN movies on movies.id = am.movie_id;

-- 6
SELECT name FROM actors_movies AS am
JOIN actors ON actors.id = am.actor_id
JOIN movies on movies.id = am.movie_id
WHERE title LIKE 'Gravity';


SELECT title FROM actors_movies AS am
JOIN actors ON actors.id = am.actor_id
JOIN movies on movies.id = am.movie_id
WHERE name LIKE 'George Clooney';

-- 7
SELECT name as "Actor", count(movie_id) AS "Number of Movies" FROM actors_movies AS am
JOIN actors ON actors.id = am.actor_id
JOIN movies on movies.id = am.movie_id
GROUP by actors.id
HAVING count(movie_id) >= 2;

-- 8
SELECT name as "Actor", 
count(movie_id) AS "Number of Movies", 
round(avg(run_time)) AS "Average Run Time" FROM actors_movies AS am
RIGHT JOIN actors ON actors.id = am.actor_id
LEFT JOIN movies on movies.id = am.movie_id
GROUP by actors.id
ORDER BY "Number of Movies" DESC, "Average Run Time" DESC;

-- 9
-- Actors not in any movies
SELECT name as "Actor" from actors WHERE id NOT IN (SELECT actor_id from actors_movies);

-- Movies with no actors
SELECT title as "Movie Title" from movies WHERE id NOT IN (SELECT movie_id from actors_movies);

-- 10
ALTER TABLE movies
ADD CHECK (year >= 1878);

INSERT INTO movies (title, year, run_time) VALUES ('hi', 1800, 90);

-- 11



-- 12


-- 13


-- 15


-- 16


-- 17


-- 18


-- 19


-- 20