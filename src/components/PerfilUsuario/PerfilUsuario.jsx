import React from 'react';
import './styles.css';  
import perfilFoto from './img/junior.jpg';  

function PerfilUsuario(props) {
    return (
        <div className="perfil-container">
            <img src={props.foto || perfilFoto} alt="Foto do Usuário" className="perfil-foto" />
            <h2>{props.nome}</h2>
            <p>Idade: {props.idade}</p>
        </div>
    );
}

export default PerfilUsuario;
