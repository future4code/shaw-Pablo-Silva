#------------------------------------Aprofundamento SQL------------------------------------------------------------

#Exercício 1

#a: Apaga a coluna de salário dos atores (salary)

#b: Muda a coluna de gender para sex

#c: Muda a quantidade caracteres que pode ser recebido.alter

#d: 

ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
DESCRIBE Actor;



# Exercício 2

#a:
UPDATE Actor
SET name = "Tom Cruise",
birth_date = "1993-10-15"
WHERE id = "003";

#b: 
UPDATE Actor
SET name = "JULIANA PAES"
WHERE id = "005";

#c: 
UPDATE Actor
SET 
name = "Moacyr Franco",
birth_date = "2020-02-10",
salary = 600000,
gender = "male"
WHERE id = "005";

#d: Ele funciona, não dá erro, porém não realiza nenhuma alteração, pois não foi passado um ID válido por exemplo.

#Exercício 3
#a: 
DELETE FROM Actor WHERE id = "008";

#b: 
DELETE FROM Actor
WHERE gender = "male" AND salary > 1000000;

#Exercício 4

#a: 

SELECT MAX(salary) FROM Actor;

#b: 
SELECT MIN(salary) FROM Actor WHERE gender = "female";

#c:

SELECT COUNT(*) FROM Actor WHERE gender = "female";

#d: 
SELECT SUM(salary) FROM Actor;

#Exercício 5

#a:
#R: Conta a quantidade de pessoas do gênero masculino e feminino.

SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;

#b: 
SELECT id, name FROM Actor
ORDER BY name DESC;

#c: 
SELECT * FROM Actor
ORDER BY salary;

#d: 
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;

#e:
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;

#Exercício 6

#a:

ALTER TABLE Films ADD data_limite_filme DATE;

#b: 

ALTER TABLE Films CHANGE avaliacao avaliacao FLOAT;

#c:
UPDATE Films
SET	data_limite_filme = "2020-12-31"
WHERE id = "001";

UPDATE Films
SET	data_limite_filme = "2021-08-16"
WHERE id = "003";

#d: 
DELETE FROM Films WHERE id = "001";

UPDATE Films
SET	sinopse = "Olá, fui deletado !"
WHERE id = "001";
#R: 16:21:56	UPDATE Films SET sinopse = "Olá, fui deletado !" WHERE id = "001"	0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0	0.125 sec
#R: Não deu erro na execução, porém como não existe esse ID ele não alterou nada.

SELECT * FROM Films;
