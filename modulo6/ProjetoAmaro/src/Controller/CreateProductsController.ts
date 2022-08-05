import { Request, Response } from "express";
import CreateProductsBusiness from "../Business/CreateProductsBusiness";
import { CreateProducts } from "../Models/InputCreateProducts";


export class CreateProductsController {

    constructor(
        private createProductsController: CreateProductsBusiness
    ) { }
    createProducts = async (req: Request, res: Response) => {
        
        const { name, tags } = req.body

        const input: CreateProducts = {
            name,
            tags
        }       


        try {
            const insertProductFromDB = await this.createProductsController.createProducts(input)
            res.status(201).send({ message: 'Produto adicionado com sucesso !', insertProductFromDB })
            
            
        } catch (error:any) {
            res.status(500).send(error.sqlMessage || error.message)
        }
    }
}