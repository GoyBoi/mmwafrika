import React from 'react';
import { Typography, Button } from '@mui/material';
import { Close } from '@mui/icons-material';

function ProductDetailModal({ product, onClose, onAddToCart }) {
  if (!product) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <div 
        className="bg-background-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[80vh] overflow-y-auto animate-modalFadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col md:flex-row">
          {/* Image section - 60% image, 40% content split as per PRD */}
          <div className="w-full md:w-3/5 flex items-center justify-center bg-warm-gray p-12">
            <img 
              src={product.image} 
              alt={product.name} 
              className="object-cover max-h-96 max-w-full rounded-lg"
              style={{ width: '400px', height: '400px' }} // Modal Size: 400px × 400px (fixed) as per PRD
            />
          </div>
          
          {/* Content section */}
          <div className="w-full md:w-2/5 p-component-space-3">
            {/* Close button - positioned top-right with 24px margin as per PRD */}
            <div className="flex justify-end -mt-6 -mr-6 mb-6">
              <button 
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
              >
                <Close className="text-cool-gray" />
              </button>
            </div>
            
            <div className="mt-0">
              <Typography variant="h4" className="font-normal text-secondary-black mb-2 tracking-[0.5px]">
                {product.name}
              </Typography>
              <Typography variant="h3" className="text-secondary-black font-semibold mb-6 tracking-tight">
                ${product.price.toFixed(2)}
              </Typography>
              <Typography variant="body1" className="text-cool-gray mb-8 text-base leading-relaxed">
                {product.description}
              </Typography>
              <Button 
                variant="contained" 
                onClick={() => onAddToCart(product)}
                className="font-medium py-4 px-6 rounded-lg bg-primary-black text-background-white hover:bg-secondary-black w-full text-base normal-case tracking-wide transition-all duration-300 shadow-none"
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