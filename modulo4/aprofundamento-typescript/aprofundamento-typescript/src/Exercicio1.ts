/*Exercício 1*/

/*a: 
const minhaString: string = 20 
 
 R: O tipo number não pode ser atribuído a uma variável do tipo string 
 */

/*b: 
R: const meuNumero: number | string = 'Olá'
Usar o operador de comperação OU ( | )
*/

//c: 
const person: { name: string, age: number, colorFavorite: string } = {
  name: 'Pablo',
  age: 28,
  colorFavorite: 'Preto'
}

enum ColorFavorite {
  vermelho = 'Vermelho',
  laranja = 'Laranja',
  amarelo = 'Amarelo',
  verde = 'Verde',
  azul = 'Azul',
  anil = 'Anil',
  violeta = 'Violeta'

}

type Person = {
  name: string,
  age: number,
  colorFavorite: string
}

const personOne: Person = {
  name: 'Pablo',
  age: 28,
  colorFavorite: ColorFavorite.azul
}

const personTwo: Person = {
  name: 'Juju',
  age: 30,
  colorFavorite: ColorFavorite.amarelo
}

const personThree: Person = {
  name: 'Juca',
  age: 31,
  colorFavorite: ColorFavorite.verde
}

console.table(personThree)















