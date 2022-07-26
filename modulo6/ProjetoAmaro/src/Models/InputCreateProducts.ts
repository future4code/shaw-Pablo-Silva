export type CreateProducts = {
    name: string,
    tags: string
    
}

export class CreateProductsUser {
    constructor(
        private id: string,
        private name: string,
        private tags: string
    ){}
}