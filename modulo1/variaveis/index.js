/* Questão 1
Console exibirá o resultado 5 e 10

Questão 2
Será impresso, três números 10 no console

Questão 3
let folhaDePonto = prompt("Quantas horas você trabalha por dia?")
let salarioDiaria = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${salarioDiaria/folhaDePonto} por hora`)

Esse programa faz um cálculo de quanto o "funcionário" recebe por hora trabalhada.
*/


let nome
let idade
console.log(typeof nome)
console.log(typeof idade) 
//Deu indefinido porque não foi atribuído um valor

nome = prompt("Digite seu nome")
idade = prompt("Digite sua idade")
// Mesmo que digite o nome e idade, não aparecerá nada no console, pois eu não mandei imprimir nada ainda (Console.log)

console.log("Olá",nome, "Você tem",idade, "anos")

const queEstiloMusicalGosta = "Rock"
const queJogoVcGosta = "Valorant"
const nomeDeBanda = "Raimundos"

console.log("Que estilo musical você gosta ?", queEstiloMusicalGosta)
console.log("Qual seu jogo favorito ?", queJogoVcGosta)
console.log("Qual sua banda favorita ?", nomeDeBanda)

let a, b, c 
a = 10
b = 25
c = a
a = b
b = c
console.log("O novo valor de A é", a)
console.log("O novo valor de b é", b)
