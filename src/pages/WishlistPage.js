import React from 'react';
import { useWishlist } from '../context/WishlistContext.js';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import Button from '../components/Button.js';
import { Card, CardContent } from '@/components/ui/card.jsx';
import { X } from 'lucide-react';

function WishlistPage() {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const navigate = useNavigate();

  const handleRemoveFromWishlist = (productId) => {
    removeFromWishlist(productId);
  };

  const handleViewProduct = (productId) => {
    navigate(`/product/${productId}`);
  };

  const handleContinueShopping = () => {
    navigate('/products');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Wishlist</h1>
          
          {wishlistItems.length === 0 ? (
            <div className="text-center py-12">
              <div className="mx-auto h-24 w-24 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Your wishlist is empty</h3>
              <p className="mt-1 text-gray-500">Start adding items to your wishlist to save them for later</p>
              <div className="mt-6">
                <Button
                  onClick={handleContinueShopping}
                  variant="accent"
                  size="lg"
                >
                  Continue Shopping
                </Button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {wishlistItems.map((item) => (
                <Card key={item.id} className="group relative bg-white rounded-xl border border-gray-200 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-full">
                  <button
                    onClick={() => handleRemoveFromWishlist(item.id)}
                    className="absolute top-2 right-2 z-10 bg-white rounded-full p-1 shadow-md hover:bg-gray-50 transition-colors"
                    aria-label="Remove from wishlist"
                  >
                    <X className="h-4 w-4 text-gray-700" />
                  </button>
                  
                  <div 
                    className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center cursor-pointer"
                    onClick={() => handleViewProduct(item.id)}
                  >
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 p-2" 
                    />
                  </div>
                  
                  <CardContent className="p-4">
                    <h3 
                      className="font-semibold text-gray-900 text-lg mb-1 truncate group-hover:text-amber-700 transition-colors cursor-pointer"
                      onClick={() => handleViewProduct(item.id)}
                    >
                      {item.name}
                    </h3>
                    
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center">
                        <span className="font-bold text-gray-900 text-xl">${item.price.toFixed(2)}</span>
                        {item.originalPrice && item.originalPrice > item.price && (
                          <span className="text-sm text-gray-500 line-through ml-2">${item.originalPrice.toFixed(2)}</span>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default WishlistPage;