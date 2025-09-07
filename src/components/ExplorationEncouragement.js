import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ExplorationEncouragement = ({ currentCategory, onViewCategory }) => {
  // Mock categories and collections
  const categories = [
    { id: 1, name: 'Clothing', slug: 'clothing', image: '/products_and_logo/1000006827.jpg', count: 24 },
    { id: 2, name: 'Accessories', slug: 'accessories', image: '/products_and_logo/1000006886.jpg', count: 18 },
    { id: 3, name: 'Home Decor', slug: 'home-decor', image: '/products_and_logo/1000006833.jpg', count: 15 },
    { id: 4, name: 'Art & Sculptures', slug: 'art-sculptures', image: '/products_and_logo/1000016728.jpg', count: 12 },
    { id: 5, name: 'Jewelry', slug: 'jewelry', image: '/products_and_logo/1000006886.jpg', count: 20 },
    { id: 6, name: 'Textiles', slug: 'textiles', image: '/products_and_logo/1000006881.jpg', count: 16 }
  ];
  
  const collections = [
    { id: 1, name: 'Heritage Collection', slug: 'heritage', description: 'Traditional pieces with cultural significance' },
    { id: 2, name: 'Modern Fusion', slug: 'modern-fusion', description: 'Contemporary designs inspired by tradition' },
    { id: 3, name: 'Artisan Crafted', slug: 'artisan', description: 'Handcrafted by skilled artisans' },
    { id: 4, name: 'Limited Edition', slug: 'limited-edition', description: 'Exclusive pieces with unique stories' }
  ];
  
  // Filter out the current category if provided
  const filteredCategories = currentCategory 
    ? categories.filter(cat => cat.slug !== currentCategory)
    : categories;
  
  // Get random categories to display
  const getRandomCategories = (array, count) => {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };
  
  const [displayCategories, setDisplayCategories] = useState([]);
  const [displayCollections, setDisplayCollections] = useState([]);
  
  useEffect(() => {
    setDisplayCategories(getRandomCategories(filteredCategories, 3));
    setDisplayCollections(getRandomCategories(collections, 2));
  }, [currentCategory]);
  
  // Refresh suggestions
  const refreshSuggestions = () => {
    setDisplayCategories(getRandomCategories(filteredCategories, 3));
    setDisplayCollections(getRandomCategories(collections, 2));
  };
  
  return (
    <div className="bg-gradient-to-br from-gray-50 to-amber-50 rounded-2xl p-6 shadow-sm border border-gray-200">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900 font-heading">Discover More</h3>
          <p className="text-gray-600 text-sm font-body">Explore related categories and collections</p>
        </div>
        <button 
          onClick={refreshSuggestions}
          className="text-amber-600 hover:text-amber-700 text-sm font-medium flex items-center font-body transition-colors"
        >
          Refresh
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </button>
      </div>
      
      {/* Category Suggestions */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-gray-900 mb-3 font-heading">Categories</h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {displayCategories.map((category) => (
            <motion.div
              key={category.id}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden cursor-pointer group"
              onClick={() => onViewCategory && onViewCategory(category.slug)}
            >
              <div className="relative h-32 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-2 left-2 right-2">
                  <h5 className="font-bold text-white text-sm font-heading">{category.name}</h5>
                  <p className="text-white/80 text-xs font-body">{category.count} items</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Collection Suggestions */}
      <div>
        <h4 className="text-sm font-semibold text-gray-900 mb-3 font-heading">Collections</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {displayCollections.map((collection) => (
            <motion.div
              key={collection.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-lg border border-gray-200 p-4 cursor-pointer group hover:shadow-md transition-all duration-300"
              onClick={() => onViewCategory && onViewCategory(collection.slug)}
            >
              <div className="flex items-start">
                <div className="bg-amber-100 text-amber-800 rounded-lg p-2 mr-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div>
                  <h5 className="font-bold text-gray-900 font-heading group-hover:text-amber-700 transition-colors">
                    {collection.name}
                  </h5>
                  <p className="text-gray-600 text-sm mt-1 font-body">{collection.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExplorationEncouragement;