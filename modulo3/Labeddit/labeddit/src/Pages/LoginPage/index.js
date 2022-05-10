import { MainContainer } from "./style"
import ImgLogo from '../../img/Logo.png'
import { useState } from "react"
import api from "../../Services/api"
import { useNavigate } from "react-router-dom"




const LoginPage = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }




    const navigate = useNavigate()

    const postLogin = async () => {
        const body = {
            email: email,
            password: password
        }

        try {
            const response = await api.post(`users/login`, body)
            alert('Seja bem vindo !')
            window.localStorage.setItem("token", response.data.token)
            navigate('/FeedPage')
            console.log(response.data.token);
            setEmail('')
            setPassword('')

        } catch (error) {
            console.log(error.response)
            alert('Usuário e/ou senha incorretas')
        }
    }



    return (

        <MainContainer>
            <img src={ImgLogo} />
            <h1>LabEddit</h1>
            <p>O projeto de rede social da Labenu</p>
            <input onChange={handleEmail} value={email} type='email' placeholder="Email" />
            <input onChange={handlePassword} value={password} type='password' placeholder="Senha" />

            <button onClick={postLogin} className="button1">Continuar</button>
            <button onClick={() => navigate('/RegisterPage')} className="button2">Crie uma conta!</button>
        </MainContainer>
    )


}

export default LoginPage