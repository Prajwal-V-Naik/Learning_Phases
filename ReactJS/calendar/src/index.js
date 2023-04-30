import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Something from './Something'; 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Something/>
  </React.StrictMode>
);
