
import React from "react";
import { BotaoCustomizado } from "./estilo";
const Botao=({
    id,
    type,
    text,
    onClick,
}
)=>{
    return(
        <BotaoCustomizado
        id={id}
        type={type}
        text={text}
        onClick={onClick}
        >
        {text}
        </BotaoCustomizado>
    )
}

export default Botao