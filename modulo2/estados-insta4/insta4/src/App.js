import { render } from '@testing-library/react';
import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const EstiloDoPost = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  > input{    
    display: flex;
    align-items: flex-end;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    border-radius: 50px;
  };

  > button{
    display: flex;
    border-radius: 10px;
  }


`


const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state = {
    pessoas: [
      {
        nome: 'Helen',
        foto: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150',
      },


      {
        nome: 'Francisco',
        foto: 'https://picsum.photos/50/80',
        fotoPost: 'https://picsum.photos/200/151',
      },


      {
        nome: 'Paulinho',
        foto: 'https://picsum.photos/50/60',
        fotoPost: 'https://picsum.photos/200/152',
      },


    ],
    valorInputPessoa: "",
    valorInputFoto: "",
    valorInputFotoPost: ""
  }

  adicionaPessoa = () => {
    const novaPessoa = {
      nome: this.state.valorInputPessoa,
      foto: this.state.valorInputFoto,
      fotoPost: this.state.valorInputFotoPost
    }
    const novoPessoas = [...this.state.pessoas, novaPessoa];
    this.setState({
      pessoas: novoPessoas,
      valorInputFoto: "",
      valorInputFotoPost: "",
      valorInputPessoa: ""
    });
  };

  onChangeInputFoto = (event) => {
    this.setState({ valorInputFoto: event.target.value })
  };

  onChangeInputFotoPost = (event) => {
    this.setState({ valorInputFotoPost: event.target.value })
  };

  onChangeInputPessoa = (event) => {
    this.setState({ valorInputPessoa: event.target.value })
  }



  render() {
    const novoUsuario = this.state.pessoas.map((pessoa) => {
      return (
        <Post fotoUsuario={pessoa.foto} fotoPost={pessoa.fotoPost} nomeUsuario={pessoa.nome} />
      )

    })
    return (
      <MainContainer>
        <EstiloDoPost>
          <input

            value={this.state.valorInputPessoa}
            onChange={this.onChangeInputPessoa}
            placeholder={"Nome"}
          />
          <input

            value={this.state.valorInputFoto}
            onChange={this.onChangeInputFoto}
            placeholder={"foto"}
          />
          <input

            value={this.state.valorInputFotoPost}
            onChange={this.onChangeInputFotoPost}
            placeholder={"fotoPost"}
          />
          <button onClick={this.adicionaPessoa}>Adicionar</button>
        </EstiloDoPost>

        {novoUsuario}
      </MainContainer>
    )
  }
}













export default App

