

DROP TABLE IF EXISTS users;

CREATE TABLE users (
id SERIAL PRIMARY KEY,
username VARCHAR(255),
password VARCHAR(255),
image_url VARCHAR(255),
userid VARCHAR(255)
);

