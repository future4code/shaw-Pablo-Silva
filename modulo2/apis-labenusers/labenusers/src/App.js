import React from "react";
import SignUpPage from "./Components/Cadastro";
import Users from "./Components/Usuarios";
import styled from "styled-components";

const Container = styled.div`
display: flex;
margin: 400px;
align-items: center;
`

const Background = styled.div`
display: flex;
justify-content: center;
background-image: url('https://img.freepik.com/vetores-gratis/fundo-de-tecnologia-digital-de-fio-de-rede_1017-27428.jpg?w=2000');
`
const Footer = styled.footer`
display: flex;
justify-content: right;
font-style: italic;
`
const ButtonBack = styled.div`
display: flex;
justify-content: center;
margin-bottom: 60px;

`



export default class App extends React.Component {
  state = {
    currentPage: "signUp"
  };

  changePage = () => {
    if (this.state.currentPage === "signUp") {
      this.setState({ currentPage: "users" });
    } else {
      this.setState({ currentPage: "signUp" });
    }
  };

  render() {
    return (

      <Background>
      <Container>
        <ButtonBack>
        <button onClick={this.changePage}>Voltar</button>
        </ButtonBack>
        <div>
        {this.state.currentPage === "signUp" ? <SignUpPage/> : <Users />}
        <Footer>
        <h3>Powered By: PbLRJ</h3>
      </Footer>
        </div>
      </Container>      
      </Background>
      
    );
  }
}



