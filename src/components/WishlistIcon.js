import React from 'react';
import { useWishlist } from '@/context/WishlistContext.js';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

const WishlistIcon = () => {
  const { wishlistItems, totalItems } = useWishlist();
  const navigate = useNavigate();

  console.log('WishlistIcon rendering - wishlistItems:', wishlistItems, 'totalItems:', totalItems);

  const handleClick = () => {
    navigate('/wishlist');
  };

  // Always show the badge with the actual count (0 when empty)
  const displayCount = totalItems || 0;

  console.log('Wishlist display count:', displayCount);

  // Enhanced animation variants
  const iconVariants = {
    hover: { 
      scale: 1.1,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      } 
    },
    tap: { 
      scale: 0.9,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      } 
    }
  };

  const badgeVariants = {
    initial: { 
      scale: 0,
      opacity: 0,
      rotate: 0
    },
    animate: { 
      scale: 1,
      opacity: 1,
      rotate: [0, 10],
      transition: { 
        type: "spring", 
        stiffness: 500, 
        damping: 20 
      } 
    },
    exit: { 
      scale: 0,
      opacity: 0,
      transition: { 
        duration: 0.2 
      } 
    },
    hover: {
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleClick}
      className="relative rounded-full p-2 transition-colors hover:bg-amber-50 hover:text-amber-600 focus:outline-none overflow-visible group hover-glow"
      aria-label="Wishlist"
    >
      <motion.div
        variants={iconVariants}
        whileHover={iconVariants.hover}
        whileTap={iconVariants.tap}
        className="flex items-center justify-center"
      >
        <Heart className="h-6 w-6 text-gray-700 group-hover:text-amber-600 transition-colors" />
      </motion.div>
      
      {/* Always show badge - MADE MORE VISIBLE FOR DEBUGGING */}
      <motion.div
        key={displayCount}
        initial="initial"
        animate="animate"
        exit="exit"
        whileHover="hover"
        variants={badgeVariants}
        className="absolute -top-2 -right-2 flex items-center justify-center w-6 h-6 bg-red-500 rounded-full z-50 border-2 border-white shadow-lg hover-glow"
      >
        <span className="text-xs font-bold text-white font-body">
          {displayCount > 9 ? '9+' : displayCount}
        </span>
      </motion.div>
    </Button>
  );
};

export default WishlistIcon;