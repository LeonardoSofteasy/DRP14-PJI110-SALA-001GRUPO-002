import React, { useContext } from 'react';
import { Context } from '../../Context/AuthContext';
import{useState}from'react'
import { Container,Form } from './estilo';
import Input from '../../componentes/input/index';
import Botao from '../../componentes/botao/index';
import notificacao from '../../utils';
const Login=()=>{
    const {handleLogin } = useContext(Context);
    const[userlogin,setLogin]=useState('')
    const[usersenha,setSenha]=useState('')


  
   return(
    <Container>
        <Form>
            <span>Faça seu Login</span>
            <Input
            name='Login'
            placeholder='Login'
            onChange={(e)=>setLogin(e.target.value)}
            type='text'
            required
            value={userlogin}/>

            <Input
            name='senha'
            placeholder='Senha'
            onChange={(e)=>setSenha(e.target.value)}
            type='password'
            required
            value={usersenha}/>
           <Botao
           type='button'
            text='Entrar'
            onClick={()=>{handleLogin(userlogin,usersenha)}}
             />
         
            
        </Form>
  
    </Container>
      
    )
}
export default Login