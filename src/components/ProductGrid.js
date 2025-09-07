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

  return (
    <div className={`grid ${getColumnClasses()} gap-6 justify-items-center mx-auto w-full`}>
      {products.map((product, index) => (
        <div key={product.id || index} className="w-full">
          {renderItem(product)}
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;