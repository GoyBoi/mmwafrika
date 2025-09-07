import React, { useState } from 'react';
import EnhancedProductCard from './EnhancedProductCard.js';

function ProductCarousel({ products, onViewProduct }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === products.length - 1 ? 0 : prevIndex + 1));
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? products.length - 1 : prevIndex - 1));
  };
  
  return (
    <div className="relative py-10 bg-gradient-to-b from-white to-amber-50 rounded-2xl">
      {/* Section Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-heading font-medium text-gray-900 mb-2 drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)]">Featured Products</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full"></div>
      </div>
      
      {/* Enhanced Carousel Container */}
      <div className="relative max-w-6xl mx-auto px-4">
        {/* Main Carousel */}
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 33.333}%)` }}
          >
            {products.map((product, index) => (
              <div 
                key={product.id} 
                className="flex-shrink-0 w-full md:w-1/3 px-3"
              >
                <EnhancedProductCard 
                  product={product} 
                  
                  onViewProduct={onViewProduct}
                  variant="carousel"
                  compact={false}
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Enhanced Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white/30 flex items-center justify-center transition-all duration-300 hover:scale-110 z-20 border border-white/30"
        >
          <svg className="w-5 h-5 text-gray-700 drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white/30 flex items-center justify-center transition-all duration-300 hover:scale-110 z-20 border border-white/30"
        >
          <svg className="w-5 h-5 text-gray-700 drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        {/* Enhanced Dot Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)] ${
                index === currentIndex 
                  ? 'bg-amber-400 w-8' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductCarousel;