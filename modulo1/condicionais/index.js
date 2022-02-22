/* Exercício 1
R: 
a: O código realiza teste pra saber se o número é par ou impar
b: Para números pares
c: Para números impares

Exercício 2
a: Para o usuário escolher a fruta que ele quer e verificar o preço
b: O preço da fruta, maçã, é 2.25 R$.
c: Vai ser informado que o preço da Pêra é 5 reais

Exercício 3
a: Está pedindo para o usuário digitar um número
b: Se digitar 10, vai exibir a mensagem "Esse número passou no teste" e se digitar -10 dará erro. 
c: Porque não foi atribuído
nenhuma função para a variável mensagem
*/

//Exercício 1


const suaIdade = Number(prompt('Digite sua idade:'))


if(suaIdade >= 18) {
    console.log('Você pode dirigir')

}else {
    console.log('Você não pode dirigir')
}


// Exercício 2

const turnoAluno = prompt('Digite o turno que você estuda: V - Vespertino M - Matutino e N - Noturno').toUpperCase()

if(turnoAluno === 'V'){
    console.log('Boa Tarde')    
}if(turnoAluno === 'M'){
    console.log('Bom Dia')
}if(turnoAluno === 'N'){
    console.log('Boa Noite')
}

//Exercício 3

let turnoAlunos = prompt('Digite o turno que você estuda: V - Vespertino M - Matutino e N - Noturno').trim().toUpperCase()

switch(turnoAlunos){
    case 'V':
    console.log('Boa tarde');
    break;

    case 'N':
    console.log('Boa Noite');
    break;   
        
    case 'M':
    console.log('Bom Dia');
    break;

}


//Exercício 4

const cinemaGenero = prompt('Digite o gênero do filme escolhido').trim().toUpperCase()
const precoCinema = Number(prompt('Qual valor do ingresso ?'))

if(cinemaGenero === 'FANTASIA' && precoCinema <= 15){
    console.log('Bom filme !');
}else{
    console.log('Escolha outro filme :(');
}

//Desafio 1

const cinemaGeneros = prompt('Digite o gênero do filme escolhido').trim().toUpperCase()
const precoCinemas = Number(prompt('Qual valor do ingresso ?'))
const escolhaLanche = prompt('Escolha seu lanche')

if(cinemaGeneros === 'FANTASIA' && precoCinemas <= 15){
    console.log('Bom filme !');
    console.log('E aproveite seu', escolhaLanche)
}else{
    console.log('Escolha outro filme :(');
}

