DROP TABLE IF EXISTS books;

CREATE TABLE books (
  id SERIAL,
  title VARCHAR(255),
  author VARCHAR(255),
  synopsis TEXT,
  img_url TEXT,
  genre VARCHAR(255),
  retail_link VARCHAR(255)
);

DROP TABLE IF EXISTS  movies;

CREATE TABLE movies (
  id SERIAL,
  title VARCHAR(255),
  overview VARCHAR(255),
  image_url TEXT,
  popularity VARCHAR(255),
  release_date VARCHAR(255),
  view_link VARCHAR(255)
);