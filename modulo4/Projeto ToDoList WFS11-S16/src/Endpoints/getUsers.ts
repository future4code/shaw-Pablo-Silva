import app from "../app";
import { Request, Response } from 'express';
import connection from "../connection";

const getUsers = app.get('/', async (req: Request, res: Response) => {
    try {
        const result = await connection.raw('SELECT * FROM Users')
        res.status(200).send(result[0])
    } catch (error: any) {
        res.status(400).send(error.message);

    }

})

export default getUsers