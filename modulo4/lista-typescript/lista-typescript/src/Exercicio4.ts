enum SETORES {
    MARKETING = 'marketing',
    VENDAS = 'vendas',
    FINANCEIRO = 'financeiro'
}

type Person = {
    nome: string,
    salário: number,
    setor: string,
    presencial: boolean
}

const persons:Array<Person> = [
    { nome: "Marcos", salário: 2500, setor: SETORES.MARKETING, presencial: true },
    { nome: "Maria" ,salário: 1500, setor: SETORES.VENDAS, presencial: false},
    { nome: "Salete" ,salário: 2200, setor: SETORES.FINANCEIRO, presencial: true},
    { nome: "João" ,salário: 2800, setor: SETORES.MARKETING, presencial: false},
    { nome: "Josué" ,salário: 5500, setor: SETORES.FINANCEIRO, presencial: true},
    { nome: "Natalia" ,salário: 4700, setor: SETORES.VENDAS, presencial: true},
    { nome: "Paola" ,salário: 3500, setor: SETORES.MARKETING, presencial: true }
]

const filterPerson = persons.filter((item) => item.setor === 'marketing' && item.presencial === true)

console.table(filterPerson);





