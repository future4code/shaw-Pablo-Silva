import { Request, Response } from 'express';
import insertAddressFromDb from '../data/insertAddressFromDb';
import { getAddressFull } from './getFullAddress';



export const createAddress = async (req: Request, res: Response) => {
    try {

       const { cep } = req.params
       const { numero, complemento } = req.body
       const address = await getAddressFull(cep)

       if(!address){
        throw new Error('Cep inválido')
       }

       await insertAddressFromDb(address, numero, complemento)

       res.status(201).send('Endereço criado com sucesso !')
        
    } catch (error: any) {
        res.status(400).send(error.message)
        
    }

}



