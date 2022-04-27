import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ButtonStyle, Container } from './style';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { Select, MenuItem} from '@mui/material';
import { goToBack } from '../../Routes/coordinator';



const CreateTripPage = () => {

    const [course, setCourse] = useState('')

    const updateSelectValue = (event) => {
        setCourse(event.target.value)
    }

    const navigate = useNavigate()

    

    return (
        <Container>
            <h1>Criar Viagem</h1>
            <TextField id="standard-basic" label="Nome" variant="standard" />
            <Select value={course}
             displayEmpty
             onChange={updateSelectValue}>            

                <MenuItem value='' disabled>Escolha um planeta</MenuItem>
                <MenuItem value={1} disable>Teste1</MenuItem>
                <MenuItem value={2} disable>Teste2</MenuItem>

            </Select>

            <TextField type='date' id="standard-basic" variant="standard" />

            <TextField id="standard-basic" label="Descrição" variant="standard" />

            <TextField id="standard-basic" label="Duração em dias" variant="standard" />

            <ButtonStyle>
                <Button onClick={() => goToBack(navigate)} className='button1' variant="outlined"><strong>Voltar</strong></Button>
                <Button className='button2' variant="outlined"><strong>Criar</strong></Button>
            </ButtonStyle>
        </Container>
    )
}

export default CreateTripPage


