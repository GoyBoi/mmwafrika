import React from 'react';
import EnhancedProductCard from './EnhancedProductCard.js';

const ProductCard = ({ 
  product, 
  onViewProduct, 
  onQuickView,
  compact = false 
}) => {
  return (
    <EnhancedProductCard 
      product={product}
      onViewProduct={onViewProduct}
      onQuickView={onQuickView}
      compact={compact}
      variant="default"
    />
  );
};

export default ProductCard;