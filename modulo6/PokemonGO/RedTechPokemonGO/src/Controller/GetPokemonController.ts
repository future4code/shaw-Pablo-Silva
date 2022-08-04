import { Request, Response } from "express";
import GetPokemonByNameBusiness from "../Business/GetPokemonBusiness";

const GetPokemonByName = new GetPokemonByNameBusiness()


export class GetPokemonByNameController {

    getPokemonByName = async (req: Request, res: Response) => {

        const { name } = req.body


        try {
            const PokeName = await GetPokemonByName.GetPokemonByNameBusiness(name)
            res.status(201).send(PokeName)


        } catch (error: any) {
            res.status(400).send(error.sqlMessage || error.message)
        }
    }
}