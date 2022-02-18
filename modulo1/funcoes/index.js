/* Exercício 1

R: 
a: O que será impresso no console é a resposta 10 e 5 porque multiplicou esses valores
b: Não mostraria nada, porque não foi invocado o console.log para mostrar o resultado no console

Exercício 2

R:
a: Vai me retornar true se o usuário digitar a palavra cenoura ou false se o usuário digitar qualquer outra coisa

b: i= true
   ii= true
   iii= true
Porque tudo que contém cenoura irá dar true = verdadeiro
*/

//Exercício 1

//a
let nome = "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
nome = nome.replaceAll("Caio", "Pablo")
nome = nome.replaceAll("São Paulo", "Rio de Janeiro")
nome = nome.replaceAll("sou estudante", "não sou estudante")
console.log(nome)

//b
function frase(nome, idade, endereco, profissao){
    let fraseComplete = "Eu sou " + nome + ", tenho " + idade + " anos, moro em " + endereco + " e sou " + profissao        
    return fraseComplete
}        
console.log(frase("Pablo", 28, "Nova Iguaçu", "motorista"));

// Exercício 2

//a
function soma(n1, n2){
    return n1 + n2
    
}
let result = soma(1, 8)
console.log(result)


function twoNumbers(num1, num2){
    return num1 >= num2
}

let numbersResult =  twoNumbers(10, 10)
console.log(numbersResult);

//b
function parOuImpar(num1){
    return num1 % 2 === 0
}
console.log(parOuImpar(2));

//c
function frase1(frase){
    let tamanhoFrase = frase.length
    return frase.toUpperCase() + ", O tamanho dessa frase é: " + tamanhoFrase

}

console.log(frase1("Olá Diego da rua do posto"));

// Exercício 3

   
    const somar = (n1, n2) => {return(n1 + n2)}
    const subtracao = (n1, n2) => {return(n1 - n2)}
    const multiplicacao = (n1, n2) => {return(n1 * n2)}
    const dividir = (n1, n2) => {return(n1 / n2)}

    let n1 = Number(prompt("Digite um número"))
    let n2 = Number(prompt("Digite outro número"))

    console.log(`Os números inseridos foram: ${n1} e ${n2}`)
    console.log(`Soma: ${somar(n1, n2)}`)
    console.log(`Diferença: ${subtracao(n1, n2)}`)
    console.log(`Multiplicacao: ${multiplicacao(n1, n2)}`)
    console.log(`Divisão: ${dividir(n1, n2)}`)

    
    

        


    

    


















