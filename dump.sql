// Database creation querries

CREATE DATABASE products;

CREATE TABLE products (
	ID SERIAL PRIMARY KEY,
  	name TEXT NOT NULL,
  	description TEXT NOT NULL,
  	value INTEGER NOT NULL,
  	available BOOLEAN NOT NULL
);

INSERT INTO products  (name, description, value, available)
VALUES
('Arroz', 'Alimento', 30000, true),
('Creme Dental', 'Higiene Pessoal', 3500, false);