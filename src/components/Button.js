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
  ...props 
}) => {
  // Map our custom variants to shadcn variants
  const variantMap = {
    primary: 'default',
    secondary: 'secondary',
    ghost: 'ghost',
    accent: 'accent',
    primaryDark: 'primaryDark',
    cart: 'cart'
  };

  // Map size prop to shadcn sizes
  const sizeMap = {
    sm: 'sm',
    md: 'default',
    lg: 'lg'
  };

  const shadcnVariant = variantMap[variant] || variant;
  const shadcnSize = sizeMap[size] || size;

  console.log('Button: Rendering with classes', className);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={fullWidth ? 'w-full' : ''}
    >
      <ShadcnButton
        variant={shadcnVariant}
        size={shadcnSize}
        onClick={onClick}
        disabled={disabled}
        className={className}
        {...props}
      >
        {children}
      </ShadcnButton>
    </motion.div>
  );
};

export default Button;