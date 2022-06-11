import app from '../app'
import { Request, Response } from 'express'
import connection from '../connection'


const getUserById = app.get('/user/:id', async (req: Request, res: Response) => {
    try {
        const idInvalid = await connection('Users')
        const users = idInvalid.find(item => item.id === req.params.id)

        if (!users) {
            return res.status(401).send({ message: 'Id inválido !' })
        }

        const result = await connection('Users')

            .select('*')
            .where({ id: req.params.id })

        res.status(200).send(result[0])

    } catch (error: any) {
        res.status(401).send({ message: 'Usuário não encontrado' })
    }
})

export default getUserById