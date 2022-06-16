import { connection } from './connection';
import { Adress } from '../types';


export default async function insertAddressFromDb(address: Adress, numero: string, complemento: string) {

    await connection('Address')
        .insert({
            ...address,
            numero,
            complemento,
            
        })

}



