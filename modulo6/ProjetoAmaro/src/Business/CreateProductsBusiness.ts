import ProductsDataBase from '../Data/ProductsDataBase'
import { CreateProducts, CreateProductsUser } from '../Models/InputCreateProducts'
import { IdGenerate } from '../Services/IdGenerate'



export default class CreateProductsBusiness {
    constructor(
        private productData: ProductsDataBase,
        private idGenerator: IdGenerate
    ) { }

    createProducts = async (input: CreateProducts) => {

        const { name, tags } = input

        if (!name || !tags) {
            throw new Error('Campos inválidos')
        }

        const productsExists = await this.productData.findByProducts(name)
        if (productsExists) {
            throw new Error('Produto já cadastrado !')
        }

        const id = this.idGenerator.generateId()

        const productsCreate = new CreateProductsUser(
            id,
            name,
            tags
        )

        await this.productData.insert(productsCreate)


    }

}