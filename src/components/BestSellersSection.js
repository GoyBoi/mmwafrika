import React from 'react';
import MinimalProductCard from './MinimalProductCard.js';
import ProductGrid from './ProductGrid.js';

function BestSellersSection({ products, onViewProduct }) {
  // Sort products by sales count (highest first) and take top 4
  const bestSellers = [...products]
    .sort((a, b) => (b.salesCount || 0) - (a.salesCount || 0))
    .slice(0, 4);

  return (
    <div className="py-12 bg-gray-50 rounded-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 font-heading">Best Sellers</h2>
          <p className="text-gray-600 font-body">Our most popular items this month</p>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>
        
        {/* Enhanced Product Grid with Better Alignment */}
        <ProductGrid 
          products={bestSellers} 
          columns={4}
          renderItem={(product) => (
            <div key={product.id} className="relative">
              <MinimalProductCard product={product} onViewProduct={onViewProduct} />
              <div className="absolute top-3 right-3 bg-white rounded-full px-2 py-1 text-xs font-bold text-gray-900 shadow-sm font-body">
                #{bestSellers.indexOf(product) + 1}
              </div>
            </div>
          )}
        />
      </div>
    </div>
  );
}

export default BestSellersSection;