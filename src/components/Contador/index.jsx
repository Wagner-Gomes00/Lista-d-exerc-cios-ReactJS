import { useState } from "react";

export function Contador(){
    const [contador, setContador] =useState(0);

    const incrementar = () => {
        setContador (contador + 1);
        
    };

    const decrementar = () => {
        setContador (contador -1);
    };

    return( 
    <div> 
        <h1>Contador:{contador}</h1>
        <button onClick={incrementar}> Incrementar</button>
        <button onClick={decrementar}> Decrementar</button>
    </div>
    );

}

export default Contador;