import { Request, Response } from 'express';
import UserBusiness from '../Business/UserBusiness';
import { SignupInputDTO } from '../Types/signupDTO';

export default class UserController{

    constructor (
        private userBusiness: UserBusiness
    ){}
    signup = async(req: Request, res: Response) => {
        const {name, email, password } = req.body

        const input: SignupInputDTO = {
            name,
            email,
            password
        }

        try {
            const token = await this.userBusiness.signup(input)
            res.status(201).send({message: 'Usuário criado com sucesso !', token})
        } catch (error) {
            
        }


    }
}