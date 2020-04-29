DROP TABLE IF EXISTS books;
DROP TABLE IF EXISTS recipes;

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