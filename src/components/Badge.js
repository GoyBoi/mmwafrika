import React from 'react';

const Badge = ({ 
  children, 
  variant = 'default', 
  size = 'md',
  className = '',
  isNew = false,
  timestamp = null,
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center rounded-full font-medium';
  
  const variantClasses = {
    default: 'bg-gray-100 text-gray-800',
    primary: 'bg-amber-100 text-amber-800',
    secondary: 'bg-blue-100 text-blue-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    danger: 'bg-red-100 text-red-800',
    info: 'bg-indigo-100 text-indigo-800',
    dark: 'bg-gray-800 text-white',
    // Special variant for new arrivals
    'new-arrival': 'bg-gradient-to-r from-amber-500 to-orange-500 text-white',
  };
  
  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-2.5 py-0.5',
    lg: 'text-sm px-3 py-1',
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
    
    const classes = `${baseClasses} ${variantClasses['new-arrival']} ${sizeClasses[size]} ${className}`;
    
    return (
      <span className={classes} {...props}>
        {displayText}
      </span>
    );
  }
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
};

export default Badge;