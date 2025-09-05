import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  variant = 'default',
  hoverable = false,
  ...props 
}) => {
  const baseClasses = 'bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-300';
  
  const variantClasses = {
    default: 'shadow-sm',
    elevated: 'shadow-md',
    bordered: 'border-2 border-gray-300',
  };
  
  const hoverClasses = hoverable 
    ? 'hover:shadow-xl hover:-translate-y-1' 
    : '';
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${hoverClasses} ${className}`;
  
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Card;