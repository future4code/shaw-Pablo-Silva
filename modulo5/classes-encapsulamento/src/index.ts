/* Exercício 1

a: 

Método contructor serve para iniciar informações de uma classe. 

*/

//b: 

//A mensagem "Chamando o construtor da classe User" é chamado UMA vez somente.

class Transaction {
    private date: string;
    private value: number;
    private description: string;

    constructor(date: string, value: number, description: string) {
        this.date = date;
        this.value = value;
        this.description = description
    }
}

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];

    constructor(
        cpf: string,
        name: string,
        age: number,
    ) {
        console.log("Chamando o construtor da classe UserAccount")
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    }

}


const userNewUser = new UserAccount('123.456.789-88', 'Pablo', 28)
console.log(userNewUser);

//c:
//Através do método getters.

/* Exercício 2
 
 class Transaction {
private date: string;
private value: number;
private description: string;
 
constructor(date: string, value: number, description: string) {
  this.date = date;
  this.value = value;
  this.description = description
}
}

*/

/* Exercício 3 */

class Bank {
    private accounts: UserAccount[];

    constructor(accounts: UserAccount[]) {
        this.accounts = accounts;
    }

    getAccount = () => {
        return this.accounts
    }

    setAccount = (account: UserAccount[]) => {
        this.accounts = account
    }

}
const newBank = new Bank([userNewUser])

console.log(newBank.getAccount())



