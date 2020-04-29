DROP TABLE IF EXISTS books;
DROP TABLE IF EXISTS recipes;
DROP TABLE IF EXISTS movies;

CREATE TABLE books (
  id SERIAL,
  title VARCHAR(255),
  author VARCHAR(255),
  synopsis TEXT,
  img_url TEXT,
  genre VARCHAR(255),
  retail_link VARCHAR(255)
);

CREATE TABLE recipes (
  id SERIAL,
  title VARCHAR(255),
  ingredients VARCHAR(255),
  calories TEXT,
  steps TEXT,
  image_url VARCHAR(255),
  healthLabels VARCHAR(255)
);

CREATE TABLE movies (
  id SERIAL,
  title VARCHAR(255),
  overview TEXT,
  image_url VARCHAR(255),
  popularity VARCHAR(255),
  release_date VARCHAR(255),
  view_link VARCHAR(255)
);