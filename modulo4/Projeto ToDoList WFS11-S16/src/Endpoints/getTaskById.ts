import app from "../app"
import moment from "moment"
import connection from "../connection"
import { Request, Response } from 'express'


const getTaskById = app.get('/task/:id', async (req: Request, res: Response) => {
    try {

        const result = await connection('Task')
            .select('*')
            .where({ id: req.params.id })

        if (result.length === 0) {
            return res.status(401).send({ message: 'Id inválido !' })
        }


        const newResult = {
            ...result[0],
            limitDate: moment(result[0].limitDate).format('DD/MM/YYYY')
        }
        res.status(200).send(newResult)

    } catch (error: any) {
        res.status(400).send({ message: 'Tarefa não encontrada !' })
    }

})

export default getTaskById