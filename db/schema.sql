DROP DATABASE IF EXISTS locations_db;
CREATE DATABASE locations_db;

USE locations_db;

DROP DATABASE IF EXISTS user_db;
CREATE DATABASE user_db;

USE user_db;

CREATE TABLE locations (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    location_name VARCHAR(50) NOT NULL
);

CREATE TABLE reviews (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    location_id INT,
    review TEXT NOT NULL,
    FOREIGN KEY (location_id)
    REFERENCES locations(id)
    ON DELETE SET NULL
);

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(18) NOT NULL,
    FOREIGN KEY ()
)