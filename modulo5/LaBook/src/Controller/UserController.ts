import { Request, Response } from 'express';
import UserBusiness, { UserBusinessLogin } from '../Business/UserBusiness';
import { Login } from '../Types/login';
import { SignupInputDTO } from '../Types/signupDTO';

export default class UserController {

    constructor(
        private userBusiness: UserBusiness
    ) { }
    signup = async (req: Request, res: Response) => {
        const { name, email, password } = req.body

        const input: SignupInputDTO = {
            name,
            email,
            password
        }

        try {
            const token = await this.userBusiness.signup(input)
            res.status(201).send({ message: 'Usuário criado com sucesso !', token })
        } catch (error) {

        }


    }
}

export class UserControllerLogin {

    constructor(
        private userBusiness: UserBusinessLogin
    ) { }


    login = async (req: Request, res: Response) => {
        const { email, password } = req.body

        const inputLogin: Login = {
            email,
            password
        }

        try {
            const token = await this.userBusiness.login(inputLogin)
            res.status(201).send({ message: 'Usuário logado com sucesso!', token })
        } catch (error) {

        }


    }
}


