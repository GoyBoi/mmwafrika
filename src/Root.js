import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './app/App.js';
import ProductListingPage from './pages/RedesignedProductListingPage.js';
import ProductDetailPage from './pages/ProductDetailPage.js';
import CartPage from './pages/CartPage.js';
import CheckoutPage from './pages/CheckoutPage.js';
import { CartProvider } from './context/CartContext.js';

function Root() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/products" element={<ProductListingPage />} />
          <Route path="/product/:productId" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default Root;