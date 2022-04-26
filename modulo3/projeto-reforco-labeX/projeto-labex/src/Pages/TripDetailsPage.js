import React from 'react'
import styled from 'styled-components'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin: 15%;
p{
    color: SteelBlue ;
}

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

const TripDetailsPage = () => {

  const navigate = useNavigate()

    const goToBack = () => {
        navigate(-1)
    }

  return (
    <Container>
        <h1>{/* Resultado vai vir da API*/}</h1>

        <p>Nome:</p>
        <p>Descrição:</p>
        <p>Planeta:</p>
        <p>Jupiter:</p>
        <p>Data:</p>

        <ButtonStyle>
        <Button onClick={goToBack} className='button2' variant="outlined"><strong>Voltar</strong></Button>
 </ButtonStyle>
    </Container>
  )
}

export default TripDetailsPage