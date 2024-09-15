import React, { useState } from 'react';
import './styles.css';  

function BotaoTrocaCor() {    
    const [corDeFundo, setCorDeFundo] = useState('red');
    
    const trocarCor = () => {
        setCorDeFundo(corDeFundo === 'red' ? 'black' : 'red');
    };

    return (
        <div className="container" style={{ backgroundColor: corDeFundo }}>
            <p>A cor de fundo é {corDeFundo}</p>
            <button onClick={trocarCor}>Trocar Cor</button>
        </div>
    );
}

export default BotaoTrocaCor;
