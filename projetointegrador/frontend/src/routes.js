import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Context } from './Context/AuthContext';

import Login from './pages/login/index';
import Cadusuario from './pages/caduser/index';
import Cadcliente from './pages/cadastro/index';

function CustomRoute({ isPrivate,isBlock, ...rest }) {
  const { loading, authenticated, trocadasenha } = useContext(Context);

  if (loading) {
    return <h1>Loading...</h1>;
  }


  if (isPrivate && !authenticated) {
    return <Redirect to="/login" />
  }
  
  if (isPrivate && isBlock &&authenticated&&trocadasenha==1) {
    return <Redirect to="/cliente" />
  }
  

  return <Route {...rest} />;
}

export default function Routes() {
  return (
    <Switch>
      <CustomRoute exact path="/login" component={Login} />
      <CustomRoute   path="/cliente"  isPrivate component={Cadcliente} />
      <CustomRoute   path="/usuario" isPrivate  isBlock component={Cadusuario} />
    </Switch>
  );
}