import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import SearchBar from './SearchBar.js';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import ShoppingCartIcon from './ShoppingCartIcon.js';

const Navbar = ({ showBackButton = false, onHome }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const handleHome = () => {
    if (onHome) {
      onHome();
    } else {
      navigate('/');
    }
  };
  
  const handleBack = () => {
    navigate(-1);
  };
  
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Left side - Back button or logo */}
          <div className="flex items-center">
            {showBackButton && location.pathname !== '/' && (
              <button
                onClick={handleBack}
                className="mr-4 rounded-md p-2 text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}
            
            <button
              onClick={handleHome}
              className="text-xl font-bold text-gray-900 transition-colors hover:text-amber-600"
            >
              MMWAFRIKA
            </button>
          </div>
          
          {/* Center - Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              <button 
                onClick={() => navigate('/')}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === '/' 
                    ? 'text-amber-600' 
                    : 'text-gray-700 hover:text-amber-600'
                }`}
              >
                Home
              </button>
              <button 
                onClick={() => navigate('/products')}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === '/products' 
                    ? 'text-amber-600' 
                    : 'text-gray-700 hover:text-amber-600'
                }`}
              >
                Products
              </button>
            </nav>
          </div>
          
          {/* Right side - Cart, User menu and mobile menu */}
          <div className="flex items-center space-x-2">
            {/* Shopping Cart Icon - NEW DESIGN */}
            <div className="relative">
              <ShoppingCartIcon />
            </div>
            
            {/* Account/Login Icon */}
            <button
              className="rounded-md p-2 text-gray-700 transition-colors hover:bg-gray-100 hover:text-amber-600 focus:outline-none"
              onClick={() => console.log('Account clicked')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
            
            {/* Mobile menu button */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-amber-600 focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="mt-6 flex flex-col space-y-4">
                  <Button 
                    variant={location.pathname === '/' ? 'default' : 'ghost'}
                    className="justify-start"
                    onClick={() => {
                      handleHome();
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Home
                  </Button>
                  <Button 
                    variant={location.pathname === '/products' ? 'default' : 'ghost'}
                    className="justify-start"
                    onClick={() => {
                      navigate('/products');
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Products
                  </Button>
                  {/* Cart option in mobile menu */}
                  <Button 
                    variant="outline"
                    className="justify-start"
                    onClick={() => {
                      navigate('/cart');
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v4a2 2 0 01-2 2H9a2 2 0 01-2-2v-4m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                    </svg>
                    View Cart
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      
      {/* Mobile search bar - only shown on mobile */}
      <div className="md:hidden px-4 pb-4">
        <SearchBar />
      </div>
    </nav>
  );
};

export default Navbar;