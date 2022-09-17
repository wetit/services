import React from "react";
import './App.css';
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';


function App() {


  return(
  <ChakraProvider>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </ChakraProvider>)
   
}

export default App;
