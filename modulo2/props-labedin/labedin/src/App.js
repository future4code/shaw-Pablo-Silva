import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import ImagemPessoal from './img/Eu.jpg'
import ImagemCaminhao from './img/caminhao.png'
import ImagemLiq from './img/liq.png'
import CardPequeno from './CardPequeno'
import ImagemEmail from './img/email.png'
import ImagemLoc from './img/locImg.jpg'



function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={ImagemPessoal}
          nome="Pablo Andrade" 
          descricao="Oi, eu sou o Pablo. Tenho 28 anos, casado e tenho 1 filho e atualmente em transição de carreira."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/37/37050.png" 
          texto="Ver mais"
        />

<CardPequeno
        imagem={ImagemEmail}
        emailEndereco="Email:"
        email="pabloandrade@labenu.com.br"
        ImagemLocalizacao={ImagemLoc}
        enderecoLoc="Endereço:"
        endereco="Rua Rio de Janeiro - RJ - Brasil"
        
        
        /> 
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={ImagemCaminhao}
          nome="Ultramax Transportes" 
          descricao="Motorista de caminhão"
          tempoDeCasa="De Outubro de 2020 até Dezembro de 2021"
        />
        
        <CardGrande 
          imagem={ImagemLiq}
          nome="Liq" 
          descricao="Suporte técnico Oi Velox e Oi Fixo"
          tempoDeCasa="Outubro 2015 até Setembro de 2016"
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />         

      </div>
    </div>
  );
}

export default App;
