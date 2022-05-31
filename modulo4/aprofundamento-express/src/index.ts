import express from "express";
import cors from "cors";

import { AddressInfo } from "net";

const app = express();
app.use(cors());

app.use(express.json());

//Endpoint de teste
app.get("/ping", (req, res) => {
    res.send("Pong! 🏓")
})

type ToDo = {
    userId: number | string,
    id: number | string,
    title: string | number,
    completed: boolean
}

const arrayToDo: Array<ToDo> = [

    {
        userId: '1',
        id: '1',
        title: "delectus aut autem",
        completed: true
    },
    {
        userId: '1',
        id: '2',
        title: "quis ut nam facilis et officia qui",
        completed: true
    },
    {
        userId: '2',
        id: '3',
        title: "sisisiqdwcia qui",
        completed: false
    },
    {
        userId: '2',
        id: '3',
        title: "sisisiqdwcia qui",
        completed: false
    }
]

//Enpoint que pega todos os afazares de todos os usuários

app.get("/alltodo", (req, res) => {
    res.send(arrayToDo)
})



//Endpoint retorna somente afazeres completos ou seja, igual a "true".
app.get("/to-doCompleted", (req, res) => {
    res.send(

        arrayToDo.filter((item) => {
            return item.completed === true
        })

    )
})

//Endpoint que cria afazeres novos
app.post('/createtodo', (req, res) => {
    const { userId, id, title, completed } = req.body

    arrayToDo.push({ userId, id, title, completed })
    res.status(200).send(arrayToDo)
})

//Endpoint que atualiza o afazer de completo para incompleto ou vice e versa
app.put('/updatetodo/:id', (req, res) => {
    const { id } = req.params
    const { completed } = req.body
    const todo = arrayToDo.find(todo => todo.id == id)
    if (!todo) return res.status(404).json({ error: "Post não encontrado" })

    todo.completed = completed

    return res.status(200).json(todo)
})

//Endpoint que deleta um afazer
app.delete('/todo/:id', (req, res) => {
    const { id } = req.params

    const indexToDo = arrayToDo.findIndex(todo => todo.id == id)

    if (indexToDo === -1) return res.status(404).json({ error: 'Usuário não encontrado' })

    arrayToDo.splice(indexToDo, 1)

    return res.status(200).json({ sucess: 'Afazer excluído com sucesso !' })

})

//Endpoint que pega um afazer de um determinado usuário via userId
app.get("/alltodo/:userId", (req, res) => {
    const { userId } = req.params
    const arrayFilter = arrayToDo.filter(item => item.userId === userId)
    res.send(arrayFilter)
})


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});;
