import React from 'react'
import styled from 'styled-components'
import Button from '@mui/material/Button'

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





const ListTripsPage = () => {
    return (
        <Container>
            <ButtonStyle>
                <Button className='button1' variant="outlined"><strong>Voltar</strong></Button>
                <Button className='button2' variant="outlined"> <strong>Inscrever-se</strong></Button>
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