import app from "./app";
import { Request, Response } from 'express'
import connection from "./connection";
import { v4 as uuidv4 } from 'uuid'
import moment from 'moment'



app.get('/', async (req: Request, res: Response) => {
    try {
        const result = await connection.raw('SELECT * FROM Users')
        res.status(200).send(result[0])
    } catch (error: any) {
        res.status(400).send(error.message);

    }

})



app.post('/user', async (req: Request, res: Response) => {
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

app.get('/user/:id', async (req: Request, res: Response) => {
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

app.put('/user/edit/:id', async (req: Request, res: Response) => {
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

app.post('/task', async (req: Request, res: Response) => {
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

app.get('/task/:id', async (req: Request, res: Response) => {
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



