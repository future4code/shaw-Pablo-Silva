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

const CreateTripPage = () => {
    return (
        <Container>
            <h1>Criar Viagem</h1>
            <input
                placeholder='Nome'
            />
            <select>
                <option>Escolha um planeta</option>
            </select>

            <input
                type='date'
            />

            <input
                placeholder='Descrição'
            />
            <input
                placeholder='Duração em dias'
            />

<ButtonStyle>
     <Button className='button1' variant="outlined"><strong>Voltar</strong></Button>
     <Button className='button2' variant="outlined"><strong>Criar</strong></Button>
 </ButtonStyle>
        </Container>
    )
}

export default CreateTripPage


