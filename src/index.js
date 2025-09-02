import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { CartProvider } from './context/CartContext.js';
import Root from './Root.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
      <Root />
    </CartProvider>
  </React.StrictMode>
);