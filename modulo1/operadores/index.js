/* Exercício de interpretação 1

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)
R: O resultado será false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado)
R: Será false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)
R:  Vai dar erro de referência

console.log("d. ", typeof resultado)
R: Retornará uma string com a palavra "Undefined" ou seja, indefinido

Exercício 2

O navegador pedirá para inserir 2 números, como não falamos pro computador
que queremos somar números, ele apenas exibirá uma string com o número que colocamos, porém sem fazer a soma
para realizar a soma, temos que colocar o código Number antes de prompt dentro de parenteses para o computador
reconhecer que você quer somar número

Exercício 3

let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))
const soma = primeiroNumero + segundoNumero

console.log(soma) */

//Questão 1//

const idade = Number(prompt("Qual sua idade ?"))
const idadeAmigo = Number(prompt("Qual idade do seu amigo ?"))
let reposta = idade >= idadeAmigo
let diferença = idade - idadeAmigo
console.log("Sua idade é maior do que seu amigo ?", reposta)
console.log("Sua diferença de idade é de :", diferença)


//Questão 2//

const npar = Number(prompt("Insira um número par:"))
const numero = 2
let divisao = npar % numero
console.log("Sua divisão é:", divisao)

//Número par com % não existe resto, a resposta sempre dará zero (true) e quando coloco ímpar, retorna 1 (false)//

//Exercício 3//
let year = Number(prompt("Digite sua idade para calcular seu mês, dias e horas:"))
let meses = year * 12
let dias = year * 365
let horas = year * 365 * 24
console.log("Meses:", meses)
console.log("Dias", dias)
console.log("Horas", horas)

//Exercício 4

const digiteNumero = Number(prompt("Digite um número"))
const digiteNumeroDois = Number(prompt("Digite um outro número"))
const maiorOuMenor = digiteNumero > digiteNumeroDois
const numeroIgualOu = digiteNumero === digiteNumeroDois
const divisivelOutro = digiteNumero % digiteNumeroDois ===0 
const divisivelOutroDois = digiteNumeroDois % digiteNumero ===0

console.log("O primeiro numero é maior que segundo?", maiorOuMenor)
console.log("O primeiro numero é igual ao segundo?", numeroIgualOu)
console.log("O primeiro numero é divisível pelo segundo?", divisivelOutro)
console.log("O segundo numero é divisível pelo primeiro?", divisivelOutroDois)
