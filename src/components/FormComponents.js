import React from 'react';

// Input component
const Input = ({ 
  label, 
  id, 
  error, 
  helperText, 
  className = '', 
  fullWidth = false,
  ...props 
}) => {
  const baseClasses = 'block w-full rounded-lg border border-gray-300 bg-white py-2 px-3 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 sm:text-sm';
  
  const errorClasses = error ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : '';
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  const classes = `${baseClasses} ${errorClasses} ${widthClass} ${className}`;
  
  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <input
        id={id}
        className={classes}
        {...props}
      />
      {(helperText || error) && (
        <p className={`mt-1 text-sm ${error ? 'text-red-600' : 'text-gray-500'}`}>
          {error || helperText}
        </p>
      )}
    </div>
  );
};

// Textarea component
const Textarea = ({ 
  label, 
  id, 
  error, 
  helperText, 
  className = '', 
  fullWidth = false,
  rows = 4,
  ...props 
}) => {
  const baseClasses = 'block w-full rounded-lg border border-gray-300 bg-white py-2 px-3 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 sm:text-sm';
  
  const errorClasses = error ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : '';
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  const classes = `${baseClasses} ${errorClasses} ${widthClass} ${className}`;
  
  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <textarea
        id={id}
        rows={rows}
        className={classes}
        {...props}
      />
      {(helperText || error) && (
        <p className={`mt-1 text-sm ${error ? 'text-red-600' : 'text-gray-500'}`}>
          {error || helperText}
        </p>
      )}
    </div>
  );
};

// Select component
const Select = ({ 
  label, 
  id, 
  options = [], 
  error, 
  helperText, 
  className = '', 
  fullWidth = false,
  ...props 
}) => {
  const baseClasses = 'block w-full rounded-lg border border-gray-300 bg-white py-2 px-3 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 sm:text-sm';
  
  const errorClasses = error ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : '';
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  const classes = `${baseClasses} ${errorClasses} ${widthClass} ${className}`;
  
  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <select
        id={id}
        className={classes}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {(helperText || error) && (
        <p className={`mt-1 text-sm ${error ? 'text-red-600' : 'text-gray-500'}`}>
          {error || helperText}
        </p>
      )}
    </div>
  );
};

// Checkbox component
const Checkbox = ({ 
  label, 
  id, 
  checked,
  onChange,
  className = '',
  ...props 
}) => {
  return (
    <div className="flex items-center">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className={`h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded ${className}`}
        {...props}
      />
      {label && (
        <label htmlFor={id} className="ml-2 block text-sm text-gray-900">
          {label}
        </label>
      )}
    </div>
  );
};

// RadioButton component
const RadioButton = ({ 
  label, 
  id, 
  checked,
  onChange,
  className = '',
  ...props 
}) => {
  return (
    <div className="flex items-center">
      <input
        id={id}
        type="radio"
        checked={checked}
        onChange={onChange}
        className={`h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 ${className}`}
        {...props}
      />
      {label && (
        <label htmlFor={id} className="ml-2 block text-sm text-gray-900">
          {label}
        </label>
      )}
    </div>
  );
};

export { Input, Textarea, Select, Checkbox, RadioButton };