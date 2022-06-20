/*Exercício 2*/

//a: Entradas e saídas são do tipo number

// function obterEstatisticas(numeros: number[]){

//     const numerosOrdenados = numeros.sort(
//         (a: number, b: number) => a - b
//     )

//     let soma = 0

//     for (let num of numeros) {
//         soma += num
//     }

//     const estatisticas = {
//         maior: numerosOrdenados[numeros.length - 1],
//         menor: numerosOrdenados[0],
//         media: soma / numeros.length
//     }

//     return estatisticas
// }

// b: 
// R: const numerosOrdenador > O método sort() ordena os 
// elementos do próprio array e retorna o array.

// let soma > É uma variável que muda no decorrer da execução do código.

// const estatisticas > É um objeto !

// c:

// R: 

// type amostraIdade = {
//     numeros: number[],
//     obterEstatisticas: (numeros: number[]) => void
// }

// const amostraDeIdades: amostraIdade = {
//     numeros: [21, 18, 65, 44, 15, 18],
//     obterEstatisticas: (numeros) => ({ ...numeros })
// }















