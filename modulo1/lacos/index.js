/* Exercício 1
Console irá imprimir o valor 10 

Exercício 2
a: Vai imprimir somente os números a partir do número 19
b: For of pode ser usado também. Retiraria o if e dividiria pela quantidade de elementos.

Exercício 3
A quantidade de asteriscos que você digitou em loop e em quantidade de asteriscos

*/


//Exercício 1
let i = 0
let novoPet = []
let nomePet = []
let numPet = Number(prompt('Você tem algum pet ?'))
if(numPet === 0){
    console.log('Que pena ! Você pode adotar um pet!')
 }else{

 
 while (i < numPet) {
       nome = prompt('Digite o nome dos seus bichos')
       nomePet.push(nome)
       i++ 
 }

}

 console.log(nomePet)

 //Exercício 2

//a

const arrayOriginal = [20, 30, 50, 23, 29]
function exibirArray(array){
    for(let elemento of array){
       
        console.log(elemento)


    }         

}
exibirArray(arrayOriginal)

//b

function divisaoElementos(array){
    for(let elemento of array){
        console.log(elemento / 10)
    }

}
divisaoElementos(arrayOriginal)

//c

function numerosPares(array) {
    const numPares = []
    for(let elemento of array){
    if(elemento % 2 === 0){
        numPares.push(elemento)
        
    }   

   }
console.log(numPares)
}
    
numerosPares(arrayOriginal)


//d
function indices(array){
    const arrayIndice = []
    for(let i = 0; i < array.length; i++){
    const texto = `O elemento do índex ${i} é: ${array[i]}`
    arrayIndice.push(texto)

    }
console.log(arrayIndice)
}

indices(arrayOriginal)

//e

function valores(array){
let valorMaximo = 20
let valorMinimo = 55
for (const elemento of array){    
    if(elemento > valorMaximo){
                valorMaximo = elemento         
    }else if(elemento < valorMinimo){
        valorMinimo = elemento
    }
}
console.log(`O valor máximo é ${valorMinimo} e o menor é ${valorMaximo}`)
}

valores(arrayOriginal)


/*Poderia ser simplificado dessa forma
function formaSimples(array) {
    let min = Math.min(...array)
    let max = Math.max(...array)
    console.log(console.log(`O valor máximo é ${min} e o menor é ${max}`)

}

formaSimples(arrayOriginal)*/



 
