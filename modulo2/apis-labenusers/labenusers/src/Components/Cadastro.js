import React from "react";
import axios from "axios";
import styled from "styled-components";

const ContainerInput = styled.div`

`

export default class SignUpPage extends React.Component {
  state = {
    name: "",
    email: ""
  };

  handleNameChange = event => {
    const newNameValue = event.target.value;

    this.setState({ name: newNameValue });
  };

  handleEmailChange = event => {
    const newEmailValue = event.target.value;

    this.setState({ email: newEmailValue });
  };

  handleCreateUser = () => {
    const axiosConfig = {
      headers: {
        Authorization: "Pablo-Andrade-Shaw"
      }
    };

    const body = {
      name: this.state.name,
      email: this.state.email
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        axiosConfig
      )
      .then(() => {
        alert(`Usuário ${this.state.name} criado com sucesso :)`);
        this.setState({ name: "", email: "" });
      })
      .catch(error => {
        alert("Erro ao criar o usuário, tenta novamente :(");
      });
  };

  render() {
    return (
      <ContainerInput>
      <div>
        <input
          placeholder="Nome"
          type="text"
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <input
          placeholder="E-mail"
          type="email"
          value={this.state.email}
          onChange={this.handleEmailChange}
        />
        <button onClick={this.handleCreateUser}>Cadastrar</button>
      </div>
      </ContainerInput>
    );
  }
}

