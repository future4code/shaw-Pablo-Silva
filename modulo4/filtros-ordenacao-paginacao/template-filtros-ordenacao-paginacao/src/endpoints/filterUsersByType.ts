import { Response, Request } from 'express'

import { connection } from "../data/connection"

export const getFilterUserByType = async (req: Request, res: Response): Promise<void> => {
    try {
        const result = await connection.raw(`
       SELECT * FROM aula48_exercicio WHERE type LIKE "%${req.params.type}%";
    `)

        if (!result.length) {
            res.status(401).send({ message: 'Erro ao buscar usuário' })
        }

        res.status(200).send(result[0])

    } catch (error) {
        console.log(error)
        res.send(error)
    }
}