CREATE DATABASE studyroom;

\c products;

DROP TABLE IF EXISTS notes;

CREATE TABLE notes (
  note_id SERIAL
);

CREATE TABLE accounts (
  user_id SERIAL PRIMARY KEY,
  username VARCHAR ( 50 ) UNIQUE NOT NULL,
  password VARCHAR ( 50 ) UNIQUE NOT NULL,
  email VARCHAR ( 255 ) UNIQUE NOT NULL,
  created_on TIMESTAMP NOT NULL
)