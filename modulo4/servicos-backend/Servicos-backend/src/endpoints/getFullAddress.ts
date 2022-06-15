import axios from 'axios';
import { Adress } from '../types';



export const getAddressFull = async (cep: string): Promise<Adress | undefined> => {
    try {

        
       const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)

       const address: Adress = {
        logradouro: response.data.logradouro,
        bairro: response.data.bairro,
        cidade: response.data.localidade,
        estado: response.data.uf
       }

       return address
        
    } catch (error) {
        return undefined
        
    }

}
