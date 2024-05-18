import React, { useContext } from 'react';
import{useState,useEffect}from'react'
import { Container,Form } from './estilo';
import Input from '../../componentes/input/index';
import Botao from '../../componentes/botao/index';
import history from '../../history';
import api from '../../api';
const CadastroUsuario=()=>{
    const[usernome,setNome]=useState('')
    const[useremail,setEmail]=useState('')
    const[userlogin,setLogin]=useState('')
    const[userOldpass,SetuserOldpass]=useState('')
    const[userpass,Setuserpass]=useState('')
    const[userConfirmpass,SetuserConfirmpass]=useState('')
    


    const  getClientes= async ()=>{  
     
        const res=await api.get('/usuario/1');
       setNome(res.data.nome)
       setEmail(res.data.email)
       setLogin(res.data.username)
            
    }  
    useEffect(()=>{
      getClientes()
       },[]
    )
    async function handleCaduser(
        usernome,
        useremail,
        userlogin,
        usersenhaantiga,
        usersenhanova,
        usersenhaconfirma,
         ) {
            
                await api.put              
                ('/usuario/1',
                  {       nome:usernome,
                          email:useremail ,
                          username:userlogin,
                          oldpassword:usersenhaantiga ,
                          password:usersenhanova ,
                          confirmpassword:usersenhaconfirma,
                          trocasenha:1                   
                          
                  },
                );
                
              history.push('/login')
        
     
    } 

    return(
        
    <Container>
        <Form>
        <span>USUARIO</span>
            <Input
            name='Nome'
            placeholder='Nome'
            requied={true}
            value={usernome}
            onChange={(e)=>setNome(e.target.value)}
            type='text'/>

            <Input
            name='Email'
            placeholder='Email'
            requied={true}
            value={useremail}
            onChange={(e)=>setEmail(e.target.value)}
            type='email'/>
                        <Input
            name='Usuario'
            placeholder='Login'
            requied={true}
            value={userlogin}
            onChange={(e)=>setLogin(e.target.value)}
            type='text'/>
           <Input
            name='Senhaantiga'
            placeholder='Old Password'
            requied={true}
            value={userOldpass}
            onChange={(e)=>SetuserOldpass(e.target.value)}
            type='password'/>
             <Input
            name='Senha'
            placeholder='Password'
            requied={true}
            value={userpass}
            onChange={(e)=>Setuserpass(e.target.value)}
            type='password'/>
            <Input
            name='Senha'
            placeholder='Confirm Password'
            requied={true}
            value={userConfirmpass}
            onChange={(e)=>SetuserConfirmpass(e.target.value)}
            type='password'/>
            


           <Botao
           type='button'
           text='CONFIRMA'
           onClick={()=>{handleCaduser(usernome,useremail,userlogin,userOldpass,userpass,userConfirmpass)
}}
             />
            
        </Form>
    </Container>
      
    )
}
export default CadastroUsuario