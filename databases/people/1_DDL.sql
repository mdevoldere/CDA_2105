USE people;

CREATE TABLE jobs
(
    job_id INT IDENTITY(1,1) PRIMARY KEY,
    job_name VARCHAR(20),
    job_salary INT NOT NULL,
);

go 

CREATE TABLE employees
(
    id INT IDENTITY(1,1) PRIMARY KEY,
    lastname VARCHAR(50) NOT NULL,
    firstname VARCHAR(50) NULL,
    salary INT NOT NULL
);

go
