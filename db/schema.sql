
DROP DATABASE IF EXISTS places_db;
create database places_db;

use places_db;

create table tripchoices (
 id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(30) NOT NULL,
ruralurban VARCHAR(30) NOT NULL,
terrain VARCHAR (30) NOT NULL,
people VARCHAR(30) NOT NULL, 
effort VARCHAR(30) NOT NULL,
expensive VARCHAR(30) NOT NULL,
latitude DECIMAL,
longitude DECIMAL,
PRIMARY KEY (id)
);
