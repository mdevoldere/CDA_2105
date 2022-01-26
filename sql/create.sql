CREATE TABLE toto 
(
    id int identity(1,1),
    name nvarchar(max) NOT NULL,
    gender ENUM('F', 'H', 'C', 'A'),
    hobbies SET('pêche', 'footing', 'couture')
);

insert into toto 
VALUES 
('', 'F', ('pêche', 'footing'))