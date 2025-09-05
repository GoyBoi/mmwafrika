import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  disabled = false, 
  fullWidth = false,
  className = '',
  style = {}, // Accept custom style prop
  ...props 
}) => {
  // Base styles using actual values from our design system
  const baseStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '500',
    borderRadius: '0.5rem', // --radius-sm
    transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)', // --duration-normal and --ease-in-out
    cursor: 'pointer',
    border: 'none',
    outline: 'none',
    fontFamily: 'Inter, sans-serif', // --font-body
  };

  // Variant styles using actual color values from our design system
  const variantStyles = {
    primary: {
      backgroundColor: '#000000', // --color-black
      color: '#ffffff', // --color-white
      boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', // --shadow-sm
    },
    secondary: {
      backgroundColor: '#ffffff', // --color-white
      color: '#1d1d1f', // --color-black
      border: '1px solid #e7e5e4', // --color-border
    },
    ghost: {
      backgroundColor: 'transparent',
      color: '#1d1d1f', // --color-black
    },
    accent: {
      backgroundColor: '#d97706', // --color-amber
      color: '#ffffff', // --color-white
    },
  };

  // Hover styles
  const hoverStyles = {
    primary: {
      backgroundColor: '#1d1d1f', // --color-dark-gray
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', // --shadow-md
    },
    secondary: {
      backgroundColor: '#f5f5f7', // --color-warm-gray
      borderColor: '#86868b', // --color-cool-gray
    },
    ghost: {
      backgroundColor: '#f5f5f7', // --color-warm-gray
    },
    accent: {
      backgroundColor: '#c2410c', // --color-terracotta (darker amber for hover)
    },
  };

  // Size styles
  const sizeStyles = {
    sm: {
      fontSize: '1rem', // --font-size-body
      padding: '0.5rem 1rem', // --spacing-2xs and --spacing-sm
    },
    md: {
      fontSize: '1rem', // --font-size-body
      padding: '0.5rem 1rem', // --spacing-2xs and --spacing-sm
    },
    lg: {
      fontSize: '1rem', // --font-size-body
      padding: '0.75rem 1.5rem', // --spacing-xs and --spacing-md
    },
  };

  // Disabled styles
  const disabledStyles = {
    opacity: '0.5',
    cursor: 'not-allowed',
  };

  // Combine all styles
  const combinedStyles = {
    ...baseStyles,
    ...variantStyles[variant],
    ...sizeStyles[size],
    ...(disabled ? disabledStyles : {}),
    ...(fullWidth ? { width: '100%' } : {}),
    ...style, // Merge custom styles passed as props
  };

  // Add hover effect with onMouseEnter and onMouseLeave
  const [isHovered, setIsHovered] = React.useState(false);
  
  const handleMouseEnter = () => {
    if (!disabled) {
      setIsHovered(true);
    }
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  
  // Apply hover styles if hovered
  const finalStyles = isHovered ? {
    ...combinedStyles,
    ...hoverStyles[variant]
  } : combinedStyles;

  return (
    <button 
      style={finalStyles}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;