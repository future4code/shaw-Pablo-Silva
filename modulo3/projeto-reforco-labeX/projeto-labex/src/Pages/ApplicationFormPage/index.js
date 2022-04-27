import React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom'
import { ButtonStyle, Container } from './style';
import { Select, MenuItem } from '@mui/material';
import { useState } from 'react';
import { goToBack } from '../../Routes/coordinator';



const ApplicationFormPage = () => {

  const [course, setCourse] = useState('')
 
  const updateSelectValue = (event) => {
    setCourse(event.target.value)
  }

  const navigate = useNavigate()

  

  return (
    <Container>
      <h1>Inscreva-se para uma viagem</h1>

      <Select value={course}
      displayEmpty
      onChange={updateSelectValue}
       >
        <MenuItem value='' disabled>Selecione uma viagem</MenuItem>
        <MenuItem value={1}>Teste1</MenuItem>
        <MenuItem value={2} >Teste2</MenuItem>
        <MenuItem value={3} >Teste3</MenuItem>
      </Select>

      <TextField id="standard-basic" label="Nome" variant="standard" />
      <TextField id="standard-basic" label="Idade" variant="standard" />

      <TextField id="standard-basic" label="Texto de candidatura" variant="standard" />

      <TextField id="standard-basic" label="Profissão" variant="standard" />

      <Select value={course} 
      displayEmpty
      onChange={updateSelectValue}>
        <MenuItem value='' disabled>Escolha um país</MenuItem>
        <MenuItem value={1}>Teste1</MenuItem>
        <MenuItem value={2} >Teste2</MenuItem>
        <MenuItem value={3} >Teste3</MenuItem>

      </Select>

      <ButtonStyle>
        <Button onClick={() => goToBack(navigate)} className='button1' variant="outlined"><strong>Voltar</strong></Button>
        <Button className='button2' variant="outlined"><strong>Enviar</strong></Button>
      </ButtonStyle>



    </Container>
  )
}

export default ApplicationFormPage