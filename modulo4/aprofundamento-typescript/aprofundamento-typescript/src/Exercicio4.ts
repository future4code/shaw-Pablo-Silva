/*Exercício 4*/

//b: 
//R: Iria configurar o package.js com os caminhos necessarios

//c:
//R: Não, pois no tsconfig, configuramos para justamente o arquivo TS estar nesta pasta (SRC)


type pokemon = {
	name: string,
    types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}
