import React from 'react';
import { useCart } from '../context/CartContext.js';
import { useNavigate } from 'react-router-dom';

const CartTestPage = () => {
  const { cartItems, totalItems, addToCart, removeFromCart, updateQuantity, clearCart } = useCart();
  const navigate = useNavigate();
  
  // Mock product for testing
  const testProduct = {
    id: 999,
    name: 'Test Product',
    price: 19.99,
    image: '/products_and_logo/1000006827.jpg',
    description: 'This is a test product for cart functionality testing.'
  };
  
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Cart Test Page</h1>
      
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Cart Status</h2>
        <p>Total Items: {totalItems}</p>
        <p>Cart Items Count: {Array.isArray(cartItems) ? cartItems.length : 0}</p>
      </div>
      
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Actions</h2>
        <div className="flex space-x-2">
          <button 
            onClick={() => addToCart(testProduct)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add Test Item
          </button>
          <button 
            onClick={() => updateQuantity(999, 2)}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Update Quantity to 2
          </button>
          <button 
            onClick={() => removeFromCart(999)}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Remove Test Item
          </button>
          <button 
            onClick={clearCart}
            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
          >
            Clear Cart
          </button>
        </div>
      </div>
      
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Cart Items</h2>
        {Array.isArray(cartItems) && cartItems.length > 0 ? (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} className="border-b py-2">
                <p>Name: {item?.name}</p>
                <p>Quantity: {item?.quantity}</p>
                <p>Price: ${item?.price}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No items in cart</p>
        )}
      </div>
      
      <button 
        onClick={() => navigate('/')}
        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
      >
        Back to Home
      </button>
    </div>
  );
};

export default CartTestPage;