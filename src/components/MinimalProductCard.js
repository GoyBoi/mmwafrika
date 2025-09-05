import React from 'react';
import Badge from './Badge.js';

function MinimalProductCard({ product, onViewProduct, compact = false }) {
  // Determine if product is new (added in last 7 days)
  const isNewProduct = product.isNew || false;
  const addedDate = product.addedDate || null;
  
  if (compact) {
    return (
      <div 
        className="group relative bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer card flex flex-col h-full w-full"
        onClick={() => onViewProduct(product.id)}
      >
        {/* Enhanced Image Container with Neutral Background for Clothing */}
        <div className="relative h-32 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 p-2"
          />
          
          {/* New Arrival Badge */}
          {isNewProduct && (
            <div className="absolute top-2 left-2 z-10">
              <Badge isNew={true} timestamp={addedDate} size="sm" />
            </div>
          )}
        </div>
        
        {/* Product Info with Better Typography */}
        <div className="p-3 flex-grow flex flex-col">
          {/* Product Title */}
          <h3 className="font-semibold text-gray-900 text-sm mb-1 truncate group-hover:text-amber-700 transition-colors">
            {product.name}
          </h3>
          
          {/* Price with Visual Emphasis */}
          <div className="flex items-center justify-between mt-auto">
            <span className="font-bold text-gray-900 text-base">${product.price.toFixed(2)}</span>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div 
      className="group relative bg-white rounded-xl border border-gray-200 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-[280px] h-[350px] cursor-pointer card"
      onClick={() => onViewProduct(product.id)}
    >
      {/* Enhanced Image Container with Neutral Background for Clothing */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 p-2"
        />
        
        {/* New Arrival Badge */}
        {isNewProduct && (
          <div className="absolute top-3 left-3 z-10">
            <Badge isNew={true} timestamp={addedDate} />
          </div>
        )}
        
        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      {/* Product Info with Better Typography */}
      <div className="p-4">
        {/* Product Title */}
        <h3 className="font-semibold text-gray-900 text-lg mb-1 truncate group-hover:text-amber-700 transition-colors drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)]">
          {product.name}
        </h3>
        
        {/* Price with Visual Emphasis */}
        <div className="flex items-center justify-between mt-3">
          <span className="font-bold text-gray-900 text-xl drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)]">${product.price.toFixed(2)}</span>
          <button 
            className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 shadow-sm hover:shadow-md transform hover:scale-105"
            onClick={(e) => {
              e.stopPropagation();
              // Add to cart functionality would be passed as prop
              console.log('Add to cart:', product.id);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default MinimalProductCard;