import express from "express";
import cors from "cors";
import { v4 as uuidv4 } from 'uuid'
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

app.get("/afazeres", (req, res) => {
    res.send(arrayToDo)
})



//Endpoint retorna somente afazeres completos ou seja, igual a "true".
app.get("/afazeres/completed", (req, res) => {
    res.send(

        arrayToDo.filter((item) => {
            return item.completed === true
        })
    )
})

//Endpoint que cria afazeres novos
app.post('/afazeres', (req, res) => {
    const { userId, title, completed } = req.body

    //Para gerar o id foi usado a biblioeteca uuid, por isso no body não é necessário passar o id manualmente,
    //somente o userId.
    const toDo = {
        userId,
        id: uuidv4(),
        title,
        completed
    }

    arrayToDo.push(toDo)
    res.status(200).send(arrayToDo)
})

//Endpoint que atualiza o afazer de completo para incompleto ou vice e versa
app.put('/afazeres/:id', (req, res) => {
    const { id } = req.params
    const { completed } = req.body
    const toDo = arrayToDo.find(todo => todo.id == id)
    if (!toDo) return res.status(404).json({ error: "Post não encontrado" })

    toDo.completed = completed

    return res.status(200).json(toDo)
})

//Endpoint que deleta um afazer
app.delete('/afazeres/:id', (req, res) => {
    const { id } = req.params

    const indexToDo = arrayToDo.findIndex(toDo => toDo.id == id)

    if (indexToDo === -1) return res.status(404).json({ error: 'Afazer não encontrado' })

    arrayToDo.splice(indexToDo, 1)

    return res.status(200).json({ sucess: 'Afazer excluído com sucesso !' })

})

//Endpoint que pega um afazer de um determinado usuário via userId
app.get("/afazeres/:userId", (req, res) => {
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
