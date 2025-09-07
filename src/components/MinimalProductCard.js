import React from 'react';
import EnhancedProductCard from './EnhancedProductCard.js';

function MinimalProductCard({ product, onViewProduct, onQuickView, compact = false }) {
  return (
    <EnhancedProductCard 
      product={product}
      onViewProduct={onViewProduct}
      onQuickView={onQuickView}
      compact={compact}
      variant="minimal"
    />
  );
}

export default MinimalProductCard;