CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(30),
  email VARCHAR(30)
);

INSERT INTO users (name, email) VALUES ('alex', 'beerwerd@gmail.com'), ('guest', 'some.user@gmail.com');
