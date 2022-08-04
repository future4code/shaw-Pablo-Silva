import { app } from "./app";
import { GetPokemonByNameController } from "./Controller/GetPokemonController";

//Pesquisar pokemon por nome

const GetPokemon = new GetPokemonByNameController 


app.get('/pokemon', GetPokemon.getPokemonByName)