import React from "react";
import './CardPequeno.css';

function CardPequeno(props) {
    return (
        <div>
            <div className="ContainerEmail">
                <h4>{props.emailEndereco}</h4>
                <p>{props.email}</p>
                <img id="imagemEmail" src={props.imagem} />

            </div>
            <div className="ContainerLoc">
                <h4>{props.enderecoLoc}</h4>

                <p>{props.endereco}</p>
                <img id="imagemLoc" src={props.ImagemLocalizacao} />
            </div>




        </div>


    )
}

export default CardPequeno