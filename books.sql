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

INSERT INTO books (title, author, synopsis, img_url, genre, retail_link)
VALUES ('Dune', 'Frank Herbert', 'A book about Paul Atredies. The Spice must flow.', 'https://i.imgur.com/J5LVHEL.jpg', 'sci-fi', 'https://www.amazon.com/Dune-Frank-Herbert-ebook/dp/B00B7NPRY8/ref=sr_1_1?dchild=1&keywords=dune&qid=1588093693&sr=8-1');

INSERT INTO books (title, author, synopsis, img_url, genre, retail_link)
VALUES ('Lilith: A Snake In The grass', 'Jack L. Chalker', 'Book one of the Four Lords of the Diamond.', 'https://i.imgur.com/J5LVHEL.jpg', 'sci-fi/fantasy', 'https://www.amazon.com/Lilith-Snake-Grass-Lords-Diamond-ebook/dp/B0057U12SM');

INSERT INTO books (title, author, synopsis, img_url, genre, retail_link)
VALUES ('The Dragonriders of Pern', 'Anne McCaffrey', 'Follows Lessa, an outcast, on her quest for revenge and salvation.', 'https://i.imgur.com/J5LVHEL.jpg', 'epic fantasy', 'https://www.amazon.com/Dragonriders-Pern-Dragonflight-Dragonquest-Dragon/dp/0345340248');