import React from 'react'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'
import { ButtonStyle, Container } from './style'
import { goToHomePage, goToApplicationFormPage } from '../../Routes/coordinator'




const ListTripsPage = () => {

    const navigate = useNavigate()

    
     
   

    return (
        <Container>
            <ButtonStyle>
                <Button onClick={() => goToHomePage(navigate)} className='button1' variant="outlined"><strong>Voltar</strong></Button>
                <Button onClick={() => goToApplicationFormPage(navigate)} className='button2' variant="outlined"> <strong>Inscrever-se</strong></Button>
            </ButtonStyle>


            <div>
                <h1>Lista de Viagens</h1>
                <p>Nome:</p>
                <p>Descrição:</p>
                <p>Planeta:</p>
                <p>Duração:</p>
                <p>Data:</p>
                {/* Receber API */}
                
            </div>

        </Container>
    )
}

export default ListTripsPage