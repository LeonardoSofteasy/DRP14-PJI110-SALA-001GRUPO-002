
import styled from "styled-components"

export const InputCustomizado=styled.input`
padding:10px;

color:#000;
font-size:16px;
background-color:transparent;
border:none;
border-bottom:2px solid #132544 ;
passing:16px 20px;
width:100%;
max-width:450px;
height:5px;
&::placeholder {
    color: #132544;
    opacity:0.7;
}
&:focus {
    outline: none;
    box-shadow: 0px 0px 0px ;
}


 


`