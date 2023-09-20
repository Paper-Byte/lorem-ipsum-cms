import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import App from './App';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import customTheme from './styles/customTheme/customTheme';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ChakraProvider theme={customTheme}>
    <ColorModeScript initialColorMode={'light'} />
    <App />
  </ChakraProvider>
);
