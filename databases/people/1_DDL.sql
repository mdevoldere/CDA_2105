USE people;
DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS jobs;

CREATE TABLE jobs
(
    job_id INT IDENTITY(1,1) PRIMARY KEY
    job_name VARCHAR(10),
    job_salary INT NOT NULL,
);

CREATE TABLE employees
(
    id INT IDENTITY(1,1) PRIMARY KEY,
    lastname VARCHAR(50) NOT NULL,
    firstname VARCHAR(50) NULL,
    salary INT NOT NULL
);

