import React from 'react';
import { motion } from 'framer-motion';

const Rating = ({ 
  value = 0, 
  count = 0, 
  size = 'md',
  readonly = false,
  onChange,
  className = '',
  animate = true,
  ...props 
}) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6',
  };
  
  const handleClick = (ratingValue) => {
    if (!readonly && onChange) {
      onChange(ratingValue);
    }
  };
  
  const fullStars = Math.floor(value);
  const hasHalfStar = value % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  
  // Enhanced animation variants
  const starVariants = {
    hover: { 
      scale: 1.2,
      rotate: [0, 5],
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
  
  return (
    <div className={`flex items-center ${className}`} {...props}>
      <div className="flex">
        {/* Full stars with enhanced animations */}
        {[...Array(fullStars)].map((_, i) => (
          <motion.svg
            key={`full-${i}`}
            className={`${sizeClasses[size]} text-amber-400 fill-current cursor-${readonly ? 'default' : 'pointer'} transition-transform duration-200`}
            onClick={() => handleClick(i + 1)}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            whileHover={animate && !readonly ? starVariants.hover : {}}
            whileTap={animate && !readonly ? starVariants.tap : {}}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1, duration: 0.3 }}
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </motion.svg>
        ))}
        
        {/* Half star with enhanced animations */}
        {hasHalfStar && (
          <div className="relative">
            <svg
              className={`${sizeClasses[size]} text-gray-300 fill-current`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
            <motion.div 
              className="absolute inset-y-0 left-0 overflow-hidden w-1/2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: fullStars * 0.1, duration: 0.3 }}
            >
              <svg
                className={`${sizeClasses[size]} text-amber-400 fill-current`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </motion.div>
          </div>
        )}
        
        {/* Empty stars with enhanced animations */}
        {[...Array(emptyStars)].map((_, i) => (
          <motion.svg
            key={`empty-${i}`}
            className={`${sizeClasses[size]} text-gray-300 fill-current cursor-${readonly ? 'default' : 'pointer'} transition-transform duration-200`}
            onClick={() => handleClick(fullStars + (hasHalfStar ? 1 : 0) + i + 1)}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            whileHover={animate && !readonly ? starVariants.hover : {}}
            whileTap={animate && !readonly ? starVariants.tap : {}}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: (fullStars + (hasHalfStar ? 1 : 0) + i) * 0.1, duration: 0.3 }}
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </motion.svg>
        ))}
      </div>
      
      {count > 0 && (
        <motion.span 
          className="ml-1 text-sm text-gray-600 font-body"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.3 }}
        >
          ({count})
        </motion.span>
      )}
    </div>
  );
};

export default Rating;