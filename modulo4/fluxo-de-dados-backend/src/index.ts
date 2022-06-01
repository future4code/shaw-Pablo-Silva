import express from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { v4 as uuidv4 } from "uuid"
import { arrayProducts } from "./data";


const app = express();

app.use(express.json());
app.use(cors());
//Endpoint de teste
app.get("/ping", (req, res) => {
    res.send("Pong! 🏓")
})

app.post('/products', (request, response) => {
    try {
        const { name, price } = request.body

        if (!name || (!price && price !== 0)) {
            throw new Error('Conferir se foi passado name ou price no body')

        }

        if (typeof name !== 'string') {
            throw new Error('Favor passar name como string!')

        }

        if (typeof price !== 'number') {
            throw new Error('Favor passar price como number!')

        }

        if (price <= 0) {
            throw new Error('Favor passar um preço válido !')
        }

        const products = {
            id: uuidv4(),
            name,
            price
        }

        arrayProducts.push(products)
        response.status(200).send(arrayProducts)

    } catch (error: any) {

        switch (error.message) {
            case 'Favor passar name como string!':
                response.status(422).send(error.message)
                break;

            case 'Favor passar price como number!':
                response.status(422).send(error.message)
                break;

            case 'Conferir se foi passado name ou price no body':
                response.status(422).send(error.message)
                break;

            case 'Favor passar um preço válido !':
                response.status(422).send(error.message)
                break;

            default:
                response.status(501).send('Error 501')
        }

    }

})

app.get('/products', (request, response) => {
    response.status(200).json(arrayProducts)
})

app.put('/products/:id', (request, response) => {
    try {
        const { id } = request.params
        const { price } = request.body

        if (price <= 0) {
            throw new Error('Favor passar um preço válido !')
        }


        if ((!price)) {
            throw new Error('Conferir se foi passado price no body')
        }


        if (typeof price !== 'number') {
            throw new Error('Favor passar price como number!')

        }

        const products = arrayProducts.find(products => products.id == id)
        if (!products) return response.status(404).json({ error: "Produto não encontrado !" })

        products.price = price

        return response.status(200).json(arrayProducts)

    } catch (error: any) {
        switch (error.message) {
            case 'Conferir se foi passado price no body':
                response.status(422).send(error.message)
                break;

            case 'Favor passar um preço válido !':
                response.status(422).send(error.message)
                break;

            case 'Favor passar price como number!':
                response.status(422).send(error.message)

           
            default:
                response.status(501).send('Error 501')
        }


    }


})

app.delete('/products/:id', (request, response) => {
    try {

        const { id } = request.params

        const indexToDo = arrayProducts.findIndex(product => product.id == id)

        if ((!id)) {
            throw new Error('Id não foi recebido !')
        }

        if (indexToDo === -1) return response.status(404).json({ error: 'Produto não encontrado !' })

        arrayProducts.splice(indexToDo, 1)

        return response.status(200).json({ arrayProducts, sucess: 'Produto excluído com sucesso !' })

    } catch (error: any) {

        switch (error.message) {
            case 'Id não foi recebido !':
                response.status(422).send(error.message)
                break;

            default:
                response.status(501).send('Error 501')
        }
    }
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});;

