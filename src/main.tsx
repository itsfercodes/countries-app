import React from 'react';
import ReactDOM from 'react-dom/client';
import CountriesApp from './CountriesApp.tsx';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CountriesApp />
  </React.StrictMode>
);
