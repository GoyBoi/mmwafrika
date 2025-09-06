import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext.js';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const ShoppingCartIcon = () => {
  const { cartItems, totalItems } = useCart();
  const navigate = useNavigate();

  console.log('ShoppingCartIcon rendering - cartItems:', cartItems, 'totalItems:', totalItems);

  const handleClick = () => {
    navigate('/cart');
  };

  // Always show the badge with the actual count (0 when empty)
  const displayCount = totalItems || 0;

  console.log('Display count:', displayCount);

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleClick}
      className="relative rounded-full p-2 transition-colors hover:bg-amber-50 hover:text-amber-600 focus:outline-none overflow-visible"
      aria-label="Shopping cart"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <ShoppingCart className="h-6 w-6 text-gray-700 group-hover:text-amber-600 transition-colors" />
      </motion.div>
      
      {/* Always show badge - MADE MORE VISIBLE FOR DEBUGGING */}
      <div className="absolute -top-2 -right-2 flex items-center justify-center w-6 h-6 bg-red-500 rounded-full z-50 border-2 border-white shadow-lg">
        <span className="text-xs font-bold text-white font-body">
          {displayCount > 9 ? '9+' : displayCount}
        </span>
      </div>
    </Button>
  );
};

export default ShoppingCartIcon;