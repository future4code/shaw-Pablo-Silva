import app from "../app";
import { Request, Response } from 'express'
import connection from "../connection";

const deleteUser = app.delete('/user/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params

        const idTask = await connection('Users')
        const idExists = idTask.find(item => item.id === id)

        if (!idExists) {
            return res.status(401).send({ message: 'Verificar se você passou o id corretamente !' })
        }

        await connection('Users')
            .delete()
            .where({ id })

        res.status(200).send({ message: 'Usuário excluído com sucesso !' })

    } catch (error: any) {
        res.send({ message: error.message })

    }
})

export default deleteUser