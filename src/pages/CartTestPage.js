import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext.js';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import AddToCartButton from '../components/AddToCartButton.js';
import Button from '../components/Button.js';

// Mock product data
const testProduct = {
  id: 999,
  name: 'Test Product',
  price: 29.99,
  image: '/products_and_logo/1000006827.jpg',
  description: 'This is a test product for debugging the Add to Cart button.',
  rating: 4.5,
  reviewCount: 128,
  size: ['S', 'M', 'L'],
  inventory: 3,
  category: 'Test'
};

function CartTestPage() {
  const navigate = useNavigate();
  const { cartItems, totalItems, totalAmount } = useCart();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar showBackButton={true} />
      
      <main className="flex-grow p-6 bg-gray-50 min-h-screen">
        <h1 className="mb-6 text-center text-2xl font-bold text-gray-900">
          Cart Button Test Page
        </h1>
        
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Info */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Test Product</h2>
              <div className="mb-4">
                <img 
                  src={testProduct.image} 
                  alt={testProduct.name} 
                  className="w-full h-64 object-contain bg-gray-100 rounded-lg"
                />
              </div>
              <p className="text-gray-700 mb-4">{testProduct.description}</p>
              <p className="text-2xl font-bold text-gray-900">${testProduct.price.toFixed(2)}</p>
            </div>
            
            {/* Add to Cart Section */}
            <div>
              <h3 className="text-lg font-medium mb-4">Add to Cart Test</h3>
              
              {/* Test regular Button component */}
              <div className="mb-6">
                <h4 className="text-md font-medium mb-2">Regular Button Component:</h4>
                <Button variant="accent" size="lg" fullWidth={true}>
                  Regular Button
                </Button>
              </div>
              
              {/* Test AddToCartButton component */}
              <div className="mb-6">
                <h4 className="text-md font-medium mb-2">AddToCartButton Component:</h4>
                <AddToCartButton 
                  product={testProduct} 
                  size="lg"
                  fullWidth={true}
                  onAddToCart={() => console.log('Added to cart:', testProduct.name)}
                />
              </div>
              
              {/* Size selection */}
              <div className="mb-6">
                <h4 className="text-md font-medium mb-2">Size Selection:</h4>
                <div className="flex space-x-2">
                  {testProduct.size.map((size) => (
                    <button
                      key={size}
                      className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Cart Info */}
          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-medium mb-2">Cart Information</h3>
            <p>Total Items: {totalItems}</p>
            <p>Total Amount: ${totalAmount.toFixed(2)}</p>
            <div className="mt-2">
              <h4 className="font-medium">Cart Items:</h4>
              {cartItems.length === 0 ? (
                <p className="text-gray-500">Cart is empty</p>
              ) : (
                <ul className="list-disc pl-5">
                  {cartItems.map((item) => (
                    <li key={item.id}>
                      {item.name} - {item.quantity} x ${item.price.toFixed(2)}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <Button 
              variant="primary" 
              onClick={() => navigate('/products')}
            >
              Back to Products
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default CartTestPage;