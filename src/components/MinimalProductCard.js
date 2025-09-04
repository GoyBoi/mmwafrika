import React from 'react';

function MinimalProductCard({ product, onViewProduct }) {
  return (
    <div 
      className="group relative bg-white rounded-xl border border-gray-200 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-[280px] h-[350px] cursor-pointer"
      onClick={() => onViewProduct(product.id)}
    >
      {/* Enhanced Image Container with Gradient Background */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-amber-50 to-orange-100">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      {/* Product Info with Better Typography */}
      <div className="p-4">
        {/* Product Title */}
        <h3 className="font-semibold text-gray-900 text-lg mb-1 truncate group-hover:text-amber-700 transition-colors">
          {product.name}
        </h3>
        
        {/* Price with Visual Emphasis */}
        <div className="flex items-center justify-between mt-3">
          <span className="font-bold text-gray-900 text-xl">${product.price.toFixed(2)}</span>
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