import React, {useState} from "react";
function CaixaDeTexto(){
    const [texto, setTexto] = useState('');

    const handleChange= (Event) => {
        setTexto(Event.target.value);
    };

    return(
        <div>
            <input
            type="text"
            placeholder="Digite..."
            value={texto}
            onChange={handleChange}
            />
            <p>Voce esta digitando: {texto} </p>

        </div>
    );
}
export default CaixaDeTexto;