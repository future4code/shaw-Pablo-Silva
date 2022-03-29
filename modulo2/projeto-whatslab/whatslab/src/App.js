import React from "react";
import styled from "styled-components";
import './App.css'

const Estilizacao = styled.div`
  max-width: 600px;
  border: 3px solid black;
  flex: 1 1 0%;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  background-image: url(https://i.pinimg.com/736x/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg);
`
const EstiloMain = styled.main`
display: flex;
justify-content: center;
align-items: center;

`

const DivPai = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
height: 100vh;
`






class App extends React.Component {
  state = {

    pessoas: []
    ,

    valorInputNome: "",
    valorInputMensagem: ""
  };

  adicionaPessoa = () => {

    const novaPessoa = {

      Nome: this.state.valorInputNome,

      Mensagem: this.state.valorInputMensagem,

    };


    const novoPessoas = [...this.state.pessoas, novaPessoa];


    this.setState({
      pessoas: novoPessoas,
      valorInputMensagem: "",
      valorInputNome: "",

    });
  };





  onChangeInputNome = (event) => {

    this.setState({ valorInputNome: event.target.value });
  };

  onChangeInputMensagem = (event) => {

    this.setState({ valorInputMensagem: event.target.value });
  };

  render() {

    const listaDeComponentes = this.state.pessoas.map((pessoa) => {
      return (
        <p>
          <strong>{pessoa.Nome}</strong>: {pessoa.Mensagem}
        </p>
      );
    });

    return (
      <DivPai>
        <Estilizacao>

          <h1>WhatsLab</h1>

          <EstiloMain >

            <input             

              value={this.state.valorInputNome}
              onChange={this.onChangeInputNome}
              placeholder={"Nome"}

            />
            <input             

              value={this.state.valorInputMensagem}
              onChange={this.onChangeInputMensagem}
              placeholder={"Mensagem"}

            />

            <button

              onClick={this.adicionaPessoa}><strong>Enviar Mensagem</strong>             
      

            </button>

          </EstiloMain>
          <div>{listaDeComponentes}</div>
        </Estilizacao>
      </DivPai>
    );
  }
}

export default App;
