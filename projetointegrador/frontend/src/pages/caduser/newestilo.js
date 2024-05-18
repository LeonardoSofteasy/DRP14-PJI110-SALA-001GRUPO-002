import styled from "styled-components";

export const Container=styled.div`
display:fixed;
justify-content:center;
align-items:center;

background-image: radial-gradient(circle, #ffc24d , #ffc24d , #ffc24d  ,#ffc24d );
`

export const Form=styled.form
`

margin-top 20px;
display:flex;
padding:10px 3rem;
flex-direction:column;
justify-content:center;
align-items:center;
background-color:transparent;
border:none;
border-radius:5px;
width:100%;

gap:5px 0px;

span{
font-size:14pt;
color:#132544;
}


`
export const GridContainer=styled.div
`
display:flex;
align-items:left;
justify-content:center;
flex-direction:column;
background-color:transparent;
border:none;
width:100%;
gap:5px 0px;
span{
font-size:20pt;
color:#132544;
}


`