import { MainContainer } from "./style"




const LoginPage = () => {
    return (

        <MainContainer>
            <h1>LabEddit</h1>
            <p>O projeto de rede social da Labenu</p>
            <input type='text' placeholder="Nome"/>
            <input type='password' placeholder="Senha"/>

            <button className="button1">Continuar</button>
            <button className="button2">Crie uma conta!</button>
        </MainContainer>
    )
        
        
}

export default LoginPage