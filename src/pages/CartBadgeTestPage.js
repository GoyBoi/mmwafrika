import React from 'react';
import { useCart } from '../context/CartContext.js';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import ShoppingCartIcon from '../components/ShoppingCartIcon.js';

function CartBadgeTestPage() {
  const { cartItems, totalItems, totalAmount } = useCart();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar showBackButton={true} />
      
      <main className="flex-grow p-6 bg-gray-50 min-h-screen">
        <h1 className="mb-6 text-center text-2xl font-bold text-gray-900">
          Cart Badge Test Page
        </h1>
        
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Test Information */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Cart Information</h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Total Items:</strong> {totalItems}</p>
                <p className="text-gray-700 mb-2"><strong>Total Amount:</strong> ${totalAmount.toFixed(2)}</p>
                <p className="text-gray-700"><strong>Cart Items:</strong> {cartItems.length}</p>
              </div>
              
              <h3 className="text-lg font-medium mt-6 mb-3">Cart Items:</h3>
              {cartItems.length === 0 ? (
                <p className="text-gray-500 italic">Cart is empty</p>
              ) : (
                <ul className="list-disc pl-5 space-y-2">
                  {cartItems.map((item) => (
                    <li key={item.id} className="text-gray-700">
                      {item.name} - Quantity: {item.quantity} - ${item.price.toFixed(2)} each
                    </li>
                  ))}
                </ul>
              )}
            </div>
            
            {/* Test the Cart Badge */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Cart Badge Test</h2>
              <div className="flex flex-col items-center justify-center space-y-6 bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700">This is the cart badge in isolation:</p>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <ShoppingCartIcon />
                </div>
                
                <p className="text-gray-700 mt-4">The badge should show the item count: {totalItems}</p>
                
                <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                  <p className="text-amber-800 text-sm">
                    If you don't see a badge with the number {totalItems}, there might be a CSS issue.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default CartBadgeTestPage;