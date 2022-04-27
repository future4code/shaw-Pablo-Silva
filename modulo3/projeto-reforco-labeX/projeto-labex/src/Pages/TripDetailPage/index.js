import React from 'react'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'
import {Container, ButtonStyle} from './style'
import { goToBack } from '../../Routes/coordinator'



const TripDetailsPage = () => {

  const navigate = useNavigate()

  

  return (
    <Container>
        <h1>{/* Resultado vai vir da API*/}</h1>

        <p>Nome:</p>
        <p>Descrição:</p>
        <p>Planeta:</p>
        <p>Jupiter:</p>
        <p>Data:</p>

        <ButtonStyle>
        <Button onClick={() => goToBack(navigate)} className='button2' variant="outlined"><strong>Voltar</strong></Button>
 </ButtonStyle>
    </Container>
  )
}

export default TripDetailsPage