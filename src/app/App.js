import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from '../context/CartContext.js';

// Lazy load components
const HomePage = React.lazy(() => import('../pages/HomePage.js'));
const EnhancedProductDetailPage = React.lazy(() => import('../pages/EnhancedProductDetailPage.js'));
const RedesignedProductListingPage = React.lazy(() => import('../pages/RedesignedProductListingPage.js'));
const ComponentShowcasePage = React.lazy(() => import('../pages/ComponentShowcasePage.js'));

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
  </div>
);

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="App bg-white">
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/product/:productId" element={<EnhancedProductDetailPage />} />
              <Route path="/products" element={<RedesignedProductListingPage />} />
              <Route path="/components" element={<ComponentShowcasePage />} />
            </Routes>
          </Suspense>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;