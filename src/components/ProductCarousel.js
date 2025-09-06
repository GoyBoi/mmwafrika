import React, { useState } from 'react';
import AddToCartButton from './AddToCartButton.js';

function ProductCarousel({ products, onAddToCart, onViewProduct }) {
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
          <div className="flex transition-transform duration-500 ease-in-out">
            {products.map((product, index) => (
              <div 
                key={`${product.id}-${index}`} 
                className="flex-shrink-0 w-full md:w-1/3 px-3"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                <div 
                  className="group bg-white rounded-xl border border-gray-200 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 h-full cursor-pointer"
                  onClick={() => onViewProduct(product.id)}
                >
                  {/* Enhanced Image Section */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110 p-2"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Product Info */}
                  <div className="p-5">
                    <h3 className="font-heading font-medium text-gray-900 mb-2 group-hover:text-amber-700 transition-colors drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)]">
                      {product.name}
                    </h3>
                    
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2 drop-shadow-[0_1px_1px_rgba(0,0,0,0.05)] font-body">
                      {product.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-body font-semibold text-gray-900 text-lg drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)]">${product.price.toFixed(2)}</span>
                      </div>
                      <AddToCartButton 
                        product={product} 
                        onAddToCart={onAddToCart}
                        size="sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Enhanced Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 border border-gray-200 z-20"
        >
          <svg className="w-5 h-5 text-gray-700 drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 border border-gray-200 z-20"
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
                  ? 'bg-amber-600 w-6' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductCarousel;