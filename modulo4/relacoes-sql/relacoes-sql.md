#Exercício 1
#a: É uma chave que interliga informações de tabelas diferentes.

#b: 
INSERT INTO Rating (id, comment, rate, films_id) 
VALUES
(
	"002",
    "Muito bom uhuuuuul!",
     6,
	"003"
);

#c:
# R: Não é possível adicionar ou atualizar uma linha filha: estrangeira com id inválido.
INSERT INTO Rating (id, comment, rate, films_id) 
VALUES (
	"009",
    "Muito bom!",
     7,
	"009"
);

#d:
ALTER TABLE Films
DROP COLUMN avaliacao;

#e: 
#R: Deu sucesso !
DELETE FROM Rating WHERE id = "002";



#Exercício 2
CREATE TABLE MovieCast (
		films_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (films_id) REFERENCES Films(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

#a:
#R: Essa tabela indica os filmes que cada ator participou. 

#b:
INSERT INTO MovieCast (films_id, actor_id) 
VALUES (
	"004",
    "001"    
);

#films  002, 003, 004
#actor  003, 004, 005, 006, 002

#c: Não é possível adicionar ou atualizar uma linha filha: uma restrição de chave estrangeira inválida.
#Ou seja, não é possível atrelar um filme com um ator inexistente.

#d:
DELETE FROM Actor WHERE id = "004";
#Você não consegue deletar algo que está atrelado a outra coisa. o SQL pede para que seja deletado primeiro
#o ator do FILME para depois DELETAR o ator em questão.

#Exercício 3

#a:
#Operador ON relaciona uma tabela com a outra.

#b:
SELECT Films.id, titulo, rate FROM Films 
JOIN Rating ON Films.id = Rating.films_id;

SELECT * FROM Films;
SELECT * FROM Rating;
SELECT * FROM Actor;
SELECT * FROM MovieCast;