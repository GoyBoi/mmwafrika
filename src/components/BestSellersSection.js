import React from 'react';
import MinimalProductCard from './MinimalProductCard.js';
import ProductGrid from './ProductGrid.js';
import SectionLayout from './ui/SectionLayout.js';

function BestSellersSection({ products, onViewProduct }) {
  // Sort products by sales count (highest first) and take top 4
  const bestSellers = [...products]
    .sort((a, b) => (b.salesCount || 0) - (a.salesCount || 0))
    .slice(0, 4);

  return (
    <div className="py-12 bg-gray-50 rounded-2xl">
      <SectionLayout
        title="Best Sellers"
        subtitle="Our most popular items this month"
      >
        {/* Enhanced Product Grid with Better Alignment */}
        <div className="flex justify-center w-full">
          <ProductGrid 
            products={bestSellers} 
            columns={4}
            renderItem={(product) => (
              <div className="relative">
                <MinimalProductCard 
                  product={product} 
                  onViewProduct={onViewProduct} 
                  
                />
                <div className="absolute top-3 right-3 bg-white rounded-full px-2 py-1 text-xs font-bold text-gray-900 shadow-sm font-body">
                  #{bestSellers.indexOf(product) + 1}
                </div>
              </div>
            )}
          />
        </div>
      </SectionLayout>
    </div>
  );
}

export default BestSellersSection;