import axios from 'axios';
import { Adress } from '../types';
import { Request, Response } from 'express'



export const getAddress = async (req: Request, res: Response) => {
    try {

        const { cep } = req.params
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)

        const address: Adress = {
            logradouro: response.data.logradouro,
            bairro: response.data.bairro,
            cidade: response.data.localidade,
            estado: response.data.uf
        }

        res.status(200).send(address)

    } catch (error: any) {
        res.status(400).send(error.message)

    }

}
