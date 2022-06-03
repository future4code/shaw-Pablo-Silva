import { v4 as uuidv4 } from 'uuid'
export type Transactions = {
    value: number,
    date: Date,
    description: string
}

export type BankCustomers = {
    id: string,
    name: string,
    cpf: number,
    birthDate: Date,
    balance: number,
    extract: Transactions[]

}



export const arrayCustomers: Array<BankCustomers> = [

    {
        id: uuidv4(),
        name: 'Fernando',
        cpf: 55596793796,
        birthDate: new Date('1990-10-10'),
        balance: 200,
        extract: [
            {
                value: 0,
                date: new Date(),
                description: ''
            }
        ]


    },
    {

        id: uuidv4(),
        name: 'Pablo',
        cpf: 96596585650,
        birthDate: new Date('1985-11-08'),
        balance: 350,
        extract: [
            {
                value: 0,
                date: new Date(),
                description: ''
            }
        ]


    },
    {
        id: uuidv4(),
        name: 'Francisco',
        cpf: 66958942360,
        birthDate: new Date('1979-02-10'),
        balance: 600,
        extract: [
            {
                value: 0,
                date: new Date(),
                description: ''
            }
        ]


    }


] 