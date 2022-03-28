import React from 'react'



function Etapa1() {
  return (
    <div className="Etapa1">    
    <div>
      <h1>ETAPA 1 - Dados gerais</h1>
        <div>
        <p>Qual seu nome ?</p>
        <input/>
      </div>
      <div>
        <p>Qual sua idade ?</p>
        <input/>
      </div>
      <div>
        <p>Qual seu e-mail ?</p>
        <input/>
      </div>
      <div>
        <p>Qual sua escolaridade ?</p>
        <select>
        <option>Ensino médio incompleto</option>
        <option>Ensino médio completo</option>
        <option>Ensino superior incompleto</option>
        <option>Ensino superior completo</option>
        </select>
        
      </div>
      </div>  
      
      
    </div>
  );
}

export default Etapa1;