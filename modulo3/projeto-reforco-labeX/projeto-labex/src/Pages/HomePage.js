import React from 'react'
import styled from 'styled-components'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


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

const HomePage = () => {

  const navigate = useNavigate()

  const goToListTripPage = () => {
    navigate('/ListTripsPage')
  }

  const goToLoginPage = () => {
    navigate('/LoginPage')

  }

  return (
    <Container>

      <h1>LabeX</h1>
      <ButtonStyle>
        <Button onClick={goToListTripPage} className='button1' variant="outlined" ><strong>Ver Viagens</strong></Button>
        <Button onClick={goToLoginPage} className='button2' variant="outlined"><strong>Area do Admin</strong></Button>
      </ButtonStyle>

    </Container>
  )
}

export default HomePage