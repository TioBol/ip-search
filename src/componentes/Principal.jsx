import React, { useState, useEffect } from "react";
import '../hojasDeEstilo/Principal.css';
import { AiOutlineRight } from "react-icons/ai";
import Shower from "./Shower";

const Principal = () => {
    
    const [significados,setSignificados] = useState(null);

    const pedido = async () => {
        const peticion = await (await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/hello')).json();
        setSignificados(peticion[0].meanings)
        
    };

    useEffect(()=>{
        pedido()
    },[])
    
    
    const enviar = ( ) => {
        alert('enviando...')
    }
    return(
        <div className="principal">
            <div className="arriba">
                <h3>IP Address Tracker</h3>
                <div className="input-y-submit">
                    <input type='text' placeholder='search for any IP address or domain'>
                    </input>
                    
                    <button onClick = { enviar } >
                        <AiOutlineRight className='enviar'/>                    
                    </button>
                </div>
            </div>
               <Shower />
             <div className="show">

            </div>
            <div className="abajo">
                <>
                { significados !== null ? (''):('')}
                
                </>
            </div>
        </div>
    );
}

export default Principal;