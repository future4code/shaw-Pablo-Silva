import UserData from "../Data/UserData";
import User from "../Model/User";
import { Authenticator, AuthenticatorEmail } from "../Services/Authenticator";
import { HashManager } from "../Services/HashManager";
import { IdGenerator } from "../Services/IdGenerator";
import { Login } from "../Types/login";
import { SignupInputDTO } from "../Types/signupDTO";

export default class UserBusiness {

    constructor(
        private userData: UserData,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) { }
    signup = async (input: SignupInputDTO) => {
        //validação
        const { name, email, password } = input

        if (!email || !name || !password) {
            throw new Error('Campos inválidos')
        }
        //conferir se o usuário existe ou não existe

        const userExists = await this.userData.findByEmail(email)
        if (userExists) {
            throw new Error('Email já cadastrado')
        }

        //criar uma id pro usuário

        const id = this.idGenerator.generateId()

        //hashear o password

        const hashedPassword = await this.hashManager.hash(password)

        //criar o usuário no banco de dados

        const user = new User(
            id,
            name,
            email,
            hashedPassword
        )

        await this.userData.insert(user)

        //criar token
        const token = this.authenticator.generateToken({ id })

        //retornar o token
        return token
    }
}

export class UserBusinessLogin {

    constructor(
        private userData: UserData,
        private authenticator: AuthenticatorEmail,
        private hashManager: HashManager
    ) { }

    login = async (inputLogin: Login) => {
        //validação
        const { email, password } = inputLogin

        if (!email || !password) {
            throw new Error('Campos inválidos')
        }
        //conferir se o usuário existe ou não existe

        const userExists = await this.userData.findByEmail(email)
        if (!userExists) {
            throw new Error('Usuário não cadastrado !')
        }  

        const passWordIscorrect = await this.userData.findByPassword(password)
        if (!passWordIscorrect) {
            throw new Error('Usuário não cadastrado !')
        }              

        //criar token
        const token = this.authenticator.generateTokenLogin({email})

        //retornar o token
        
    }
}


