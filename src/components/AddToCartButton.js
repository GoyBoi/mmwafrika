import React from 'react';
import { Button } from './ui/button.jsx';
import { useCart } from '../context/CartContext.js';
import { motion } from 'framer-motion';

const AddToCartButton = ({ 
  product, 
  size = 'md',
  fullWidth = true,
  onAddToCart,
  className = '',
  ...props 
}) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    
    console.log('AddToCartButton: Adding product to cart', product);
    
    // Add the product to cart
    addToCart(product);
    
    // Call the onAddToCart callback if provided
    if (onAddToCart) {
      onAddToCart(product);
    }
  };

  // Map size prop to shadcn sizes
  const sizeMap = {
    sm: 'sm',
    md: 'default',
    lg: 'lg'
  };

  // Map size prop to shadcn sizes
  const shadcnSize = sizeMap[size] || 'default';

  // Debug log to see if component is rendering
  console.log('AddToCartButton: Rendering with product', product);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={fullWidth ? 'w-full' : ''}
    >
      <Button
        variant="cart"
        size={shadcnSize}
        onClick={handleAddToCart}
        className={className}
        {...props}
      >
        Add to Cart
      </Button>
    </motion.div>
  );
};

export default AddToCartButton;