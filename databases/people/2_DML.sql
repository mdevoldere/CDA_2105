USE people;


INSERT INTO jobs 
VALUES 
('Développeur', 30000),
('Graphiste', 35000),
('Chef de projet', 40000),
('Directeur', 75000);



INSERT INTO employees 
(lastname, firstname, salary, job, manager_id) 
VALUES 
('DEV', 'Mike', 100000, 4, NULL),
('GOLAY', 'Jerry', 38500, 3, 2),
('AFFRIT', 'Barack', 42000, 2, 3),
('MENTATION', 'Ali', 27800, 1, 2),
('PORÉE', 'Eva', 29500, 3, 3),
('COVER', 'Harry', 31400, 1, 4),
('DURE', 'Laure', 31400, 1, 1),
('NATEUR', 'Nordine', 47500, 2, 1),
('ATROVITE', 'Yves', 38000, 3, 1);


INSERT INTO bonus 
VALUES 
(1000, '2020-02-15', 2),
(200, '2020-02-15', 3),
(1500, '2020-09-29', 4),
(1200, '2021-01-02', 5),
(800, '2021-04-17', 7);