import styled from 'styled-components'
import imglogo from './imglogo/transferir.png'
import {FcLike} from 'react-icons/fc'
import {BiDislike} from 'react-icons/bi'
import axios from 'axios'

const MainContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
border: solid;
margin: 500px;
border-radius: 20px;
`

const Button = styled.div`
margin-left: -180px;
margin-top: 200px;


`

const ImgLogo = styled.img`
width: 300px;
` 
const App = () => {
  

  return (
    <MainContainer>
      <ImgLogo src={imglogo}/>
      <Button>       
       <button><FcLike size={30}/></button>
       <button><BiDislike size={30}/></button>
      </Button>
    </MainContainer>
  );
}

export default App;
