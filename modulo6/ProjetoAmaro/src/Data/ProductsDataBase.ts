import { BaseDatabase } from "./BaseDataBase";

export default class ProductsCreatedData extends BaseDatabase {
    protected TABLE_NAME = 'ProductsAmaro'

    insert = async (products: any) => {
        try {
            const response = await this.connection(this.TABLE_NAME)
                .insert(products)
            return response
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error('Erro')
            }

        }
    }

    findByNameProducts = async (name: string) => {
        try {
            const queryResult = await this.connection(this.TABLE_NAME)
                .select('*')
                .where('name', 'like', `%${name}%`)



            return queryResult
        } catch (error) {
            throw new Error()

        }
    }

    findByProducts = async (name: string) => {
        try {
            const queryResult = await this.connection(this.TABLE_NAME)
                .select()
                .where({ name })



            return queryResult[0]
        } catch (error) {
            throw new Error()

        }
    }

}
    




