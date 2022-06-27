/*Exercício 1
a: Sim, é possível imprimir.

b: Uma vez só.

*/

class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string
    ) {
        console.log("Chamando o construtor da classe User")
        this.id = id
        this.email = email
        this.name = name
        this.password = password
    }

    public getId(): string {
        return this.id
    }

    public getEmail(): string {
        return this.email
    }

    public getName(): string {
        return this.name

    }

    public interoduceYourself(): string {
        return "Olá, bom dia!"
    }

    public interoduceNameUser(): string {
        return `Olá, sou ${this.name}. Bom dia!`
    }


}

const userNewUser = new User('5555555' ,'pablo@labenu.com', 'Pablo', '123456')

/* Exercício 2
a: Nenhuma vez

b: Foi impressa uma vez. Porque Customer é uma extensão de User.

*/

class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string,
        creditCard: string
    ) {
        super(id, email, name, password);
        console.log("Chamando o construtor da classe Customer");
        this.creditCard = creditCard;
    }

    public getCreditCard(): string {
        return this.creditCard;
    }
}

//  const userNewUser = new Customer('5555555' ,'pablo@labenu.com', 'Pablo', '123456', '20004847878787')
//  console.log(userNewUser);


/* Exercício 3
a: Sim, pois Customer usou uma extensão de User que contém o password.

*/

/* Exercício 4


console.log(userNewUser.interoduceYourself());

*/




/*Exercício 5*/
// console.log(userNewUser.interoduceNameUser());






