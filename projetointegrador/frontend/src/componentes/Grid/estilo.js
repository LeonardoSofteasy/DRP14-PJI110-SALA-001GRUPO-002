
import styled from "styled-components"

export const Table=styled.table`
color:#000;
border-spacing: 10px;
background-color:transparent;
width:90%;

margin:5px auto;
`
export const Thead=styled.thead`

border: 1px solid;
`
export const Tr=styled.tr`
border: 1px solid #000;
#trcontrole{
    border: none;
    background-color:transparent;
}
#logout{
    
    bacKground-color:transparent;
    box-shadow:none;
    border:none;
    a{
        font-size:22pt;
        background-color:transparent;            
           
    }
    a:link{
        text-decoration:none;
    }
    a:visited{
        color:blue;
    }
    a:hover{
        text-decoration:underline;
    }
}
#tdcontrole{
    display:flex;
    width:100%;
    margin-top:10px;
    justify-content:end;
    
    border: none;
    box-shadow:none;
    align-items:center;    
    background-color:transparent;
}
#bcontrole{
    margin-right:5px;
    border:none;
    width:20px;
    background-color:transparent;
}
#icontrole{
    border:none;
    width:100%;
    height:100%
}

`
export const Th=styled.th`
font-size:8pt;
text-allign:start;
border: 1px solid #000;
border-buttom:inset;
padding-buttom:5px`;
export const Tbody=styled.tbody`
border: 1px solid #000;

`
export const Td=styled.td`
margin-bottom:10px;
height:10px;
background-color:#6ec285;
box-shadow:0 4px 8px 0 #132544, 0 4px 8px 0 #132544;
border-radius:20px;

span{
    a{
        background-color:#6ec285;            
           
    }
    a:link{
        text-decoration:none;
    }
    a:visited{
        color:blue;
    }
    a:hover{
        text-decoration:underline;
    }

   
    background-color:#6ec285;

}

#nome{
    display: inline-block;
    margin-top:7px;
    margin-left:7px;
    align-items:top;
    border:none;
    width:34%;
    height:15px;
    font-size: 12pt;
    font-weight:bold;
    
}

#contato{
    display: inline-block;
    text-align:center;
    justfy-content:center;
    border:none;
    width:21%;
    height:15px;
    font-size: 10pt;
}

#end{
    margin-left:7px;
    display: inline-block;
    text-align:left;
    justfy-content:top;
    border:none;
    width:34%;
    height:15px;
    font-size: 10pt;
}
#comp{
    display: inline-block;
    text-align:center;
    justfy-content:top;
    border:none;
    width:21%;
    height:15px;
    font-size: 10pt;
}

#obs{
    display: inline-block;
    margin-left:7px;
    margin-bottom:7px;

    text-align:left;
    justify-content:top;
    border:none;
    width:80%;
    height:30px;
    font-size: 8pt;
    #asterisco{
        background-color:#6ec285;

        font-size:11pt;
    }
}

#sbtns{   
    display: inline-block;
    text-align:left;
    padding-top:10px;
    width:15%;
    height:40px;
    font-size: 10pt;
}

#btns{
    
    border:3px solid border:3px solid #6ec285;;
    
    width:50%;
    height:80%;
    
}
.last{   
    display: inline-block;
    width:100%;
   
    border:none;

}




`