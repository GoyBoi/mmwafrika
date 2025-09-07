import React from 'react';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import ProductActionButtons from '../components/ProductActionButtons.js';

function TestPage() {
  // Mock product data
  const product = {
    id: 1,
    name: 'Test Product',
    price: 29.99,
    originalPrice: 39.99,
    image: '/products_and_logo/1000006827.jpg',
    description: 'This is a test product for verifying the ProductActionButtons component.',
    rating: 4.5,
    reviewCount: 128,
    isNew: true,
    addedDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // Added 2 days ago
    salesCount: 128
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Component Test Page</h1>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-md">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Product Action Buttons Test</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Small size */}
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Small Size</h3>
                <ProductActionButtons 
                  product={product} 
                  size="sm"
                  fullWidth={true}
                />
              </div>
              
              {/* Medium size */}
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Medium Size</h3>
                <ProductActionButtons 
                  product={product} 
                  size="md"
                  fullWidth={true}
                />
              </div>
              
              {/* Large size */}
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Large Size</h3>
                <ProductActionButtons 
                  product={product} 
                  size="lg"
                  fullWidth={true}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default TestPage;