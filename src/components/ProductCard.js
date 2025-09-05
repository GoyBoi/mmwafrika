import React from 'react';
import { Card, CardContent } from '@/components/ui/card.jsx';
import Rating from '../components/Rating.js';

const ProductCard = ({ 
  product, 
  onAddToCart, 
  onViewProduct, 
  onQuickView,
  compact = false 
}) => {
  // Determine if product is new (added in last 7 days)
  const isNewProduct = product.isNew || false;
  const addedDate = product.addedDate || null;
  
  // Get product rating and review count
  const rating = product.rating || 0;
  const reviewCount = product.reviewCount || 0;
  const salesCount = product.salesCount || 0;
  
  // Determine if product is on sale
  const isOnSale = product.originalPrice && product.originalPrice > product.price;
  const discountPercentage = isOnSale ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;
  
  if (compact) {
    return (
      <Card 
        className="group relative bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col h-full w-full"
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
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                New
              </span>
            </div>
          )}
          
          {/* Sale Badge */}
          {isOnSale && (
            <div className="absolute top-2 right-2 z-10">
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                -{discountPercentage}%
              </span>
            </div>
          )}
        </div>
        
        {/* Product Info with Better Typography */}
        <CardContent className="p-3 flex-grow flex flex-col">
          {/* Product Title */}
          <h3 className="font-semibold text-gray-900 text-sm mb-1 truncate group-hover:text-amber-700 transition-colors">
            {product.name}
          </h3>
          
          {/* Rating */}
          <div className="flex items-center mb-1">
            <Rating value={rating} size="sm" readonly />
            <span className="text-xs text-gray-500 ml-1">({reviewCount})</span>
          </div>
          
          {/* Price with Visual Emphasis */}
          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center">
              <span className="font-bold text-gray-900 text-base">${product.price.toFixed(2)}</span>
              {isOnSale && (
                <span className="text-xs text-gray-500 line-through ml-2">${product.originalPrice.toFixed(2)}</span>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }
  
  return (
    <Card 
      className="group relative bg-white rounded-xl border border-gray-200 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-[280px] h-[380px] cursor-pointer"
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
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
              New
            </span>
          </div>
        )}
        
        {/* Sale Badge */}
        {isOnSale && (
          <div className="absolute top-3 right-3 z-10">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
              -{discountPercentage}%
            </span>
          </div>
        )}
        
        {/* Quick Actions */}
        <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              if (onQuickView) onQuickView(product.id);
            }}
            className="bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors"
            aria-label="Quick view"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </button>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              if (onAddToCart) onAddToCart(product);
            }}
            className="bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors"
            aria-label="Add to wishlist"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
        
        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      {/* Product Info with Better Typography */}
      <CardContent className="p-4">
        {/* Product Title */}
        <h3 className="font-semibold text-gray-900 text-lg mb-1 truncate group-hover:text-amber-700 transition-colors">
          {product.name}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center mb-2">
          <Rating value={rating} readonly />
          <span className="text-sm text-gray-500 ml-2">({reviewCount})</span>
          {salesCount > 0 && (
            <span className="text-xs text-amber-600 ml-2">{salesCount} sold</span>
          )}
        </div>
        
        {/* Price with Visual Emphasis */}
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center">
            <span className="font-bold text-gray-900 text-xl">${product.price.toFixed(2)}</span>
            {isOnSale && (
              <span className="text-sm text-gray-500 line-through ml-2">${product.originalPrice.toFixed(2)}</span>
            )}
          </div>
          <button 
            className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 shadow-sm hover:shadow-md transform hover:scale-105"
            onClick={(e) => {
              e.stopPropagation();
              if (onAddToCart) onAddToCart(product);
            }}
          >
            Add to Cart
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;