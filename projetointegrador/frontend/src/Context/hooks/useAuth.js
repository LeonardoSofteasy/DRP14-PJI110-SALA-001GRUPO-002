import { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import bcrypt from 'bcryptjs'
import api from '../../api';
import history from '../../history';
import notificacao from '../../utils';

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [trocadasenha,setTrocadasenha]=useState(0)

  
  async function trocousenha(){
    const res = await api.get('/usuario/1')
    setTrocadasenha(res.data.trocasenha)
  }
  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
    }

    setLoading(false);
    trocousenha()
  }, []);
  
  async function handleLogin(login,senha) {
    if(login.length<1&&senha.length<1){
      return notificacao('Necessário preencher o campo Login e Senha');
    }
    else if(login.length<1){
      return notificacao('Necessário preencher o campo Login');
    }
    else if(senha.length<1){
      return notificacao('Necessário preencher o campo Senha');
      
    }
    const res = await api.get('/usuario/1')
    setTrocadasenha(res.data.trocasenha)
    //console.log(login+"-"+res.data.username+"-"+senha+"-"+res.data.password)
    const checkpass=await bcrypt.compare(senha,res.data.password_hash)
    
   // console.log(res.data)
    if(login!=res.data.username||!checkpass){
      return notificacao('usuario ou senha invalido')
    }
    const { data: { token } } = await api.post('/sessao',{
      username:login,
      password:senha
    });


    localStorage.setItem('token', JSON.stringify(token));
    api.defaults.headers.Authorization = `Bearer ${token}`;
    setAuthenticated(true);
    trocadasenha==0?history.push('/usuario'):history.push('/cliente')
    
  }
  async function handleDelete(id) {


    await api.put('/cliente/delete/'+id);
    window.location.reload()
     
   }


  
 

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem('token');
    api.defaults.headers.Authorization = undefined;
    history.push('/login');
  }

  
  return { 
    authenticated, 
    loading, 
    trocadasenha,
    handleLogin, 
    handleLogout,
   // handleCaduser,
   // handleCadcli,
    handleDelete
     };
}