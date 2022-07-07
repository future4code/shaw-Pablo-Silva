import User from "../Model/User";
import { BaseDataBase } from "./BaseDataBase";

export default class UserDate extends BaseDataBase {
    protected TABLE_NAME = 'labook_users'

    insert = async (user: User) => {
        try {
            await BaseDataBase
                .connection(this.TABLE_NAME)
                .insert(user)
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error('Erro')
            }

        }
    }

    findByEmail = async (email: string) => {
        try {
            const queryResult = await BaseDataBase
                .connection(this.TABLE_NAME)
                .select()
                .where({ email })
            return queryResult[0]
        } catch (error) {
            throw new Error()

        }
    }

    findByPassword = async (password: string) => {
        try {
            const queryResult = await BaseDataBase
                .connection(this.TABLE_NAME)
                .select()
                .where({ password })
            return queryResult[0]
        } catch (error) {
            throw new Error()
    
        }
    }
    
}

