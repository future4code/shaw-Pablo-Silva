import app from "../app"
import { Request, Response } from 'express'
import connection from "../connection"



const updateUser = app.put('/user/edit/:id', async (req: Request, res: Response) => {
    try {
        const { name, nickname } = req.body

        if (!name || !nickname) {
            res.status(422).send({ message: 'Nome ou nickname faltando !' })
        }

        const Users = await connection('Users')
        const userExists = Users.find(item => item.name === name || item.nickname === nickname)
        if (userExists) {
            return res.status(409).send({ message: 'Nome ou nickname já existente !' })
        }

        await connection('Users')
            .update({ name, nickname })
            .where({ id: req.params.id })
        res.status(200).send({ message: 'Usuário editado com sucesso !' })

    } catch (error: any) {
        res.status(400).send(error.message)
    }
})

export default updateUser