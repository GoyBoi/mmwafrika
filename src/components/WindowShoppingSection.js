import React, { useState, useEffect } from 'react';
import ProductGrid from './ProductGrid.js';
import MinimalProductCard from './MinimalProductCard.js';
import SectionLayout from './ui/SectionLayout.js';

function WindowShoppingSection({ products, onViewProduct }) {
  // Mock data for recently viewed products (in a real app, this would come from localStorage or context)
  const [recentlyViewed, setRecentlyViewed] = useState([
    {
      id: 3,
      name: 'Wooden Sculpture',
      price: 19.99,
      image: '/products_and_logo/1000006880.jpg',
      description: 'Intricately carved wooden sculpture representing African culture and heritage.',
      isNew: true,
      addedDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // Added 1 day ago
      salesCount: 75
    },
    {
      id: 5,
      name: 'Beaded Jewelry Set',
      price: 59.99,
      image: '/products_and_logo/1000006886.jpg',
      description: 'Beautiful set of beaded jewelry including necklace, earrings, and bracelet. Handmade with vibrant colors.',
      isNew: false,
      salesCount: 187
    }
  ]);

  // Mock data for "Just For You" recommendations (in a real app, this would be based on user behavior)
  const [justForYou, setJustForYou] = useState([
    {
      id: 2,
      name: 'Handwoven Basket',
      price: 39.99,
      image: '/products_and_logo/1000006833.jpg',
      description: 'Handcrafted basket made by skilled artisans using traditional techniques. Great for storage or decoration.',
      isNew: false,
      salesCount: 96
    },
    {
      id: 6,
      name: 'Traditional Mask',
      price: 69.99,
      image: '/products_and_logo/1000016728.jpg',
      description: 'Traditional African mask used in ceremonies and cultural events. Made from authentic materials.',
      isNew: true,
      addedDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // Added 5 days ago
      salesCount: 64
    },
    {
      id: 1,
      name: 'African Print Dress',
      price: 29.99,
      image: '/products_and_logo/1000006827.jpg',
      description: 'Beautiful traditional African print dress made from high-quality fabric. Perfect for any occasion.',
      isNew: true,
      addedDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // Added 2 days ago
      salesCount: 128
    },
    {
      id: 4,
      name: 'Kente Cloth',
      price: 49.99,
      image: '/products_and_logo/1000006881.jpg',
      description: 'Authentic Kente cloth made in Ghana. Each pattern has a special meaning and significance.',
      isNew: false,
      salesCount: 210
    }
  ]);

  // Function to shuffle array (for random recommendations)
  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  // Function to refresh "Just For You" recommendations
  const refreshRecommendations = () => {
    setJustForYou(shuffleArray(products).slice(0, 4));
  };

  return (
    <div className="py-12">
      {/* Recently Viewed Section */}
      {recentlyViewed.length > 0 && (
        <div className="mb-16">
          <SectionLayout
            title="Recently Viewed"
            subtitle="Continue exploring items you've shown interest in"
          >
            <div className="flex justify-center w-full">
              <ProductGrid 
                products={recentlyViewed} 
                columns={4}
                renderItem={(product) => (
                  <MinimalProductCard 
                    product={product} 
                    onViewProduct={onViewProduct} 
                    
                  />
                )}
              />
            </div>
          </SectionLayout>
        </div>
      )}

      {/* Just For You Section */}
      <div className="mb-16">
        <SectionLayout
          title="Just For You"
          subtitle="Handpicked based on your interests"
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
              products={justForYou} 
              columns={4}
              renderItem={(product) => (
                <MinimalProductCard 
                  product={product} 
                  onViewProduct={onViewProduct} 
                />
              )}
            />
          </div>
        </SectionLayout>
      </div>

      {/* Trending Now Section */}
      <div>
        <SectionLayout
          title="Trending Now"
          subtitle="What other customers are loving right now"
        >
          <div className="flex justify-center w-full">
            <ProductGrid 
              products={products.filter(p => p.salesCount > 100).slice(0, 4)} 
              columns={4}
              renderItem={(product) => (
                <div className="relative">
                  <MinimalProductCard 
                    product={product} 
                    onViewProduct={onViewProduct} 
                    
                  />
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full font-body">
                    Hot
                  </div>
                </div>
              )}
            />
          </div>
        </SectionLayout>
      </div>
    </div>
  );
}

export default WindowShoppingSection;