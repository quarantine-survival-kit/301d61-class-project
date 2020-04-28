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