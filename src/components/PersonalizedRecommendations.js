import React, { useState, useEffect } from 'react';
import ProductGrid from './ProductGrid.js';
import MinimalProductCard from './MinimalProductCard.js';
import SectionLayout from './ui/SectionLayout.js';

// Mock user preferences (in a real app, this would come from user profile or behavior tracking)
const userPreferences = {
  categories: ['clothing', 'accessories', 'art'],
  colors: ['red', 'gold', 'brown'],
  priceRange: { min: 20, max: 100 }
};

// Function to calculate product similarity score based on user preferences
const calculateProductScore = (product, preferences) => {
  let score = 0;
  
  // Category matching
  if (preferences.categories.some(cat => product.category?.toLowerCase().includes(cat))) {
    score += 30;
  }
  
  // Color matching (simplified)
  if (preferences.colors.some(color => product.name?.toLowerCase().includes(color))) {
    score += 20;
  }
  
  // Price range matching
  if (product.price >= preferences.priceRange.min && product.price <= preferences.priceRange.max) {
    score += 15;
  }
  
  // Boost for popular items
  if (product.salesCount > 50) {
    score += 10;
  }
  
  // Boost for new items
  if (product.isNew) {
    score += 5;
  }
  
  return score;
};

// Function to get personalized recommendations
const getPersonalizedRecommendations = (products, preferences, count = 4) => {
  // Calculate scores for all products
  const scoredProducts = products.map(product => ({
    ...product,
    score: calculateProductScore(product, preferences)
  }));
  
  // Sort by score (descending) and take top N
  return scoredProducts
    .sort((a, b) => b.score - a.score)
    .slice(0, count);
};

function PersonalizedRecommendations({ products, onViewProduct, title = "Recommended For You" }) {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      const personalizedProducts = getPersonalizedRecommendations(products, userPreferences);
      setRecommendations(personalizedProducts);
      setLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [products]);
  
  // Function to refresh recommendations
  const refreshRecommendations = () => {
    setLoading(true);
    // Shuffle user preferences to simulate changing interests
    const updatedPreferences = {
      ...userPreferences,
      categories: [...userPreferences.categories].sort(() => Math.random() - 0.5)
    };
    
    setTimeout(() => {
      const personalizedProducts = getPersonalizedRecommendations(products, updatedPreferences);
      setRecommendations(personalizedProducts);
      setLoading(false);
    }, 500);
  };
  
  if (loading) {
    return (
      <div className="py-12">
        <SectionLayout
          title={title}
          subtitle="Based on your preferences and browsing history"
          action={
            <button 
              onClick={refreshRecommendations}
              className="text-amber-600 hover:text-amber-700 font-medium text-sm flex items-center font-body transition-colors"
            >
              Refresh recommendations
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>
          }
        >
          <div className="flex justify-center w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 justify-items-center mx-auto w-full">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="w-full max-w-xs bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm animate-pulse">
                  <div className="h-64 bg-gray-200 rounded-t-xl"></div>
                  <div className="p-4">
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2 mb-3"></div>
                    <div className="h-8 bg-gray-200 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionLayout>
      </div>
    );
  }
  
  if (recommendations.length === 0) {
    return null;
  }
  
  return (
    <div className="py-12">
      <SectionLayout
        title={title}
        subtitle="Based on your preferences and browsing history"
        action={
          <button 
            onClick={refreshRecommendations}
            className="text-amber-600 hover:text-amber-700 font-medium text-sm flex items-center font-body transition-colors"
          >
            Refresh recommendations
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
        }
      >
        <div className="flex justify-center w-full">
          <ProductGrid 
            products={recommendations} 
            columns={4}
            renderItem={(product) => (
              <div className="relative">
                <MinimalProductCard 
                  product={product} 
                  onViewProduct={onViewProduct} 
                  
                />
                <div className="absolute top-3 left-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-xs font-bold px-2 py-1 rounded-full font-body">
                  Personalized
                </div>
              </div>
            )}
          />
        </div>
      </SectionLayout>
    </div>
  );
}

export default PersonalizedRecommendations;