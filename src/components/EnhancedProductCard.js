import React from 'react';
import { Card, CardContent } from '@/components/ui/card.jsx';
import Rating from '../components/Rating.js';
import Badge from './Badge.js';
import ProductImageViewer from './ProductImageViewer.js';
import ProductActionButtons from './ProductActionButtons.js';
import { motion } from 'framer-motion';

const EnhancedProductCard = ({ 
  product, 
  onViewProduct, 
  onQuickView,
  compact = false,
  variant = 'default', // 'default', 'carousel', 'minimal'
  animate = true
}) => {
  // Determine if product is new (added in last 7 days)
  const isNewProduct = product.isNew || false;
  const addedDate = product.addedDate || null;
  
  // Get product rating and review count
  const rating = product.rating || 0;
  const reviewCount = product.reviewCount || 0;
  const salesCount = product.salesCount || 0;
  const price = product.price || 0;
  const originalPrice = product.originalPrice || 0;
  
  // Determine if product is on sale
  const isOnSale = originalPrice && originalPrice > price;
  const discountPercentage = isOnSale ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;
  
  // Scarcity indicators
  const lowStockThreshold = 5;
  const stockCount = product.stockCount || 10; // Default stock count
  const isLowStock = stockCount <= lowStockThreshold;
  const isAlmostGone = stockCount <= 2;
  
  // Recently added indicator (within last 3 days)
  const isNewArrival = product.addedDate && (new Date() - new Date(product.addedDate)) < (3 * 24 * 60 * 60 * 1000);
  
  // Enhanced animation variants
  const cardVariants = {
    hover: { 
      y: -8,
      scale: 1.02,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 20 
      } 
    },
    tap: { 
      scale: 0.98,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 20 
      } 
    }
  };
  
  // Card size and styling based on variant and compact props
  const getCardClasses = () => {
    if (compact) {
      return "group relative rounded-lg overflow-hidden transition-all duration-300 cursor-pointer flex flex-col h-full w-full";
    }
    
    switch (variant) {
      case 'carousel':
        return "group relative rounded-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-1 w-full h-full cursor-pointer";
      case 'minimal':
        return "group relative rounded-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-1 w-[280px] h-[380px] cursor-pointer";
      default:
        return "group relative rounded-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-1 w-[280px] h-[380px] cursor-pointer";
    }
  };
  
  // Image container height based on variant and compact props
  const getImageContainerClasses = () => {
    if (compact) {
      return "relative h-32 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center";
    }
    
    switch (variant) {
      case 'carousel':
        return "relative h-48 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center";
      default:
        return "relative h-64 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center";
    }
  };
  
  // Card content padding based on variant and compact props
  const getContentPaddingClasses = () => {
    if (compact) {
      return "p-3 flex-grow flex flex-col";
    }
    
    switch (variant) {
      case 'carousel':
        return "p-5 flex-grow flex flex-col";
      default:
        return "p-4 flex-grow flex flex-col";
    }
  };
  
  if (compact) {
    return (
      <motion.div
        whileHover={animate ? cardVariants.hover : {}}
        whileTap={animate ? cardVariants.tap : {}}
        className="inline-block w-full"
      >
        <Card 
          className={getCardClasses()}
          variant="glass"
          onClick={() => onViewProduct(product.id)}
        >
          {/* Enhanced Image Container with Neutral Background for Clothing */}
          <div className={getImageContainerClasses()}>
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
          <CardContent className={getContentPaddingClasses()}>
            {/* Product Title */}
            <h3 className="font-heading font-medium text-gray-900 text-sm mb-1 truncate group-hover:text-amber-700 transition-colors">
              {product.name}
            </h3>
            
            {/* Rating */}
            <div className="flex items-center mb-1">
              <Rating value={rating} size="sm" readonly />
              <span className="text-xs text-gray-500 ml-1">({reviewCount})</span>
            </div>
            
            {/* Scarcity Indicators for Compact View */}
            <div className="flex flex-wrap gap-1 mb-1">
              {isLowStock && (
                <span className="inline-flex items-center text-xs bg-red-100 text-red-800 px-1.5 py-0.5 rounded-full font-body">
                  <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {isAlmostGone ? 'Almost gone!' : `Only ${stockCount} left!`}
                </span>
              )}
              {isNewArrival && (
                <span className="inline-flex items-center text-xs bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded-full font-body">
                  New
                </span>
              )}
            </div>
            
            {/* Price with Visual Emphasis */}
            <div className="flex items-center justify-between mt-auto">
              <div className="flex items-center">
                <span className="font-bold text-gray-900 text-base">${price.toFixed(2)}</span>
                {isOnSale && (
                  <span className="text-xs text-gray-500 line-through ml-2">${originalPrice.toFixed(2)}</span>
                )}
              </div>
            </div>
            
            {/* Add to Cart and Wishlist Buttons for compact view */}
            <div className="mt-2 flex justify-center">
              <ProductActionButtons 
                product={product} 
                size="sm"
                fullWidth={true}
              />
            </div>
          </CardContent>
        </Card>
      </motion.div>
    );
  }
  
  return (
    <motion.div
      whileHover={animate ? cardVariants.hover : {}}
      whileTap={animate ? cardVariants.tap : {}}
      className="inline-block w-full"
    >
      <Card 
        className={getCardClasses()}
        onClick={() => onViewProduct(product.id)}
      >
        {/* Enhanced Image Container with Neutral Background for Clothing */}
        <div className={getImageContainerClasses()} onClick={() => onViewProduct(product.id)}>
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
          
          {/* Quick Actions - Only for non-carousel variants */}
          {variant !== 'carousel' && (
            <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  if (onQuickView) onQuickView(product.id);
                }}
                className="bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors hover-glow"
                aria-label="Quick view"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </button>
            </div>
          )}
          
          {/* Subtle Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        {/* Product Info with Better Typography */}
        <CardContent className={getContentPaddingClasses()}>
          {/* Product Title */}
          <h3 
            className="font-heading font-medium text-gray-900 text-lg mb-1 truncate group-hover:text-amber-700 transition-colors"
            onClick={() => onViewProduct(product.id)}
          >
            {product.name}
          </h3>
          
          {/* Rating and Sales Info */}
          <div className="flex items-center mb-2">
            <Rating value={rating} readonly />
            <span className="text-sm text-gray-500 ml-2">({reviewCount})</span>
            {salesCount > 0 && (
              <span className="text-xs text-amber-600 ml-2">{salesCount} sold</span>
            )}
          </div>
          
          {/* Scarcity Indicators */}
          <div className="flex flex-wrap gap-1 mb-2">
            {isLowStock && (
              <span className="inline-flex items-center text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full font-body animate-pulse">
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {isAlmostGone ? 'Almost gone!' : `Only ${stockCount} left!`}
              </span>
            )}
            {isNewArrival && (
              <span className="inline-flex items-center text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full font-body">
                New Arrival
              </span>
            )}
          </div>
          
          {/* Price and Add to Cart Button */}
          <div className="mt-auto">
            {/* Price with Visual Emphasis */}
            <div className="flex items-center justify-between pt-2" onClick={() => onViewProduct(product.id)}>
              <div className="flex items-center">
                <span className="font-body font-semibold text-gray-900 text-xl">${price.toFixed(2)}</span>
                {isOnSale && (
                  <span className="text-sm text-gray-500 line-through ml-2">${originalPrice.toFixed(2)}</span>
                )}
              </div>
            </div>
            
            {/* Add to Cart and Wishlist Buttons */}
            <div className="mt-2 flex justify-center">
              <ProductActionButtons 
                product={product} 
                size="sm"
                fullWidth={true}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default EnhancedProductCard;