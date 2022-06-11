import app from "../app";
import { Request, Response } from 'express'
import connection from "../connection";

const deleteTask = app.delete('/task/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params

        const idTask = await connection('Task')
        const idExists = idTask.find(item => item.id === id)

        if (!idExists) {
            return res.status(401).send({ message: 'Verificar se você passou o id corretamente !' })
        }
        await connection('Task')
            .delete()
            .where({ id })

        res.status(200).send({ message: 'Tarefa excluída com sucesso !' })

    } catch (error: any) {
        res.send({ message: error.message })

    }
})

export default deleteTask