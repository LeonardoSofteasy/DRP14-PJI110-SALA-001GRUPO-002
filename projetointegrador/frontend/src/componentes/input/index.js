import React from "react";
import { InputCustomizado } from "./estilo";
const Input=(
    {
        name,
        placeholder,
        onChange,
        value,
        type,
        required
    })=>{
    return(    
        <InputCustomizado
        name={name}
        value={value}
        required={required}
        placeholder={placeholder}
        onChange={onChange}
        type={type}
        />
        
    )
}

export default Input