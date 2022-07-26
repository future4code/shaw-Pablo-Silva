import { Request, Response } from "express";
import GetProductsByNameBusiness from "../Business/GetProductsByNameBusiness";

const GetProductsName = new GetProductsByNameBusiness()


export class GetProductsByNameController {

    getProductsByName = async (req: Request, res: Response) => {

        const { name } = req.body


        try {
            const Products = await GetProductsName.GetProductsByNameBusiness(name)
            res.status(201).send(Products)
            

        } catch (error: any) {
            res.status(400).send(error.sqlMessage || error.message)
        }
    }
}