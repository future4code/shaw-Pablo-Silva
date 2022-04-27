import React from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import {Container, ButtonStyle} from './style'
import { TextField } from '@mui/material';
import { goToBack, goToAdminHomePage } from '../../Routes/coordinator';





const LoginPage = () => {
const navigate = useNavigate()
    

  return (
    <Container>
        <h1>Login</h1>

        <TextField id="standard-basic" label="E-mail" variant="standard" />
      <TextField id="standard-basic" label="Senha" variant="standard" />

<ButtonStyle>
        <Button onClick={() => goToBack(navigate)} className='button1' variant="outlined" ><strong>Voltar</strong></Button>
        <Button onClick={() => goToAdminHomePage(navigate)} className='button2' variant="outlined"><strong>Entrar</strong></Button>
        </ButtonStyle>
    </Container>
  )
}

export default LoginPage