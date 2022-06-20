import app from "./app";
import { request, Request, Response } from "express";
import connection from "./connection";
import { v4 as uuidv4 } from 'uuid'

app.get('/Actor', async (req: Request, res: Response) => {
    try {
        const result = await connection.raw('SELECT * FROM Actor')
        res.status(200).send(result[0])
    } catch (error: any) {
        res.status(401).send(error.message);

    }

})


//Exercício 1
//a: Quando utilizamos o RAW ele retorna exatamente o que queremos, sem o raw ele trás
//um monte de informação que não queremos no momento.

//b:

app.get('/Actor/:name', async (req: Request, res: Response) => {
    try {

        const result = await connection.raw(`SELECT * FROM Actor WHERE (name LIKE "%${req.params.name}%")`)

        res.status(200).send(result[0])

    } catch (error: any) {
        res.status(401).send('Error')
    }
})

//c: 

app.get("/Actor/:gender/count", async (req: Request, res: Response): Promise<any> => {
    try {

        const result = await connection("Actor")
            .count("* as genderCount")
            .where({ gender: req.params.gender })
        res.send(result)

    } catch (error: any) {
        res.send(error.message)
    }
})

//Exercício 2

//a: 
app.put("/Actor/salary/:id", async (req: Request, res: Response): Promise<any> => {
    try {

        await connection("Actor")
            .update({ salary: req.body.salary })
            .where({ id: req.params.id })

        res.send('Salário atualizado !')

    } catch (error: any) {
        res.send(error.message)
    }

}
)

//b: 

app.delete("/Actor/:id", async (req: Request, res: Response) => {
    try {

        await connection("Actor")
            .delete()
            .where({ id: req.params.id })

        res.send('O ator foi deletado com sucesso !')

    } catch (error: any) {
        res.send(error.message)
    }

})

//c: 

app.get('/Actor/avg/:gender', async (req: Request, res: Response) => {
    try {
        const result = await connection("Actor")
            .avg("salary as average")
            .where({ gender: req.params.gender });

        res.send(result[0]);

    } catch (error: any) {
        res.send(error.message)

    }

})

//Exercício 3

//a: 
app.get('/Actor/byId/:id', async (req: Request, res: Response) => {
    try {

        const result = await connection.raw(`
              SELECT * FROM Actor WHERE id = "${req.params.id}"
            `)

        res.status(200).send(result[0])

    } catch (error: any) {
        res.status(401).send('ID não encontrado !')
    }
})

//b: 
app.get("/Actor/:gender/count", async (req: Request, res: Response): Promise<any> => {
    try {

        const result = await connection("Actor")
            .count("* as genderCount")
            .where({ gender: req.params.gender })
        res.send(result)

    } catch (error: any) {
        res.status(401).send(error.message)
    }
})

//Exercício 4

//a:

app.post("/Actor", async (req: Request, res: Response) => {
    try {
        const { name, salary, birth_date, gender } = req.body

        const actor = {
            id: uuidv4(),
            name,
            salary,
            birth_date,
            gender
        }
        await connection('Actor')
            .insert(actor)
        res.status(201).send({ actor, message: 'Usuário criado com sucesso !' });

    } catch (error: any) {
        res.status(400).send({
            message: error.message,
        });
    }
});

app.put("/Actor/salary/:id", async (req: Request, res: Response): Promise<any> => {
    try {

        await connection("Actor")
            .update({ salary: req.body.salary })
            .where({ id: req.params.id })

        res.send('Salário atualizado !')

    } catch (error: any) {
        res.send(error.message)
    }

}
)

//b:
app.delete("/Actor/:id", async (req: Request, res: Response) => {
    try {

        await connection("Actor")
            .delete()
            .where({ id: req.params.id })

        res.send('O ator foi deletado com sucesso !')

    } catch (error: any) {
        res.send(error.message)
    }

})












