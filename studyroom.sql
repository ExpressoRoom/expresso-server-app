CREATE DATABASE studyroom;

\c products;

DROP TABLE IF EXISTS notes;

CREATE TABLE notes (
  note_id SERIAL
);