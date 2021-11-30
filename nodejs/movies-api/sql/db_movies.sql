/* Supprimer la base de données db_movies si elle existe */
DROP DATABASE IF EXISTS db_movies;

/* Créer la base de données db_movies si elle n'existe pas */
CREATE DATABASE IF NOT EXISTS db_movies;

USE db_movies;

create table roles 
(
	role_id int AUTO_INCREMENT,
    role_name VARCHAR(100) NOT NULL,
    PRIMARY KEY (role_id)
);

create table people 
(
	person_id INT PRIMARY KEY AUTO_INCREMENT,
    person_lastname VARCHAR(100) NOT NULL,
    person_firstname VARCHAR(50) NOT NULL,
    person_gender CHAR(1) NOT NULL
);

CREATE TABLE subjects 
(
	subject_id INT PRIMARY KEY AUTO_INCREMENT,
    subject_name VARCHAR(64) NOT NULL
);

create table movies
(
	movie_id INT PRIMARY KEY AUTO_INCREMENT,
    movie_title VARCHAR(150) NOT NULL,
    movie_year SMALLINT NOT NULL,
    movie_length INT NOT NULL,
    movie_awards CHAR(3) NULL,
    movie_popularity TINYINT NOT NULL,
    subject_id INT NOT NULL,
    FOREIGN KEY (subject_id) REFERENCES subjects(subject_id)
);

create table movies_people
(
	movie_id INT,
    person_id INT,
    role_id INT,
    PRIMARY KEY (movie_id, person_id, role_id),
    FOREIGN KEY (movie_id) REFERENCES movies(movie_id),
    FOREIGN KEY (person_id) REFERENCES people(person_id),
    FOREIGN KEY (role_id) REFERENCES roles(role_id)
);




