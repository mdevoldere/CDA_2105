USE people;

DROP TABLE employees;
go
DROP TABLE bonus;
go
DROP TABLE jobs;
go 

CREATE TABLE jobs
(
    job_id INT IDENTITY(1,1) PRIMARY KEY,
    job_name VARCHAR(20) NOT NULL,
    job_salary INT NOT NULL,
);

go 

CREATE TABLE employees
(
    id INT IDENTITY(1,1) PRIMARY KEY,
    lastname VARCHAR(50) NOT NULL,
    firstname VARCHAR(50) NULL,
    salary INT NOT NULL,
	job INT NOT NULL,
	manager_id INT NULL
);

go

CREATE TABLE bonus
(
	bonus_id INT IDENTITY PRIMARY KEY,
	bonus_amount INT NOT NULL,
	bonus_date DATE NOT NULL,
	employee_id INT
);

go

ALTER TABLE employees 
	-- ADD COLUMN job INT NOT NULL,
	ADD CONSTRAINT fk_employees FOREIGN KEY (job) REFERENCES jobs(job_id);

ALTER TABLE employees 
	-- ADD COLUMN job INT NOT NULL,
	ADD CONSTRAINT fk_employees2 FOREIGN KEY (manager_id) REFERENCES employees(id);

ALTER TABLE bonus 
	ADD FOREIGN KEY (employee_id) REFERENCES employees(id);

go