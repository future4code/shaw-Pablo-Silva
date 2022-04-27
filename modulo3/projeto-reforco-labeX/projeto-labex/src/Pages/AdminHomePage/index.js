import React from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { ButtonStyle, Container } from './style';
import { goToBack,goToCreateTripePage, goToHomePage } from '../../Routes/coordinator';





const AdminHomePage = () => {

  const navigate = useNavigate()


  return (
    <Container>
        <h1>Painel Administrativo</h1>
        <ButtonStyle>
        <Button onClick={() => goToBack(navigate)} className='button1' variant="outlined" ><strong>Voltar</strong></Button>
        <Button onClick={() => goToCreateTripePage(navigate)} className='button2' variant="outlined"><strong>Criar Viagem</strong></Button>
        <Button onClick={() => goToHomePage(navigate)} className='button2' variant="outlined"><strong>Logout</strong></Button>
        </ButtonStyle>

        {/* <p>Receber API</p> */}
    </Container>
  )
}

export default AdminHomePage