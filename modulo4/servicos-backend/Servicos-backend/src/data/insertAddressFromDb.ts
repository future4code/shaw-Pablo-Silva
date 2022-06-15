import { connection } from './connection';
import { Adress} from '../types';


export default async function insertAddressFromDb(address: Adress, numero: string, complemento: string) {

    const { logradouro, bairro, cidade, estado } = address

    await connection('Address')
        .insert({
            logradouro,
            numero,
            complemento,
            bairro,
            cidade,
            estado
        })        

}



