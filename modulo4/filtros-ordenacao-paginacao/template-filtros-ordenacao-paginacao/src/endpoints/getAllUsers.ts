import { Response, Request } from 'express'

import { connection } from "../data/connection"

async function selectAllUsers(): Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio;
    `)

    return result[0]
}


export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await selectAllUsers()

        if (!users.length) {
            res.status(401).send({ message: 'Erro ao buscar usuário' })
        }

        res.status(200).send(users)

    } catch (error) {
        console.log(error)
        res.send(error)
    }
}