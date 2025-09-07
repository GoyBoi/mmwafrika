import React, { useState } from 'react';
import Badge from './Badge.js';
import Rating from './Rating.js';
import AddToCartButton from './AddToCartButton.js';
import ProductImageViewer from './ProductImageViewer.js';

function MinimalProductCard({ product, onViewProduct, onAddToCart, onQuickView, compact = false }) {
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
    console.log('Rendering compact product card for product:', product.name);
    return (
      <div 
        className="group relative bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer card flex flex-col w-full"
        onClick={() => onViewProduct(product.id)}
      >
        {/* Enhanced Image Container with Neutral Background for Clothing */}
        <div className="relative h-32 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
          <ProductImageViewer 
            images={[product.image]} 
            productName={product.name}
            viewType="single"
          />
          
          {/* New Arrival Badge */}
          {isNewProduct && (
            <div className="absolute top-2 left-2 z-10">
              <Badge isNew={true} timestamp={addedDate} size="sm" />
            </div>
          )}
          
          {/* Sale Badge */}
          {isOnSale && (
            <div className="absolute top-2 right-2 z-10">
              <Badge variant="danger" size="sm">-{discountPercentage}%</Badge>
            </div>
          )}
        </div>
        
        {/* Product Info with Better Typography */}
        <div className="p-3 flex-grow flex flex-col justify-between">
          {/* Product Title and Rating */}
          <div>
            {/* Product Title */}
            <h3 className="font-heading font-medium text-gray-900 text-sm mb-1 truncate group-hover:text-amber-700 transition-colors">
              {product.name}
            </h3>
            
            {/* Rating */}
            <div className="flex items-center mb-1">
              <Rating value={rating} size="sm" readonly />
              <span className="text-xs text-gray-500 ml-1 font-body">({reviewCount})</span>
            </div>
          </div>
          
          {/* Price and Add to Cart Button */}
          <div>
            {/* Price with Visual Emphasis */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="font-body font-semibold text-gray-900 text-base">${product.price.toFixed(2)}</span>
                {isOnSale && (
                  <span className="text-xs text-gray-500 line-through ml-2 font-body">${product.originalPrice.toFixed(2)}</span>
                )}
              </div>
            </div>
            
            {/* Add to Cart Button */}
            <div className="mt-3">
              <AddToCartButton 
                product={product} 
                onAddToCart={onAddToCart}
                size="sm"
                fullWidth={true}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  console.log('Rendering regular product card for product:', product.name);
  return (
    <div 
      className="group relative bg-white rounded-xl border border-gray-200 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-full flex flex-col cursor-pointer card"
    >
      {/* Enhanced Image Container with Neutral Background for Clothing */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center" onClick={() => onViewProduct(product.id)}>
        <ProductImageViewer 
          images={[product.image]} 
          productName={product.name}
          viewType="single"
        />
        
        {/* New Arrival Badge */}
        {isNewProduct && (
          <div className="absolute top-3 left-3 z-10">
            <Badge isNew={true} timestamp={addedDate} />
          </div>
        )}
        
        {/* Sale Badge */}
        {isOnSale && (
          <div className="absolute top-3 right-3 z-10">
            <Badge variant="danger">-{discountPercentage}%</Badge>
          </div>
        )}
        
        {/* Quick Actions */}
        <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
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
      <div className="p-4 flex-grow flex flex-col justify-between">
        {/* Product Title and Rating */}
        <div onClick={() => onViewProduct(product.id)}>
          {/* Product Title */}
          <h3 className="font-heading font-medium text-gray-900 text-lg mb-1 truncate group-hover:text-amber-700 transition-colors">
            {product.name}
          </h3>
          
          {/* Rating */}
          <div className="flex items-center mb-2">
            <Rating value={rating} readonly />
            <span className="text-sm text-gray-500 ml-2 font-body">({reviewCount})</span>
            {salesCount > 0 && (
              <span className="text-xs text-amber-600 ml-2 font-body">{salesCount} sold</span>
            )}
          </div>
        </div>
        
        {/* Price and Add to Cart Button */}
        <div>
          {/* Price with Visual Emphasis */}
          <div className="flex items-center justify-between pt-2" onClick={() => onViewProduct(product.id)}>
            <div className="flex items-center">
              <span className="font-body font-semibold text-gray-900 text-xl">${product.price.toFixed(2)}</span>
              {isOnSale && (
                <span className="text-sm text-gray-500 line-through ml-2 font-body">${product.originalPrice.toFixed(2)}</span>
              )}
            </div>
          </div>
          
          {/* Add to Cart Button */}
          <div className="mt-4 flex justify-center">
            <AddToCartButton 
              product={product} 
              onAddToCart={onAddToCart}
              size="md"
              fullWidth={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MinimalProductCard;