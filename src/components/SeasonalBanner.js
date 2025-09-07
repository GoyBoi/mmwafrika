import React from 'react';
import { motion } from 'framer-motion';

const SeasonalBanner = ({ collection, onShopNow }) => {
  if (!collection) return null;
  
  return (
    <motion.div 
      className="relative w-full h-64 md:h-80 overflow-hidden"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0">
        <img 
          src={collection.image} 
          alt={collection.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent md:from-black/70 md:via-black/30 md:to-transparent"></div>
      </div>
      
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="inline-block bg-amber-500 text-white text-xs md:text-sm font-bold px-2 py-1 rounded-full mb-3 font-body">
                LIMITED TIME
              </span>
            </motion.div>
            
            <motion.h2
              className="text-2xl md:text-4xl font-bold text-white mb-3 font-heading"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {collection.name}
            </motion.h2>
            
            <motion.p
              className="text-base md:text-lg text-gray-200 mb-4 font-body"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {collection.description}
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row sm:space-x-3 space-y-3 sm:space-y-0"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <button
                onClick={() => onShopNow && onShopNow(collection.id)}
                className="bg-white text-gray-900 font-bold py-2 px-6 rounded-full text-sm md:text-base shadow-lg hover:bg-gray-100 transition-all duration-300 font-body hover-glow w-full sm:w-auto"
              >
                Shop Now
              </button>
              <span className="inline-flex items-center bg-amber-500/90 text-white text-sm font-bold px-3 py-2 rounded-full font-body">
                {collection.discount} OFF - Limited Time
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SeasonalBanner;