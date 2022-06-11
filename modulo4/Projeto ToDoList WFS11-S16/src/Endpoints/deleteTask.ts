import app from "../app";
import { Request, Response } from 'express'
import connection from "../connection";

const deleteTask = app.delete('/task/:id', async (req: Request, res: Response)=> {
    try {
        const { id } = req.params
        await connection('Task')
        .delete()
        .where({id})
        
        res.status(200).send({message: 'Tarefa excluída com sucesso !'})
        
    } catch (error: any) {
        res.send({message: error.message})
        
    }
})

export default deleteTask