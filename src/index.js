import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import App from './App';

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    overflow-x: hidden;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
