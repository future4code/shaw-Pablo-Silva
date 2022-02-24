/*Exercício 1

"Matheus Nachtergaele"
"Virginia Cavendish"
canal: "Globo", horario: "14h"

Exercício 2
nome: 'Juca', idade: 3, raca: 'SRD'
index.js:22 nome: 'Juba', idade: 3, raca: 'SRD'
index.js:23 nome: 'Jubo', idade: 3, raca: 'SRD'

A sintaxe dos três pontos faz um espalhamento ou seja, replica tudo que você pedir dentro de um objeto, podendo adicionar elementos e etc...

Exercício 3

Função vai retornar 'undefined' porque não tem valor nenhum atribuído a ele
E o objeto vai retornar 'false' porque só foi chamado o console log para o objeto "backender" e o objeto "altura" não existe. */

//Exercício 1

const nomeEapelido = {
    nomes: 'Pablo',
    apelidos: ['Debigol', ' bigbig', ' Bigorna'],
}
console.log(`Eu sou ${nomeEapelido.nomes}, mas podem me chamar de: ${nomeEapelido.apelidos}`)


const novosApelidos = {
    ...nomeEapelido,
    apelidos: ['Lindo', ' Feio', ' Carioca'],
}
console.log(`Eu sou ${novosApelidos.nomes}, mas podem me chamar de: ${novosApelidos.apelidos}`)

//Exercício 2

const pessoa = {
	nome: ' Pablo ',
    idade: 28, 
	profissao: ' Motorista',
}

function minhaFuncao(pessoa) {
  const resultado = []
  resultado.push(pessoa.nome)
  resultado.push(pessoa.nome.trim().length)
  resultado.push(pessoa.idade)
  resultado.push(pessoa.profissao) 
  resultado.push(pessoa.profissao.trim().length) 
  return resultado
}

console.log(minhaFuncao(pessoa))

//Exercicio 3

const carrinho = []
    const fruta1 = {Nome: 'Uva', disponibilidade: true}
    const fruta2 = {Nome: 'Macã', disponibilidade: true}
    const fruta3 = {Nome: 'Mamão', disponibilidade: true}

    function sacolao(comprasSacolao){
        carrinho.push(comprasSacolao)    

    }

sacolao(fruta1)
sacolao(fruta2)
sacolao(fruta3)

console.log(carrinho)














