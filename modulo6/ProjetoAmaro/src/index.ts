import { app } from "./app";
import CreateProductsBusiness from "./Business/CreateProductsBusiness";
import { CreateProductsController } from "./Controller/CreateProductsController";
import { GetProductsByNameController } from "./Controller/GetProductsByNameController";
import ProductsCreatedData from "./Data/ProductsDataBase";
import { IdGenerate } from "./Services/IdGenerate";

//Criar produtos no banco de dados
const CreateProductsControllers = new CreateProductsController(
    new CreateProductsBusiness(
        new ProductsCreatedData,
        new IdGenerate
    )
)

app.post('/products', CreateProductsControllers.createProducts)

//Pesquisar produto por nome

const GetProductsName = new GetProductsByNameController()


app.get('/products', GetProductsName.getProductsByName)