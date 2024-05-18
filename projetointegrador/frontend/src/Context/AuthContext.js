import React, { createContext} from 'react';

import useAuth from './hooks/useAuth';

const Context = createContext();

function AuthProvider({ children }) {
  const {
    authenticated,
     loading,
     trocadasenha, 
     handleLogin, 
     handleLogout,
     //handleCaduser,
    // handleCadcli,
     handleDelete
     
  } = useAuth();

  return (
    <Context.Provider value={{ 
      loading, 
      authenticated, 
      trocadasenha,
      handleLogin, 
      handleLogout,
   //   handleCaduser,
  //    handleCadcli,
      handleDelete
      }}>
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };
