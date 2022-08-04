import PokemonSearchData from "../Data/SearchPokemonData";


const GetPokemonSearchName = new PokemonSearchData()

export default class GetPokemonByNameBusiness {


    GetPokemonByNameBusiness = async (name: string) => {
        if (!name) {
            throw new Error('Favor colocar nome do pokemon' )
        }

        const PokemonDetail = await GetPokemonSearchName.findByNamePokemon(name)

        return PokemonDetail
    }



} 