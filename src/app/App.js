import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from '../context/CartContext.js';
import { WishlistProvider } from '../context/WishlistContext.js';

// Lazy load components
const HomePage = React.lazy(() => import('../pages/HomePage.js'));
const EnhancedProductDetailPage = React.lazy(() => import('../pages/EnhancedProductDetailPage.js'));
const RedesignedProductListingPage = React.lazy(() => import('../pages/RedesignedProductListingPage.js'));
const ComponentShowcasePage = React.lazy(() => import('../pages/ComponentShowcasePage.js'));
const CartPage = React.lazy(() => import('../pages/CartPage.js'));
const CheckoutPage = React.lazy(() => import('../pages/CheckoutPage.js'));
const CartTestPage = React.lazy(() => import('../pages/CartTestPage.js'));
const WishlistPage = React.lazy(() => import('../pages/WishlistPage.js'));
const TestPage = React.lazy(() => import('../pages/TestPage.js'));

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
        <WishlistProvider>
          <div className="App bg-white">
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/product/:productId" element={<EnhancedProductDetailPage />} />
              <Route path="/products" element={<RedesignedProductListingPage />} />
              <Route path="/components" element={<ComponentShowcasePage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/cart-test" element={<CartTestPage />} />
              <Route path="/wishlist" element={<WishlistPage />} />
              <Route path="/test" element={<TestPage />} />
            </Routes>
            </Suspense>
          </div>
        </WishlistProvider>
      </CartProvider>
    </Router>
  );
}

export default App;