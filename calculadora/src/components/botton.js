import React from "react"; 
import '../styles/style-botton.css'

function Botton (props) {

  const esOperador = valor => {
   return isNaN(valor) && (valor !== '.') && (valor !== '=');
  };
    return (
        <div className= {`botton-container ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}>
          {props.children}

        </div>




    )
}

export default Botton;