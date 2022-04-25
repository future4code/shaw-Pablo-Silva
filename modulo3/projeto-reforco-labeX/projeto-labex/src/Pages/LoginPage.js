import React from 'react'
import styled from 'styled-components'
import Button from '@mui/material/Button';


const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin: 15%;

h1{
   color: blue;
}
`

const ButtonStyle = styled.div`
display: flex;
justify-content: center;
margin: 20px;

.button1{
    margin-right: 50px;
}

.button2{
    margin-left: 50px;
}

`


const LoginPage = () => {
  return (
    <Container>
        <h1>Login</h1>

        <input
        placeholder='E-mail'
        />
        <input
        placeholder='Senha'
        />

<ButtonStyle>
        <Button className='button1' variant="outlined" ><strong>Voltar</strong></Button>
        <Button className='button2' variant="outlined"><strong>Entrar</strong></Button>
        </ButtonStyle>
    </Container>
  )
}

export default LoginPage