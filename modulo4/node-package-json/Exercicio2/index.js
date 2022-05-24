

/* Exercício 2*/

const operacao = process.argv[2]
const numberOne = Number(process.argv[3])
const numberTwo = Number(process.argv[4])


switch (operacao) {
    case "soma":
        console.log(numberOne + numberTwo)
        break;
    case "subtrair":
        console.log(numberOne - numberTwo)
        break;
    case "divisao":
        console.log(numberOne / numberTwo);
    case "multiplicaçao":
        console.log(numberOne * numberTwo);
        break;

    default:
        console.log('Operação errada')
}




