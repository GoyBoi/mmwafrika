import React from 'react';
import { useCart } from '@/context/CartContext.js';
import { useWishlist } from '@/context/WishlistContext.js';
import { Button } from '@/components/ui/button.jsx';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const ProductActionButtons = ({ 
  product, 
  size = 'md',
  fullWidth = false,
  className = ''
}) => {
  const { addToCart } = useCart();
  const { addToWishlist, wishlistItems } = useWishlist();
  
  // Check if product is already in wishlist
  const isInWishlist = wishlistItems.some(item => item.id === product.id);
  
  // Size mapping
  const sizeClasses = {
    sm: 'h-8 text-xs px-3',
    md: 'h-9 text-sm px-4',
    lg: 'h-10 text-base px-6'
  };
  
  const iconSize = size === 'sm' ? 14 : size === 'lg' ? 18 : 16;
  
  // Enhanced animation variants
  const buttonVariants = {
    hover: { 
      scale: 1.03,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      } 
    },
    tap: { 
      scale: 0.98,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      } 
    }
  };
  
  const handleAddToCart = (e) => {
    e.stopPropagation();
    console.log('Adding product to cart:', product);
    addToCart(product);
  };
  
  const handleAddToWishlist = (e) => {
    e.stopPropagation();
    console.log('Adding product to wishlist:', product);
    addToWishlist(product);
  };
  
  return (
    <div className={`flex ${fullWidth ? 'w-full' : ''} space-x-2 ${className}`}>
      {/* Add to Cart Button */}
      <motion.div
        whileHover={buttonVariants.hover}
        whileTap={buttonVariants.tap}
        className="flex-1"
      >
        <Button
          variant="cart"
          size={size}
          onClick={handleAddToCart}
          className={`${sizeClasses[size]} w-full font-semibold shadow-md hover:shadow-lg transition-all duration-300 rounded-lg hover-glow`}
        >
          Add to Cart
        </Button>
      </motion.div>
      
      {/* Wishlist Button */}
      <motion.div
        whileHover={buttonVariants.hover}
        whileTap={buttonVariants.tap}
        className=""
      >
        <Button
          variant={isInWishlist ? "accent" : "outline"}
          size="icon"
          onClick={handleAddToWishlist}
          className="rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover-glow"
          aria-label={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart 
            size={iconSize} 
            className={isInWishlist ? "fill-current text-white" : "text-gray-700"} 
          />
        </Button>
      </motion.div>
    </div>
  );
};

export default ProductActionButtons;