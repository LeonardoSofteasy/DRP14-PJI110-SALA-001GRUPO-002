import React, { useContext,useState,useEffect } from 'react';
import { SlControlEnd, SlControlForward, SlControlRewind, SlControlStart } from "react-icons/sl"; 
import { Context } from '../../Context/AuthContext';
import { Container,Form,GridContainer } from './estilo';
import Input from '../../componentes/input/index';
import Botao from '../../componentes/botao/index';
import Navbotao from '../../componentes/navbotao';
import { Th,Thead,Tr, Table, Tbody, Td } from '../../componentes/Grid/estilo'
import api from '../../api';
import notificacao from '../../utils';


const CadastroCliente=()=>{
    const[cliid,setCliid]=useState('')
    const[clinome,setNome]=useState('')
    const[cliendereco,setEndereco]=useState('')
    const[clicep,setCep]=useState('')
    const[clicidade,setCidade]=useState('')
    const[clicontato,setContato]=useState('')
    const[clicargo,setCargo]=useState('')
    const[cliemail,setEmail]=useState('')
    const[cliobs,setObs]=useState('')
    const[clisite,setSite]=useState('')
    const[climaps,setMaps]=useState('')
    const[atualiza,setAtualiza]=useState(0)
    const[clientesget,setClientes]=useState([])
    const[paginacao,setPaginacao]=useState({})
    const[desabilitabtcontrolef,setDesabilitabtcontrolef]=useState(false)
    const[desabilitabtcontrolev,setDesabilitabtcontrolev]=useState(true)
 /*   function notificacao(){
      toast.error('É necessário o preenchimento de um dos campos')
    }*/

    async function handleCadcli(
      cliid,   
      clinome,
     cliendereco,
          clicep,
       clicidade,
      clicontato,
        clicargo,
          cliobs,
        cliemail,
      cliwebsite,
         climaps,) {
          console.log(climaps.length)
     if(clinome.length<1&&cliendereco.length<1&&clicep.length<1&&clicidade.length<1&& clicontato.length<1&&clicargo.length<1&&cliobs.length<1&&cliemail.length<1&& cliwebsite.length<1&&climaps.length<1) {
      notificacao('Necesário o Preenchimento de no minimo um dos campos')
     }
     else
      {
            if(atualiza===0){ 
              
              await api.post              
              ('/cliente',
                {
                        nome:clinome,
                        endereco:cliendereco ,
                        cep:clicep,
                        cidade:clicidade ,
                        contato:clicontato,
                        cargo:clicargo,
                        obs:cliobs,
                        email:cliemail,
                        website: cliwebsite,                
                        maps: climaps
                },
              );
            }
            else{              
              await api.put('/cliente/'+cliid,{
                  nome:clinome,
                  endereco:cliendereco ,
                  cep:clicep,
                  cidade:clicidade ,
                  contato:clicontato,
                  cargo:clicargo,
                  obs:cliobs,
                  email:cliemail,
                  website: cliwebsite,                
                  maps: climaps
                },
              );
            }
      setAtualiza(0)
      window.location.reload()
   }
  }  

       async function handleEdit(id){
          
        const res=await api.get('/cliente/'+id);
     
    setCliid(id)  
    setNome(res.data.nome)
    setEndereco(res.data.endereco)
    setCep(res.data.cep)
    setCidade(res.data.cidade)
    setContato(res.data.contato)
    setCargo(res.data.cargo)
    setEmail(res.data.email)
    setObs(res.data.obs)
    setSite(res.data.website)
    setMaps(res.data.maps)
    setAtualiza(1)
    
  }
  const  handlePrimeiro= async ()=>{       
    const res=await api.get('/cliente?pagina=1');
    Math.ceil(res.data.paginacao.qtd_tot/10)<2?setDesabilitabtcontrolef(true):setDesabilitabtcontrolef(false)
    setDesabilitabtcontrolev(true)
    setClientes(res.data.clientes)
    setPaginacao(res.data.paginacao)      
}  
const  handleAnt= async ()=>{  
  const res=await api.get('/cliente?pagina='+paginacao.pag_ant);
    paginacao.pag_ant==1?setDesabilitabtcontrolev(true):setDesabilitabtcontrolev(false)
    setDesabilitabtcontrolef(false)
    setClientes(res.data.clientes)
    setPaginacao(res.data.paginacao)  
        
} 
const  handleProx= async ()=>{  
  
  const res=await api.get('/cliente?pagina='+paginacao.pag_nex);
    paginacao.pag_nex==Math.ceil(paginacao.qtd_tot/10)?setDesabilitabtcontrolef(true):setDesabilitabtcontrolef(false)
    setDesabilitabtcontrolev(false)
    setClientes(res.data.clientes)
    setPaginacao(res.data.paginacao)  
        
} 
const  handleult= async ()=>{  
  
  const res=await api.get('/cliente?pagina='+Math.ceil(paginacao.qtd_tot/10));
    setDesabilitabtcontrolef(true)
    setDesabilitabtcontrolev(false)
    setClientes(res.data.clientes)
    setPaginacao(res.data.paginacao)  
        
} 
    
    
    const  getClientes= async ()=>{  
     
        const res=await api.get('/cliente');
       
        if((res.data.clientes.length>0&&Math.ceil(res.data.paginacao.qtd_tot/10)<2)||res.data.clientes.length<1){
          setDesabilitabtcontrolef(true)
          setDesabilitabtcontrolev(true)
        } 
        else if(res.data.clientes.length>0){
     
          setDesabilitabtcontrolef(false)
          setDesabilitabtcontrolev(true)
        }
        setPaginacao(res.data.paginacao)
        setClientes(res.data.clientes)      
    }  
    useEffect(()=>{
      getClientes()
       },[setClientes]
    )

    const Grid=(
    
      {
         clientes
        
      })=>{
          
      const {handleDelete,handleLogout } = useContext(Context);
      return(    
          <Table>
              <Thead>
                  <Tr>
                 
                  </Tr>
              </Thead>
              <Tbody>
              
                  
                {clientes.map((item,i)=>{
                  return(
                      <Tr key={i}>                        
                         <Td>
                           <span id="nome">{item.nome}</span>                         
                           <span id="contato">{item.contato}</span>
                           <span id="contato"> {item.email} </span>    
                           <span id="contato"> <a href={item.website}>{item.website!=""?item.website:""}</a></span>                    
                          <br/> 
                          <span id="end">{item.endereco}</span>
                           <span id="comp"> {item.cep}</span>
                           <span id="comp"> {item.cidade} </span>
                           <span id="comp"> <a href={item.maps}>{item.maps!=""?"Localização":""}</a></span>
                           
                           
                            <span id="obs"><a id="asterisco">**</a> {item.obs} </span>
                            <span id="sbtns"><Botao
                                id="btns"
                                type='button'
                                 text='Editar'
                                 onClick={()=>{handleEdit(item.id)}}/>
                                 
                                 <Botao
                                id="btns" 
                                type='button'
                                text='Excluir'
                                onClick={()=>{handleDelete(item.id)
                                  window.location.reload()
                                  }}/>
                                  </span>
                          </Td>
                             
                      </Tr>
                      
                  )
                  })}
             <Tr id="trcontrole">
              <Td id="logout"><a id="logout" href="" onClick={()=>{handleLogout()}}>Sair</a></Td>
                <Td id="tdcontrole">
                    <Navbotao 
                    disabled={desabilitabtcontrolev}
                    id="bcontrole" 
                    type='button'
                    onClick={()=>{
                      handlePrimeiro()
                     
                      }}
                    ico={<SlControlStart id='icontrole'/>}/>
                    <Navbotao
                    id="bcontrole" 
                    disabled={desabilitabtcontrolev}
                    type='button'
                    onClick={()=>{
                                  handleAnt()
                                  }}
                    ico={<SlControlRewind id='icontrole'/>}/>
                    <Navbotao 
                    id="bcontrole" 
                    disabled={desabilitabtcontrolef}
                    type='button'
                    onClick={()=>{
                      
                      handleProx()
                      }}            ico={<SlControlForward id='icontrole'/>}/>          
                    <Navbotao 
                    id="bcontrole" 
                    disabled={desabilitabtcontrolef}
                    type='button'
                    onClick={()=>{                      
                        handleult()
                      }}
                      ico={<SlControlEnd id='icontrole'/>}/>
                </Td>
              </Tr>
            </Tbody>
  
          </Table>
          
      )
  }
    return(
   
    <Container>
       
        <Form>
            <span>CADASTRO DE CLIENTES</span>
            
            <Input
            name='Nome'
            placeholder='Name'
            value={clinome}
            onChange={(e)=>setNome(e.target.value)
            }
            type='text'/>
            
            <Input
            name='Endereco'
            placeholder='Adress'
            value={cliendereco}
            onChange={(e)=>setEndereco(e.target.value)}
            type='text'/>
            <Input
            name='Cep'
            placeholder='Postalcode'
            value={clicep}
            onChange={(e)=>setCep(e.target.value)}
            type='text'/>

            <Input
            name='Cidade'
            placeholder='City'
            value={clicidade}
            onChange={(e)=>setCidade(e.target.value)}
            type='text'/>
            <Input
            name='Contato'
            placeholder='Contact'
            value={clicontato}
            onChange={(e)=>setContato(e.target.value)}
            type='text'/>

            <Input
            name='Cargo'
            placeholder='Cargo'
            value={clicargo}
            onChange={(e)=>setCargo(e.target.value)}
            type='text'/>
                        <Input
            name='Email'
            placeholder='Email'
            value={cliemail}
            onChange={(e)=>setEmail(e.target.value)}
            type='text'/>

            <Input
            name='Outros'
            placeholder='Others'
            value={cliobs}
            onChange={(e)=>setObs(e.target.value)}
            type='text'/>

            <Input
            name='Site'
            placeholder='Website'
            value={clisite}
            onChange={(e)=>setSite(e.target.value)}
            type='text'/>
            <Input
            name='Mapas'
            placeholder='Maps'
            value={climaps}
            onChange={(e)=>setMaps(e.target.value)}
            type='text'/>
           <Botao
           type='button'
            text={atualiza==0?'Cadastrar':'Atualizar'}
            onClick={()=>{handleCadcli( cliid,clinome,
                cliendereco,
                     clicep,
                  clicidade,
                 clicontato,
                   clicargo,
                     cliobs,
                   cliemail,
                 clisite,
                    climaps,)
                   
                    }}
         />
         
        </Form>
        <GridContainer>
           <Grid clientes={clientesget}></Grid>
        </GridContainer>
    </Container>
    
      
    )
}
export default CadastroCliente