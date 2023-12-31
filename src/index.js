import React from 'react';
// import ReactDOM from 'react-dom/client'; <- This import is only for React version 18
import { render } from 'react-dom'; // <- This is the correct import statement for React version 17
import App from './App';
import { BrowserRouter } from 'react-router-dom'

// const root = ReactDOM.createRoot(document.getElementById('root'));
const root = document.getElementById('root'); // <- This is the correct method call for React version 17
render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  root
);