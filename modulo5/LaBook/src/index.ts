import UserBusiness, { UserBusinessLogin } from "./Business/UserBusiness";
import { app } from "./Controller/app";
import UserController, { UserControllerLogin } from "./Controller/UserController";
import UserData from "./Data/UserData";
import { Authenticator, AuthenticatorEmail } from "./Services/Authenticator";
import { HashManager } from "./Services/HashManager";
import { IdGenerator } from "./Services/IdGenerator";

const userController = new UserController(
    new UserBusiness(
        new UserData(),
        new IdGenerator(),
        new HashManager(),
        new Authenticator()
    )
)
app.post('/user/signup', userController.signup)

const userControllerLogin = new UserControllerLogin(
    new UserBusinessLogin(
        new UserData(),           
        new AuthenticatorEmail()
    )
)

app.post('/user/login', userControllerLogin.login)