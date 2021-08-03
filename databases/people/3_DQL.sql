
USE people;


SELECT job_id, job_name, job_salary FROM jobs;

SELECT job_id, job_name, job_salary 
FROM jobs
WHERE job_salary >= 40000;


SELECT job_id, job_name, job_salary 
FROM jobs
WHERE job_name LIKE '%R';


SELECT * FROM employees;


SELECT * 
FROM employees 
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


SELECT * 
FROM employees as E1
RIGHT JOIN employees as E2
ON E1.manager_id = E2.id;