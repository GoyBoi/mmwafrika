import React from 'react';
import { Typography, Button } from '@mui/material';
import { Close } from '@mui/icons-material';

function ProductDetailModal({ product, onClose, onAddToCart }) {
  if (!product) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 backdrop-blur-[2px]"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto animate-modalFadeIn border border-gray-100"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col md:flex-row">
          {/* Image section - 60% image, 40% content split as per PRD */}
          <div className="w-full md:w-3/5 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-50 p-10">
            <img 
              src={product.image} 
              alt={product.name} 
              className="object-contain max-h-80 max-w-full transition-transform duration-500"
              style={{ width: '350px', height: '350px' }}
            />
          </div>
          
          {/* Content section with premium aesthetic */}
          <div className="w-full md:w-2/5 p-8 flex flex-col justify-between">
            {/* Header section */}
            <div>
              {/* Close button - positioned top-right with 24px margin as per PRD */}
              <div className="flex justify-end -mt-4 -mr-4 mb-6">
                <button 
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-gray-100 transition-all duration-200"
                >
                  <Close className="text-gray-500" />
                </button>
              </div>
              
              {/* Product information */}
              <div className="mb-6">
                <h2 className="text-2xl font-light text-gray-900 tracking-[0.25px] mb-3">
                  {product.name}
                </h2>
                <div className="w-12 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mb-4"></div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {product.description}
                </p>
              </div>
            </div>
            
            {/* Price and CTA */}
            <div>
              <div className="mb-6">
                <span className="text-2xl font-semibold text-gray-900">
                  ${product.price.toFixed(2)}
                </span>
              </div>
              
              <Button 
                variant="contained" 
                onClick={() => onAddToCart(product)}
                className="font-medium py-3.5 px-6 rounded-lg bg-gradient-to-r from-amber-600 to-orange-600 text-white hover:from-amber-700 hover:to-orange-700 w-full text-base normal-case tracking-wide transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailModal;