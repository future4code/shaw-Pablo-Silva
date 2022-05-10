import { useState } from 'react'
import { MainContainer } from "./style"
import ImgLogo from '../../img/Logo.png'
import api from "../../Services/api"
import { useNavigate } from "react-router-dom"




const RegisterPage = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleName = (event) => {
        setName(event.target.value)

    }

    const handleEmail = (event) => {
        setEmail(event.target.value)

    }

    const handlePassword = (event) => {
        setPassword(event.target.value)

    }



    const postCreateRegister = async () => {
        const body = {
            username: name,
            email: email,
            password: password
        }

        try {
            const response = await api.post(`users/signup`, body)
            alert('Cadastro criado com sucesso !')
            navigate('/')
            console.log(response.data);

        } catch (error) {
            console.log(error.response)
            alert('Erro ao criar cadastro. Confira se você digitou entre 8 e 30 caracteres na senha !')
        }
    }



    return (
        <MainContainer>
            <img src={ImgLogo} />

            <h2>Olá, boas vindas ao LabEddit ;)</h2>

            <input onChange={handleName} value={name} type='text' placeholder="Nome de usuário" />
            <input onChange={handleEmail} value={email} type='email' placeholder="E-mail" />
            <input onChange={handlePassword} value={password} type='password' placeholder="Senha" />

            <p>Ao continuar, você concorda com o nosso contrato de usuário e nossa política de privacidade</p>
            <div>
                <input type="checkbox" />
                <label for="scales">Eu concordo em receber e-mails do LabeEddit</label>
            </div>

            <button onClick={postCreateRegister}>Cadastrar</button>
        </MainContainer>
    )
}

export default RegisterPage