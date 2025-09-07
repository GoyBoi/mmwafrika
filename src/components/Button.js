import React from 'react';
import { Button as ShadcnButton } from './ui/button.jsx';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = 'default', 
  size = 'default', 
  onClick, 
  disabled = false, 
  fullWidth = false,
  className = '',
  animate = true,
  ...props 
}) => {
  // Handle variant mapping and custom styling
  let additionalClasses = '';
  
  if (variant === 'accent') {
    // For accent variant, we want to use our custom amber color
    additionalClasses = 'bg-amber-600 hover:bg-amber-700 text-white';
  } else if (variant === 'primary') {
    // For primary variant on dark backgrounds, use white background
    additionalClasses = 'bg-white text-black hover:bg-gray-100';
  }

  console.log('Button: Rendering with classes', className);

  // Enhanced animation variants
  const animationVariants = {
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

  return (
    <motion.div
      whileHover={animate ? animationVariants.hover : {}}
      whileTap={animate ? animationVariants.tap : {}}
      className={`${fullWidth ? 'w-full' : ''} inline-block`}
    >
      <ShadcnButton
        variant={variant === 'accent' ? 'accent' : (variant === 'primary' ? 'primaryDark' : variant)}
        size={size}
        onClick={onClick}
        disabled={disabled}
        className={`${additionalClasses} ${className} transition-all duration-300 transform hover:scale-105`}
        {...props}
      >
        {children}
      </ShadcnButton>
    </motion.div>
  );
};

export default Button;