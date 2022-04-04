import React from 'react'
import './App.css';
import Etapa1 from './Components/Etapa1';
import Etapa2 from './Components/Etapa2';
import Etapa3 from './Components/Etapa3';
import Final from './Components/Final';
import {ContainerPai} from './Components/style';

export default class App extends React.Component {
  state = {
    etapa: 1,
  }
  mudaPagina = () => {
    this.setState({etapa: this.state.etapa +1})
  }  
 

  render() {

    const renderizaEtapa = () => {
      let renderiza;
      switch (this.state.etapa) {

        case 1:
           renderiza = <Etapa1 />;
          break;

        case 2:
          renderiza = <Etapa2 />;
          break;

        case 3:
          renderiza = <Etapa3 />;
          break;

        case 4:
          renderiza = <Final />;
          break;

        default:
          renderiza=<Etapa1/>
          break;

      }
      return renderiza

    }
    

    return (
      <ContainerPai>
        <div>
          {renderizaEtapa()}
          <button onClick={this.mudaPagina}>Próxima etapa</button>
        </div>

        </ContainerPai>

    );
  }
}


