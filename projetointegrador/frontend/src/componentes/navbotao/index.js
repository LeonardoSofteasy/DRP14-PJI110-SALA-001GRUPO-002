
import React from "react";
import { NavbotaoCustomizado } from "./estilo";
const Navbotao=({
    id,
    type,
    ico,
    onClick,
    disabled
}
)=>{
    return(
        <NavbotaoCustomizado
        disabled={disabled}
        id={id}
        type={type}
        text={ico}
        onClick={onClick}
        >
        {ico}
        </NavbotaoCustomizado>
    )
}

export default Navbotao