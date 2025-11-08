import React from 'react';
import ReactDOM from 'react-dom/client';
// Importa o seu CSS principal (se você tiver um)
// import './index.css'; 

// Importa o Chefe
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);