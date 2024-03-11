-- Create booksweb_db

DROP DATABASE IF EXISTS booksweb_db;
CREATE DATABASE booksweb_db;

-- Create tables in db 
DROP TABLE IF EXISTS Books; 
CREATE TABLE Books (id SERIAL, title TEXT, summary TEXT);

DROP TABLE IF EXISTS Reviews; 
CREATE TABLE Reviews (id SERIAL, book_id INT, book_title TEXT, review TEXT);


-- Create rows in the books table
INSERT INTO Books (title, summary)
VALUES ('Anxious People', 'Viewing an apartment normally does not turn into a life-or-death situation, but this particular open house becomes just that when a failed bank robber bursts in and takes everyone in the apartment hostage.');

INSERT INTO Books (title, summary)
VALUES ('Nineteen Eighty Four', 'A society under the total control of a totalitarian regime, led by the omnipresent Big Brother.');

-- Create rows in the reviews table
INSERT INTO Reviews (book_id, book_title, review)
VALUES (1, 'Anxious People', 'An amazing read with some shocking twist. Would read again!');

INSERT INTO Reviews (book_id, book_title, review)
VALUES (2, 'Nineteen Eighty Four','Surprising ending.');