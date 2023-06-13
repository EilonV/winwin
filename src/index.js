import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './root-cmp';
import { BrowserRouter } from 'react-router-dom'
import './assets/scss/styles.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
