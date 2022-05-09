import { MainContainer } from "./style"



const RegisterPage = () => {
    return (
        <MainContainer>
            <h2>Olá, boas vindas ao LabEddit ;)</h2>

            <input type='text' placeholder="Nome de usuário"/>
            <input type='email' placeholder="E-mail"/>
            <input type='password' placeholder="Senha"/>

            <p>Ao continuar, você concorda com o nosso contrato de usuário e nossa política de privacidade</p>
            <div>
      <input type="checkbox"/>            
      <label for="scales">Eu concordo em receber e-mails do LabeEddit</label>
    </div>

    <button>Cadastrar</button>
        </MainContainer>
    )
}

export default RegisterPage