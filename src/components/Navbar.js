import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext.js';
import SearchBar from './SearchBar.js';

const Navbar = ({ showBackButton = false, onHome, onViewCart }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cartItems } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const handleHome = () => {
    if (onHome) {
      onHome();
    } else {
      navigate('/');
    }
  };
  
  const handleViewCart = () => {
    if (onViewCart) {
      onViewCart();
    } else {
      navigate('/cart');
    }
  };
  
  const handleBack = () => {
    navigate(-1);
  };
  
  // Calculate total number of items in cart
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Left side - Back button or logo */}
          <div className="flex items-center">
            {showBackButton && location.pathname !== '/' && (
              <button
                onClick={handleBack}
                className="mr-4 p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}
            
            <button
              onClick={handleHome}
              className="text-xl font-bold text-gray-900 hover:text-amber-600 transition-colors"
            >
              MMWAFRIKA
            </button>
          </div>
          
          {/* Center - Search bar (desktop only) */}
          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <SearchBar />
          </div>
          
          {/* Right side - Cart and menu */}
          <div className="flex items-center">
            <button
              onClick={handleViewCart}
              className="p-2 rounded-md text-gray-700 hover:text-amber-600 hover:bg-gray-100 focus:outline-none relative transition-all duration-200 transform hover:scale-110"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v4a2 2 0 01-2 2H9a2 2 0 01-2-2v-4m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                  {totalItems}
                </span>
              )}
            </button>
            
            {/* Mobile menu button */}
            <button 
              className="ml-2 p-2 rounded-md text-gray-700 hover:text-amber-600 hover:bg-gray-100 focus:outline-none md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile search bar */}
      <div className="md:hidden px-4 pb-4">
        <SearchBar />
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button 
              onClick={() => {
                handleHome();
                setIsMobileMenuOpen(false);
              }}
              className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
                location.pathname === '/' 
                  ? 'text-amber-600 bg-amber-50' 
                  : 'text-gray-700 hover:text-amber-600 hover:bg-gray-50'
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => {
                navigate('/products');
                setIsMobileMenuOpen(false);
              }}
              className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
                location.pathname === '/products' 
                  ? 'text-amber-600 bg-amber-50' 
                  : 'text-gray-700 hover:text-amber-600 hover:bg-gray-50'
              }`}
            >
              Products
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;