import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { Container, ButtonStyle } from './style'
import { TextField } from '@mui/material';
import { goToBack, goToAdminHomePage } from '../../Routes/coordinator';
import api from '../../Services/api';

const LoginPage = () => {

  const navigate = useNavigate()

  const [inputEmail, setInputEmail] = useState('')
  const [inputPassword, setInputPassword] = useState('')
  const [login, setLogin] = useState({})

  const onChangeInputEmail = (event) => {
    setInputEmail(event.target.value)
  }

  const onChangeInputPassword = (event) => {
    setInputPassword(event.target.value)
  }

  const body = {
    email: inputEmail,
    password: inputPassword
  }

  const postLogin = async () => {
    try {
      const response = await api.post(`login`, body)
      setLogin(response.data.token)
      alert('Uhuulll, parabéns, login feito com sucesso ! :)')
      window.localStorage.setItem("token", response.data.token)
      goToAdminHomePage(navigate)
      
    } catch (error) {
      console.log(error.response)
      alert('Senha incorreta, põe a certa correta poxa :@')

    }
  }


  return (
    <Container>
      <h1>Login</h1>

      <TextField
        id="standard-basic"
        label="E-mail"
        variant="standard"
        value={inputEmail}
        onChange={onChangeInputEmail} />

      <TextField
        id="standard-basic"
        label="Senha"
        variant="standard"
        value={inputPassword}
        onChange={onChangeInputPassword} />

      <ButtonStyle>
        <Button
          onClick={() => goToBack(navigate)}
          className='button1'
          variant="outlined" >
          <strong>Voltar</strong>
        </Button>

        <Button
          onClick={postLogin}
          className='button2'
          variant="outlined">
          <strong>Entrar</strong>
        </Button>

      </ButtonStyle>
    </Container>
  )
}

export default LoginPage