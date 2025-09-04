import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext.js';

function Navbar({ showBackButton = false }) {
  const navigate = useNavigate();
  const { totalItems } = useCart();

  const handleViewCart = () => {
    navigate('/cart');
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <nav className="bg-white border-b border-gray-100 py-5">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {showBackButton && (
            <button 
              onClick={handleGoBack}
              className="flex items-center text-gray-900 hover:text-gray-700 transition-colors duration-200 focus:outline-none"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-sm font-light tracking-wide">Back</span>
            </button>
          )}
          
          <button 
            onClick={handleGoHome}
            className="font-light text-xl text-gray-900 tracking-wide hover:text-gray-700 transition-colors duration-200 focus:outline-none"
          >
            MMWAFRIKA
          </button>
          
          <div className="flex items-center space-x-6">
            <button 
              onClick={handleViewCart}
              className="relative text-gray-900 hover:text-gray-700 transition-colors duration-200 focus:outline-none"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-gray-900 text-white text-xs font-light rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;