import React from 'react';
import { motion } from 'framer-motion';

const ScarcityIndicator = ({ stockCount, salesCount, addedDate }) => {
  // Scarcity thresholds
  const lowStockThreshold = 5;
  const isLowStock = stockCount <= lowStockThreshold;
  const isAlmostGone = stockCount <= 2;
  
  // Recently added indicator (within last 3 days)
  const isNewArrival = addedDate && (new Date() - new Date(addedDate)) < (3 * 24 * 60 * 60 * 1000);
  
  // Popular item indicator (sold more than 100 times)
  const isPopular = salesCount > 100;
  
  // Don't show anything if there are no scarcity indicators
  if (!isLowStock && !isNewArrival && !isPopular) {
    return null;
  }
  
  return (
    <motion.div 
      className="flex flex-wrap gap-2 mb-4"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {isLowStock && (
        <motion.span 
          className="inline-flex items-center bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium font-body"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 500, 
            damping: 20,
            delay: 0.1 
          }}
        >
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {isAlmostGone ? 'Almost gone!' : `Only ${stockCount} left in stock!`}
        </motion.span>
      )}
      
      {isNewArrival && (
        <motion.span 
          className="inline-flex items-center bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium font-body"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 500, 
            damping: 20,
            delay: 0.2 
          }}
        >
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          New Arrival
        </motion.span>
      )}
      
      {isPopular && (
        <motion.span 
          className="inline-flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium font-body"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 500, 
            damping: 20,
            delay: 0.3 
          }}
        >
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
          Popular Item ({salesCount} sold)
        </motion.span>
      )}
    </motion.div>
  );
};

export default ScarcityIndicator;