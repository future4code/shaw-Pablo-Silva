Exercício 1

a) Qual a sua opinião em relação a usar strings para representar os ids? Você concorda que seja melhor do que usar números?

R: Sim, é melhor usar strings para id porque além de ser único universal, ele tem maior facilidade na hora de migrar os dados para outro banco. E ele também pode usar números e letras juntos.

Exercício 2

a) Explique o código acima com as suas palavras.

R: O código está se conectando ao banco de dados através do Knex e a função createUser é uma função que insere novos usuários dentro do banco de dados.

b)

CREATE TABLE User (
		id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

Exercício 3

a) As string avisa ao typescript que vai receber uma string. Para ele parar de reclamar.