import React from 'react';

const ProductGrid = ({ products, renderItem, columns = 4 }) => {
  // Calculate responsive column classes
  const getColumnClasses = () => {
    switch (columns) {
      case 2:
        return 'grid-cols-1 sm:grid-cols-2';
      case 3:
        return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3';
      case 4:
        return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4';
      default:
        return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4';
    }
  };

  // Calculate if we need to add placeholder items for centering
  const needsCentering = products.length % columns !== 0;
  const placeholdersNeeded = needsCentering ? columns - (products.length % columns) : 0;

  return (
    <div className={`grid ${getColumnClasses()} gap-6 justify-items-center`}>
      {products.map((product, index) => (
        <div key={product.id || index} className="w-full max-w-[280px]">
          {renderItem(product)}
        </div>
      ))}
      
      {/* Placeholder items for better centering with odd numbers */}
      {needsCentering && placeholdersNeeded > 0 && (
        <>
          {Array.from({ length: placeholdersNeeded }).map((_, index) => (
            <div 
              key={`placeholder-${index}`} 
              className="w-full max-w-[280px] invisible"
              aria-hidden="true"
            >
              {renderItem(products[0])}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default ProductGrid;