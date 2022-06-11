import app from '../app';
import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import connection from '../connection';


const createUser = app.post('/user', async (req: Request, res: Response) => {
    try {
        const { name, nickname, email } = req.body
        if (!name || !email) {
            return res.status(422).send({ message: 'Campos faltando !' })
        }

        const user = {
            id: uuidv4(),
            name,
            nickname,
            email
        }

        const Users = await connection('Users')

        const userExists = Users.find(item => item.email === email || item.nickname === nickname)

        if (userExists) {
            return res.status(409).send({ message: 'E-mail já cadastrado ou nickname já está sendo usado !' })
        }

        await connection('Users').insert(user)

        res.status(201).send({ user, message: 'Usuário criado com sucesso !' });
    } catch (error: any) {
        res.status(400).send({ message: error.message })

    }
})

export default createUser