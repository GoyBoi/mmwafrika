import React, { useState } from 'react';
import Card from './Card.js';
import Rating from './Rating.js';
import Button from './Button.js';

const QuickViewModal = ({ product, isOpen, onClose, onAddToCart }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  
  if (!isOpen || !product) return null;
  
  // Mock product images (in a real app, this would come from the product data)
  const productImages = [
    product.image,
    product.image,
    product.image
  ];
  
  // Use actual product sizes if available, otherwise use mock sizes
  const productSizes = product.size && product.size.length > 0 
    ? product.size 
    : ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  
  const handleAddToCart = () => {
    // DISABLED: Size selection requirement - using standard size for all products
    // const productToAdd = {
    //   ...product,
    //   ...(selectedSize && { selectedSize }), // Only add selectedSize if it exists
    //   quantity
    // };
    
    // Using standard/default size for all products
    const productToAdd = {
      ...product,
      selectedSize: product.size && product.size.length > 0 ? product.size[0] : 'ONE SIZE',
      quantity
    };
    
    onAddToCart(productToAdd);
    onClose();
  };
  
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div 
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" 
          onClick={onClose}
        ></div>

        {/* Modal content */}
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Product Images */}
              <div>
                <div className="mb-4">
                  <img 
                    src={productImages[selectedImage]} 
                    alt={product.name} 
                    className="w-full h-96 object-contain bg-gray-50 rounded-lg"
                  />
                </div>
                <div className="flex space-x-2">
                  {productImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`w-20 h-20 overflow-hidden rounded-md border-2 ${
                        selectedImage === index ? 'border-amber-600' : 'border-gray-200'
                      }`}
                    >
                      <img 
                        src={image} 
                        alt={`Product view ${index + 1}`} 
                        className="w-full h-full object-contain bg-gray-50"
                      />
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Product Details */}
              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h2>
                    <div className="flex items-center mb-4">
                      <Rating value={product.rating || 0} count={product.reviewCount || 0} />
                    </div>
                  </div>
                  <button 
                    onClick={onClose}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="mb-4">
                  <span className="text-2xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
                  {product.originalPrice && product.originalPrice > product.price && (
                    <span className="text-lg text-gray-500 line-through ml-2">${product.originalPrice.toFixed(2)}</span>
                  )}
                </div>
                
                <p className="text-gray-600 mb-6">{product.description}</p>
                
                {/* Size Selection */}
                {product.size && product.size.length > 0 && product.size[0] !== 'one-size' && (
                  <div className="mb-6">
                    <h3 className="text-sm font-medium text-gray-900 mb-2">Size</h3>
                    <div className="flex flex-wrap gap-2">
                      {productSizes.map(size => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`px-4 py-2 text-sm rounded-md border ${
                            selectedSize === size 
                              ? 'bg-amber-600 text-white border-amber-600' 
                              : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Quantity */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-900 mb-2">Quantity</h3>
                  <div className="flex items-center">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 border border-gray-300 rounded-l-md"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      </svg>
                    </button>
                    <input 
                      type="number" 
                      min="1" 
                      value={quantity} 
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-16 text-center border-t border-b border-gray-300"
                    />
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-2 border border-gray-300 rounded-r-md"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <Button
                    variant="accent"
                    size="lg"
                    onClick={handleAddToCart}
                    className="flex-1"
                  >
                    Add to Cart
                  </Button>
                  <Button
                    variant="secondary"
                    size="lg"
                    onClick={onClose}
                    className="flex-1"
                  >
                    Close
                  </Button>
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