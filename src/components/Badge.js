import React from 'react';
import { motion } from 'framer-motion';

const Badge = ({ 
  children, 
  variant = 'default', 
  size = 'md',
  className = '',
  isNew = false,
  timestamp = null,
  animate = true,
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center rounded-full font-medium font-body transition-all duration-300';
  
  const variantClasses = {
    default: 'bg-gray-100 text-gray-800 hover:bg-gray-200',
    primary: 'bg-amber-100 text-amber-800 hover:bg-amber-200',
    secondary: 'bg-blue-100 text-blue-800 hover:bg-blue-200',
    success: 'bg-green-100 text-green-800 hover:bg-green-200',
    warning: 'bg-amber-100 text-amber-800 hover:bg-amber-200',
    danger: 'bg-red-100 text-red-800 hover:bg-red-200',
    info: 'bg-indigo-100 text-indigo-800 hover:bg-indigo-200',
    dark: 'bg-gray-800 text-white hover:bg-gray-700',
    // Special variant for new arrivals
    'new-arrival': 'bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:shadow-md',
  };
  
  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-2.5 py-0.5',
    lg: 'text-sm px-3 py-1',
  };
  
  // Enhanced animation variants
  const badgeVariants = {
    hover: { 
      scale: 1.05,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      } 
    },
    tap: { 
      scale: 0.95,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      } 
    }
  };
  
  // Special handling for new arrival badges with timestamps
  if (isNew) {
    const now = new Date();
    const itemDate = timestamp ? new Date(timestamp) : now;
    const diffInDays = Math.floor((now - itemDate) / (1000 * 60 * 60 * 24));
    
    let displayText = 'NEW';
    if (timestamp && diffInDays <= 7) {
      displayText = `NEW - ${diffInDays}d ago`;
    }
    
    const classes = `${baseClasses} ${variantClasses['new-arrival']} ${sizeClasses[size]} ${className} hover-glow`;
    
    return (
      <motion.span 
        className={classes} 
        whileHover={animate ? badgeVariants.hover : {}}
        whileTap={animate ? badgeVariants.tap : {}}
        {...props}
      >
        {displayText}
      </motion.span>
    );
  }
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} hover-glow`;
  
  return (
    <motion.span 
      className={classes} 
      whileHover={animate ? badgeVariants.hover : {}}
      whileTap={animate ? badgeVariants.tap : {}}
      {...props}
    >
      {children}
    </motion.span>
  );
};

export default Badge;