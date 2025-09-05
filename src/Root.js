import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext.js';

// Lazy load all components
const App = React.lazy(() => import('./app/App.js'));
const ProductListingPage = React.lazy(() => import('./pages/RedesignedProductListingPage.js'));
const ProductDetailPage = React.lazy(() => import('./pages/EnhancedProductDetailPage.js'));
const CartPage = React.lazy(() => import('./pages/CartPage.js'));
const CheckoutPage = React.lazy(() => import('./pages/CheckoutPage.js'));
const ComponentTestPage = React.lazy(() => import('./pages/ComponentTestPage.js'));
const HomePage = React.lazy(() => import('./pages/HomePage.js'));
const SearchResultsPage = React.lazy(() => import('./pages/SearchResultsPage.js'));

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
  </div>
);

function Root() {
  return (
    <CartProvider>
      <Router>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductListingPage />} />
            <Route path="/product/:productId" element={<ProductDetailPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/test" element={<ComponentTestPage />} />
            <Route path="/search" element={<SearchResultsPage />} />
          </Routes>
        </Suspense>
      </Router>
    </CartProvider>
  );
}

export default Root;