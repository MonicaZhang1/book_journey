-- Create booksweb_db

DROP DATABASE IF EXISTS booksweb_db;
CREATE DATABASE booksweb_db;

-- Create tables in db 
DROP TABLE IF EXISTS Books; 
CREATE TABLE Books (id SERIAL, title TEXT, author TEXT, url_link TEXT);

-- Create rows in the books table
INSERT INTO Books (title, author, url_link)
VALUES ('Anxious People', 'Fredrik Backman', 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F81%2BNiUsL3qL._AC_UF1000%2C1000_QL80_.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.com%2FAnxious-People-Novel-Fredrik-Backman%2Fdp%2F1501160834&docid=FAdEfukW1wFvbM&tbnid=Qq5Y0OS7dUaKgM&vet=12ahUKEwievLSruKKEAxVM38kDHSWJB4sQM3oECBAQAA..i&w=664&h=1000&ved=2ahUKEwievLSruKKEAxVM38kDHSWJB4sQM3oECBAQAA');