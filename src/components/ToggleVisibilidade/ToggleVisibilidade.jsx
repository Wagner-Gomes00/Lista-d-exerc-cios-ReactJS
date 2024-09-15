import react, { useState } from "react";

function ToggleVisibilidade(){
    const [visivel, setVisivel] = useState(false);

    const alternarVisibilidade =() => {
        setVisivel(!visivel);

    };

    return (
        <div>
            <button onClick={alternarVisibilidade}>
                {visivel ? 'esconder text' : 'mostrar text'} 
            </button>
            
            {visivel && <p>REACT É VIDA </p>}
        </div>
    );
}

export default ToggleVisibilidade;