import { BaseDatabase } from "./BaseDataBase";

export default class PokemonSearchData extends BaseDatabase {
    protected TABLE_NAME = 'PokemoGo'

    findByNamePokemon = async (name: string) => {
        try {
            const queryResult = await this.connection(this.TABLE_NAME)
                .select('*')
                .where('name', 'like', `%${name}%`)



            return queryResult
        } catch (error) {
            throw new Error()

        }
    }

}
