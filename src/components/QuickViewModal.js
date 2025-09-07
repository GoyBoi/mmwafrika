import React, { useState } from 'react';
import Card from './Card.js';
import Rating from './Rating.js';
import ProductActionButtons from './ProductActionButtons.js';

const QuickViewModal = ({ product, isOpen, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  
  if (!isOpen || !product) return null;
  
  // Mock product images (in a real app, this would come from the product data)
  const productImages = [
    product.image,
    product.image,
    product.image
  ];
  
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" 
          onClick={onClose}
        ></div>

        {/* Modal content */}
        <div className="inline-block align-bottom bg-white rounded-xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-5xl sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-8 sm:pb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Product Images */}
              <div>
                <div className="mb-6">
                  <img 
                    src={productImages[selectedImage]} 
                    alt={product.name} 
                    className="w-full h-96 object-cover bg-gray-50 rounded-xl shadow-sm"
                  />
                </div>
                <div className="flex space-x-3 justify-center">
                  {productImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`w-20 h-20 overflow-hidden rounded-lg border-2 transition-all duration-200 ${
                        selectedImage === index 
                          ? 'border-amber-600 ring-2 ring-amber-200 scale-105' 
                          : 'border-gray-200 hover:border-amber-300'
                      }`}
                    >
                      <img 
                        src={image} 
                        alt={`Product view ${index + 1}`} 
                        className="w-full h-full object-cover bg-gray-50"
                      />
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Product Details */}
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2 font-heading">{product.name}</h2>
                    <div className="flex items-center mb-4">
                      <Rating value={product.rating || 0} count={product.reviewCount || 0} />
                    </div>
                  </div>
                  <button 
                    onClick={onClose}
                    className="text-gray-400 hover:text-gray-700 transition-colors rounded-full p-1"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="mb-6">
                  <span className="text-3xl font-bold text-gray-900 font-heading">${product.price.toFixed(2)}</span>
                  {product.originalPrice && product.originalPrice > product.price && (
                    <span className="text-xl text-gray-500 line-through ml-3 font-body">${product.originalPrice.toFixed(2)}</span>
                  )}
                </div>
                
                <p className="text-gray-600 mb-8 font-body text-base leading-relaxed">{product.description}</p>
                
                {/* Quantity */}
                <div className="mb-8">
                  <h3 className="text-lg font-medium text-gray-900 mb-3 font-heading">Quantity</h3>
                  <div className="flex items-center">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-3 border border-gray-300 rounded-l-lg bg-white hover:bg-gray-50 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      </svg>
                    </button>
                    <input 
                      type="number" 
                      min="1" 
                      value={quantity} 
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-20 text-center border-t border-b border-gray-300 font-body text-lg"
                    />
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-3 border border-gray-300 rounded-r-lg bg-white hover:bg-gray-50 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <ProductActionButtons
                    product={{
                      ...product,
                      quantity
                    }}
                    size="lg"
                    fullWidth={true}
                  />
                  <button
                    onClick={onClose}
                    className="flex-1 py-3 px-4 border border-gray-300 rounded-lg bg-white text-gray-700 hover:bg-gray-50 transition-colors text-base font-body"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;