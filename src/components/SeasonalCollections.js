import React from 'react';
import { motion } from 'framer-motion';

const SeasonalCollections = ({ onViewCollection }) => {
  // Mock seasonal collections
  const collections = [
    {
      id: 1,
      name: "Harvest Festival Collection",
      description: "Celebrate the season with our autumn-inspired pieces",
      image: "/products_and_logo/1000006881.jpg",
      startDate: "2025-09-01",
      endDate: "2025-10-31",
      discount: "20%",
      featured: true
    },
    {
      id: 2,
      name: "Heritage Month Collection",
      description: "Honoring cultural traditions with special curated items",
      image: "/products_and_logo/1000016728.jpg",
      startDate: "2025-08-01",
      endDate: "2025-09-30",
      discount: "15%",
      featured: false
    },
    {
      id: 3,
      name: "Back to School Essentials",
      description: "Traditional accessories perfect for the new school year",
      image: "/products_and_logo/1000006886.jpg",
      startDate: "2025-08-15",
      endDate: "2025-09-30",
      discount: "10%",
      featured: false
    }
  ];

  // Get current seasonal collection (featured one)
  const currentCollection = collections.find(collection => collection.featured);

  return (
    <div className="py-12 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-heading">Seasonal Collections</h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-body">
            Discover our curated collections for every season and celebration
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Featured Collection Banner */}
        {currentCollection && (
          <motion.div 
            className="relative rounded-2xl overflow-hidden shadow-xl mb-12"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="relative h-96 md:h-[500px]">
              <img 
                src={currentCollection.image} 
                alt={currentCollection.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent md:from-black/60 md:via-black/20 md:to-transparent"></div>
              
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div className="max-w-lg ml-0 md:ml-8 lg:ml-16">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                    >
                      <span className="inline-block bg-amber-500 text-white text-sm font-bold px-3 py-1 rounded-full mb-4 font-body">
                        {currentCollection.discount} OFF
                      </span>
                      <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 font-heading">
                        {currentCollection.name}
                      </h3>
                      <p className="text-xl text-gray-200 mb-8 font-body">
                        {currentCollection.description}
                      </p>
                      <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                        <button
                          onClick={() => onViewCollection && onViewCollection(currentCollection.id)}
                          className="bg-white text-gray-900 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 font-body hover-glow"
                        >
                          Shop Collection
                        </button>
                        <button
                          onClick={() => onViewCollection && onViewCollection('all')}
                          className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white/10 transition-all duration-300 font-body"
                        >
                          View All Collections
                        </button>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* All Collections Grid */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center font-heading">All Collections</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((collection) => (
              <motion.div
                key={collection.id}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 cursor-pointer group"
                onClick={() => onViewCollection && onViewCollection(collection.id)}
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={collection.image} 
                    alt={collection.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="inline-block bg-white text-gray-900 text-xs font-bold px-2 py-1 rounded-full font-body">
                      {collection.discount} OFF
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2 font-heading group-hover:text-amber-700 transition-colors">
                    {collection.name}
                  </h4>
                  <p className="text-gray-600 mb-4 font-body">{collection.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500 font-body">
                      Until {new Date(collection.endDate).toLocaleDateString()}
                    </span>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-amber-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeasonalCollections;