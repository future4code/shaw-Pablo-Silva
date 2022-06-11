import app from "../app";
import { Request, Response } from 'express'
import connection from "../connection";

const deleteUser = app.delete('/user/:id', async (req: Request, res: Response)=> {
    try {
        const { id } = req.params
        await connection('Users')
        .delete()
        .where({id})
        
        res.status(200).send({message: 'Usuário excluído com sucesso !'})
        
    } catch (error: any) {
        res.send({message: error.message})
        
    }
})

export default deleteUser