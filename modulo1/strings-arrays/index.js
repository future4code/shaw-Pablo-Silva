 //Exercício 1
//let array
//console.log('a. ', array)
//R: a. indefinido porque não foi atribuido nenhum valor a variável

//array = null
//console.log('b. ', array)
//R: Nulo porque array ta com valor de nulo

//array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
//console.log('c. ', array.length)
//R: Vai mostrar a quantidade de itens que é 11 no total

//let i = 0
//console.log('d. ', array[i])
//R: variável i foi atribuido o valor de 0 na array, por isso vai pegar o valor 0 que é 3

//array[i+1] = 19
//console.log('e.', array)
//R: Adiciona o 19 dentro da lista justamente na posição +1 que era do 4, substituindo o mesmo e removendo o 4

//const valor = array[i+6]
//console.log('f. ', valor)
//R: O valor da variável valor é 9

//Exercício 2
//const frase = prompt("Digite uma frase")
//console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

//R: SUBI NUM ÔNIBUS EM MIRROCOS



//Escrita de código

//Exercício 1

let nameEmail = prompt("Digite seu usuário:")
let email = prompt("Digite seu e-mail:")
let resultado = nameEmail + email
console.log("O e-mail", email, "foi cadastrado com sucesso. Seja bem vindo(a)", nameEmail)

//Exercício 2

let comidasFavoritas = ["Strogonoff", "macarrão", "arroz", "feijão", "salpicão"]
console.log(comidasFavoritas)


let indiceComidas = comidasFavoritas[4]
console.log("Essas são minhas comidas preferidas:", comidasFavoritas)



let comidaEscolhida = prompt("Digita aqui sua comida favorita:")
comidasFavoritas.splice(1, 1, comidaEscolhida)
console.log(comidasFavoritas)

//Exercício 3

let listaDeTarefas = []
listaDeTarefas = [prompt("Digite sua primeira tarefa diária:"), 
prompt("Digite sua segunda tarefa diária:"), 
prompt("Digite sua terceira tarefa diária")]
console.log(listaDeTarefas)
let tarefaRealizada = prompt("Digite sua tarefa já concluída:")
listaDeTarefas.splice(tarefaRealizada, 1)
console.log(listaDeTarefas)






