import React from 'react';
import ExplorationEncouragement from './ExplorationEncouragement.js';

const ProductDetailExploration = ({ currentCategory, onViewCategory }) => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-heading">Continue Exploring</h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-body">
            Discover more items that complement what you're viewing
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>
        
        <ExplorationEncouragement 
          currentCategory={currentCategory} 
          onViewCategory={onViewCategory} 
        />
      </div>
    </div>
  );
};

export default ProductDetailExploration;