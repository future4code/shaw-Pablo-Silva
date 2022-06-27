import app from "../app"
import { Request, Response } from 'express'
import moment from "moment"
import { v4 as uuidv4 } from 'uuid'
import connection from "../connection"

const createTask = app.post('/task', async (req: Request, res: Response) => {
    try {

        const { title, description, limitDate, createrUserId } = req.body

        if (!title || !description || !limitDate || !createrUserId) {
            return res.status(401).send({ message: 'Campos faltando !' })
        }

        const dateDiff: number = moment(limitDate, 'DD/MM/YYYY').unix() - moment().unix()

        if (dateDiff <= 0) {
            res.status(401).send('Precisa ser uma data futura !')
        }

        const task = {
            id: uuidv4(),
            title,
            description,
            limitDate: moment(limitDate, "DD/MM/YYYY").format("YYYY-MM-DD"),
            createrUserId
        }

        const Tasks = await connection('Task')

        const taskExists = Tasks.find(item => item.title === title)

        if (taskExists) {
            return res.status(409).send({ message: 'Título já cadastrado !' })
        }

        await connection('Task').insert(task)

        res.status(201).send({ task, message: 'Tarefa criada com sucesso !' });



    } catch (error: any) {
        res.status(400).send({ message: 'Erro ao criar tarefa !' })

    }
})

export default createTask