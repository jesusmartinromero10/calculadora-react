import React from "react";
import '../styles/style-clear.css'


const BottonClear = (props) => (
    <div className="botton-clear" onClick= {props.handClear} >
        {props.children}
    </div>
)

export default BottonClear;