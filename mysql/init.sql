CREATE DATABASE IF NOT EXISTS nodedb;
USE nodedb;
DROP TABLE IF EXISTS people;
CREATE TABLE people(id int NOT NULL AUTO_INCREMENT, name varchar(255), PRIMARY KEY (id));