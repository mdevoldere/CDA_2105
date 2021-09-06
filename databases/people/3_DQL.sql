
USE people;

SELECT job_id, job_name, job_salary FROM jobs;

SELECT job_id, job_name, job_salary FROM jobs WHERE job_salary >= 40000;

SELECT job_id, job_name, job_salary FROM jobs WHERE job_name LIKE '%R';

SELECT * FROM employees;

SELECT * FROM employees 
JOIN jobs ON employees.job = jobs.job_id;

SELECT * FROM bonus;

SELECT 
job_name AS 'Emploi', 
lastname, 
firstname, 
bonus_amount, 
bonus_date
FROM jobs 
LEFT JOIN employees ON jobs.job_id = employees.job  
LEFT JOIN bonus ON employees.id = bonus.employee_id;

SELECT * FROM 
employees E
RIGHT JOIN bonus B
ON E.id = B.employee_id;

GO 

-- DROP VIEW view_employees;

GO 

CREATE VIEW view_employees 
AS
SELECT 
E1.id, E1.lastname, E1.firstname, E1.salary,
E2.lastname as manager_lastname, E2.firstname as manager_firstname
FROM employees as E1
LEFT JOIN employees as E2
ON E1.manager_id = E2.id;

GO

SELECT * FROM view_employees 
INNER JOIN bonus ON view_employees.id = bonus.employee_id
WHERE id > 2 ORDER BY firstname DESC;


SELECT COUNT(*) as nb FROM employees WHERE lastname LIKE 'M%';

SELECT 
MIN(salary), 
MAX(salary), 
SUM(salary), 
AVG(salary), 
GETDATE() from employees;

SELECT DATEDIFF(day, '0001-06-01', '2021-08-05') as diff;

DECLARE @maDate DATE = 0001-06-01;

SELECT FORMAT(@maDate, 'D', 'fr-FR') as toto;

