import app from "../app";
import { Request, Response } from 'express';
import { generateId } from "../services/GenerateId";
import generateToken from "../services/GenerateToken";

export const createUser =  app.post("/user/signup", async (req: Request, res: Response): Promise<any> => {
   try {
     // Item b. Validação do email
     if (!req.body.email || req.body.email.indexOf("@") === -1) {
       throw new Error("Invalid email");
     }
 
     // Item c. Validação da senha
     if (!req.body.password || req.body.password.length < 6) {
       throw new Error("Invalid password");
     }
 
     const userData = {
       id: generateId(),
       email: req.body.email,
       password: req.body.password,
     };
 
     const id = generateId();
 
   
     await createUser( userData.id, userData.email, userData.password);
 
     const token = generateToken({
       id,
     });
 
     res.status(200).send({message: 'Usuário criado com sucesso.',
       token,
     });
   } catch (error: any) {
     res.status(400).send({
       message: error.message,
     });
   }
 });