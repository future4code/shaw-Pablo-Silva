
// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:

function checarDesigualdade(a, b) {

    return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
}
console.log(checarDesigualdade(1, 3));

// b-)Compare a igualdade entre a===b

function checarIgualdade(a, b) {
    return `No comparador de igualdade ${a}===${b} é ${a === b}`

}
console.log(checarIgualdade(1, 3));

function verificaSeEMaior(a, b){
    return a > b
}
console.log(verificaSeEMaior(321, 2156));



// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
// exemplo 1 > 2 = false
// a-) 1 === '1' = false
// b-) 1 == '1' = true
// c-) 'a' === 'b' = false
// d-) 'b' > 'a' = true
// e-) 0 !== null = true


// CONDICIONAIS

// Exercício 3------------------------------------------------------------------------------------

const cadastro = () => {
    const usuario = []
    const nomeDoUsuario = prompt('Digite nome de usuário:')
    const anoDeNascimento = Number(prompt('Digite seu ano de nascimento:'))
    const senhaDoUsuario = prompt('Digite sua senha:')
    const nacionalidade = prompt('Digite sua nacionalidade:')
    usuario.push(nomeDoUsuario, anoDeNascimento, senhaDoUsuario, nacionalidade)
    if(2022 - anoDeNascimento > 18 && senhaDoUsuario.length >= 6 && nacionalidade === "Brasileira"){
        return 'Prossiga com seu cadastro'
        

    }else{
        return 'Você não atende aos requistos mínimos para se cadastrar'
    }


}


console.log(cadastro());

// Exercício 4-----------------------------------------------------------------------------------------------

const login = () => {
    const senha = "labenu"
    const digiteSenha = prompt('Digite sua senha')
    if(senha === digiteSenha){
        return 'Usuário logado'

    }else{
        return 'Senha inválida'

    }
}    
console.log(login());
 





// Exercício 5----------------------------------------------------------------------------------------------------

const primeiraDose = () => {
    const seuNome = prompt('Digite seu nome:')
    const vacinaTomada = prompt('Digite o nome da vacina que você tomou:').toLowerCase()
    let tempo = ''
    let data = ''
    if(vacinaTomada === 'Astrazenica' || vacinaTomada === 'Pfizer'){
        tempo = 90
        data = '12/06/2022'
    
    }else{
        tempo = 28
        data = '11/04/2022'       
    }
    
    return `Olá ${seuNome}! A próxima dose da ${vacinaTomada} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`

}

console.log(primeiraDose());


// LOOP+CONDICIONAL

// Exercício 6 -------------------------------------------------------------------------------------

const segundaDose = (nomeDoUsuario) => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "incompleta" },
        { nome: "Carlos", imunizacao: "incompleta" }    
    ]

    return { ...usuarios, nomeDoUsuario, imunizacao: "completa"}  


}
console.log(segundaDose("Barbara"));

// Exercício 7 --------------------------------------------------------------------------------------

const avisoAosAtrasados = () => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "completa" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    //  Sua lógica aqui

}
console.log(avisoAosAtrasados());


// DESAFIO------------------------------------------------------------------------------------------

const usuarios = [
    {
        nome: "Artur",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "pfizer",
        imunizacao: "incompleta"
    },
    {
        nome: "Bárbara",
        ano: 1984,
        nacionalidae: "brasileira",
        senha: "labenu",
        vacina: "astrazenica",
        imunizacao: "completa"
    },
    {
        nome: "Carlos",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "coronavac",
        imunizacao: "incompleta"
    }

]

const cadastroDesafio = () => {
    //  Sua lógica aqui
}
console.log(cadastroDesafio());

const loginDesafio = () => {
    //  Sua lógica aqui
}
console.log(loginDesafio());

const primeiraDoseDesafio = () => {
//  Sua lógica aqui
}
console.log(primeiraDoseDesafio())
const segundaDoseDesafio = (nomeDoUsuario) => {
    //  Sua lógica aqui
}
console.log(segundaDoseDesafio("ALGUM NOME AQUI"));

const avisoAosAtrasadosDesafio = () => {
    //  Sua lógica aqui
}
console.log(avisoAosAtrasadosDesafio());