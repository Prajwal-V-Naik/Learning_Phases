import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MyCalendar from './MyCalendar'; 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <MyCalendar/>
  </React.StrictMode>
);
