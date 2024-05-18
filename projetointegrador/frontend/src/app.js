import React from 'react';
import styled from 'styled-components';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Routes from './routes';
import history from './history';
import { AuthProvider } from './Context/AuthContext';
import Estiloglobal from './estilos/global';



function App() {
  const StyledContainer = styled(ToastContainer)`
  // https://styled-components.com/docs/faqs#how-can-i-override-styles-with-higher-specificity
  &&&.Toastify__toast-container {
    width:400px;
    heght:50px;
    background-color:trasparent;
  }

  .Toastify__toast {
    heght:50px;
    background-color:#6ec285;
    box-shadow:0 4px 8px 0 #132544, 0 4px 8px 0 #132544;
    border:none;

  
  }
  .Toastify__toast-body {
    font-size:9pt;
    color:#000;
    width:100%;
    background-color:#6ec285;
    
  }
  .Toastify__progress-bar {
    margin-top:1px;
    background-color:red;
  }

`;
  return (
    <>
    
      <AuthProvider>
      <StyledContainer />
        <Estiloglobal/>
         <Router history={history}>       
        <Routes />
      </Router>
    </AuthProvider>
    </>
   
    
  );
}

export default App;
