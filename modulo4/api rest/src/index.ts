import express, { Request, Response } from 'express'
import cors from 'cors'
import { v4 as uuidv4 } from 'uuid'

type User = {
  id: number,
  name: string,
  email: string,
  type: string,
  age: number
}

enum UserType {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL"
}

// Mock simulando um array de usuários no Banco de Dados
let users: User[] = [
  {
    id: 1,
    name: "Alice",
    email: "alice@email.com",
    type: UserType.ADMIN,
    age: 12
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@email.com",
    type: UserType.NORMAL,
    age: 36
  },
  {
    id: 3,
    name: "Coragem",
    email: "coragem@email.com",
    type: UserType.NORMAL,
    age: 21
  },
  {
    id: 4,
    name: "Dory",
    email: "dory@email.com",
    type: UserType.NORMAL,
    age: 17
  },
  {
    id: 5,
    name: "Elsa",
    email: "elsa@email.com",
    type: UserType.ADMIN,
    age: 17
  },
  {
    id: 6,
    name: "Fred",
    email: "fred@email.com",
    type: UserType.ADMIN,
    age: 60
  }
]

const app = express()
app.use(express.json())
app.use(cors())


//Exercício 1
//a: O método GET
//b: /users

app.get('/users', (req: Request, res: Response) => {
  res.send(users)
})

//Exercício 2
//: a: Através do request query.
//b: Através do if

app.get('/users/type', (req: Request, res: Response) => {
  try {
    const { type } = req.query
    const filterUserAdmin = users.filter((item) => {
      return item.type === type
    })

    if (type !== "ADMIN" && type !== "NORMAL") {
      throw new Error('Conferir se o type é válido ADMIN ou NORMAL')
    }

    res.status(200).send(filterUserAdmin)

  } catch (error: any) {
    switch (error.message) {
      case 'Conferir se o type é válido ADMIN ou NORMAL':
        res.status(400).send(error.message)
        break;

      default:
        res.status(501).send(error.message)
    }

  }

})

//Exercício 3
//a: O request params.

app.get('/users/:name', (req: Request, res: Response) => {
  try {

    const { name } = req.params

    const filterName = users.find((item) => {
      return item.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    })

    if (!filterName) {
      throw new Error('Usuário não encontrado')
    }



    res.status(200).send(filterName)

  } catch (error: any) {
    switch (error.message) {
      case 'Usuário não encontrado':
        res.status(400).send(error.message)
        break;

      default:
        res.status(501).send(error.message)
    }

  }

})

//Exercício 4
//a: O método post serve para criar um novo recurso e o put altera. Não mudou nada, funcionou da mesma forma.
//b: Não

app.post('/users', (req: Request, res: Response) => {
  try {
    const { name, email, age, type } = req.body

    const userExists = users.find(user => user.email === email)

    if (userExists) {
      throw new Error('Usuário já existe')
    }


    const createUser = {
      id: Math.floor(Math.random() * 10 + 1000),
      name,
      email,
      type,
      age
    }

    users.push(createUser)
    res.status(201).send(users)

  } catch (error: any) {
    switch (error.message) {
      case 'Usuário já existe':
        res.status(401).send(error.message)
        break;

      default:
        res.status(501).send(error.message)
    }

  }

})


app.listen(3003, () => {
  console.log('Server is running at port 3003')
})
