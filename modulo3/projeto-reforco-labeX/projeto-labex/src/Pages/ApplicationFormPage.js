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

const ApplicationFormPage = () => {

    const navigate = useNavigate()

    const goToBack = () => {
        navigate(-1)
    }


  return (
    <Container>
        <h1>Inscreva-se para uma viagem</h1>
        <select>
             <option>
                 Escolha uma viagem
             </option>
             
        </select>
         <input
         placeholder='Nome'
         />
          <input
         placeholder='Idade'
         />

<input
         placeholder='Texto de candidatura'
         />

<input
         placeholder='Profissão'
         />

<select>
             <option>
                Escolha um país
             </option>
             
        </select>

 <ButtonStyle>
     <Button onClick={goToBack} className='button1' variant="outlined"><strong>Voltar</strong></Button>
     <Button className='button2' variant="outlined"><strong>Enviar</strong></Button>
 </ButtonStyle>
    </Container>
  )
}

export default ApplicationFormPage