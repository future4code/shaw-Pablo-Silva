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



 
