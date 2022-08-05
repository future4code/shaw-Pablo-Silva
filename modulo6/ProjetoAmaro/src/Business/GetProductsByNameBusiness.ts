import ProductsCreatedData from "../Data/ProductsDataBase";


const GetProductsName = new ProductsCreatedData()

export default class GetProductsByNameBusiness {


    GetProductsByNameBusiness = async (name: string) => {
        if (!name) {
            throw new Error("Favor colocar o nome do produto !");  
        }

        const ProductsDetail = await GetProductsName.findByNameProducts(name)

        return ProductsDetail
    }


    
}