import express, { Express, request, Request, Response } from 'express'
import cors from 'cors'
import { v4 as uuidv4 } from 'uuid'
import { arrayCustomers } from './data';

const app: Express = express();

app.use(express.json());
app.use(cors());


app.get('/users', (req: Request, res: Response) => {
    res.send(arrayCustomers)
})

type Transactions = {
    value: number,
    date: Date,
    description: string
}

type BankCustomers = {
    id: string,
    name: string,
    cpf: number,
    birthDate: Date,
    balance: number,
    extract: Transactions[]

}


app.post('/users', (req: Request, res: Response) => {
    try {
        const { name, cpf, birthDate } = req.body

        const newDate = new Date(birthDate)        
        const age: number = Math.floor((Date.now() - newDate.getTime()) / (365.25 * 24 * 60 * 60 * 1000));

        if (age < 18) {
            res.status(403)
            throw new Error('Você precisa ser maior de 18 para criar sua conta !')
        }

        if (!name || !cpf || !birthDate) {
            res.status(401)
            throw new Error('Nome, cpf ou data de nascimento não foram inseridas.')
        }

        const userExists = arrayCustomers.find(user => user.cpf === cpf)

        if (userExists) return res.status(400).send({ error: 'Usuário já existe' })


        const createUser: BankCustomers = {
            id: uuidv4(),
            name,
            cpf,
            birthDate: newDate,
            balance: 0,
            extract: []
        }



        arrayCustomers.push(createUser)
        res.status(201).send(arrayCustomers)

    } catch (error: any) {
        res.send(error.message)

    }


})



const server = app.listen(3003, () => {
    console.log(`Uhuuuuuullllll, está rodando em ====> http://localhost:3003`);
});