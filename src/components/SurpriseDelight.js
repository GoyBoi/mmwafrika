import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SurpriseDelight = ({ products }) => {
  const [currentTip, setCurrentTip] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  
  // Fun facts and tips about African culture and products
  const tips = [
    {
      id: 1,
      type: 'fact',
      title: 'Did you know?',
      content: 'Kente cloth from Ghana is traditionally worn by royalty and during special occasions. Each pattern has a special meaning!',
      icon: '👑'
    },
    {
      id: 2,
      type: 'tip',
      title: 'Styling Tip',
      content: 'Pair our African Print Dress with simple accessories to let the vibrant patterns shine!',
      icon: '👗'
    },
    {
      id: 3,
      type: 'fact',
      title: 'Cultural Insight',
      content: 'The art of basket weaving in Africa has been passed down through generations for over 1,000 years.',
      icon: '🧺'
    },
    {
      id: 4,
      type: 'tip',
      title: 'Care Tip',
      content: 'To preserve the vibrant colors of your beaded jewelry, avoid contact with perfumes and lotions.',
      icon: '💎'
    },
    {
      id: 5,
      type: 'fact',
      title: 'Artisan Spotlight',
      content: 'Our wooden sculptures are carved by master artisans who have been perfecting their craft for over 30 years.',
      icon: '🪵'
    }
  ];
  
  // Function to get a random product highlight
  const getRandomProductHighlight = () => {
    if (!products || products.length === 0) return null;
    
    const randomProduct = products[Math.floor(Math.random() * products.length)];
    return {
      id: `product-${randomProduct.id}`,
      type: 'product',
      title: 'Featured Product',
      content: `Check out ${randomProduct.name} - one of our customer favorites!`,
      icon: '⭐',
      product: randomProduct
    };
  };
  
  // Combine tips with random product highlights
  const allTips = [...tips];
  const productHighlight = getRandomProductHighlight();
  if (productHighlight) {
    allTips.push(productHighlight);
  }
  
  // Rotate tips every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentTip((prev) => (prev + 1) % allTips.length);
        setIsVisible(true);
      }, 300);
    }, 10000);
    
    return () => clearInterval(interval);
  }, [allTips.length]);
  
  const currentTipData = allTips[currentTip];
  
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white rounded-xl shadow-xl border border-gray-200 p-4 max-w-xs"
          >
            <div className="flex items-start">
              <div className="text-2xl mr-3">{currentTipData.icon}</div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-900 text-sm mb-1 font-heading">{currentTipData.title}</h4>
                <p className="text-gray-600 text-sm font-body">{currentTipData.content}</p>
              </div>
              <button 
                onClick={() => setIsVisible(false)}
                className="text-gray-400 hover:text-gray-600 ml-2"
                aria-label="Close tip"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {currentTipData.type === 'product' && currentTipData.product && (
              <div className="mt-3 flex items-center p-2 bg-amber-50 rounded-lg border border-amber-100">
                <div className="flex-shrink-0 w-10 h-10 rounded-md overflow-hidden border border-gray-200">
                  <img 
                    src={currentTipData.product.image} 
                    alt={currentTipData.product.name}
                    className="w-full h-full object-contain p-1"
                  />
                </div>
                <div className="ml-2">
                  <p className="text-xs font-medium text-gray-900 truncate max-w-[80px] font-body">
                    {currentTipData.product.name}
                  </p>
                  <p className="text-xs text-amber-600 font-semibold font-body">
                    ${currentTipData.product.price.toFixed(2)}
                  </p>
                </div>
              </div>
            )}
            
            <div className="mt-3 flex justify-between items-center">
              <div className="flex space-x-1">
                {allTips.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      index === currentTip ? 'bg-amber-500' : 'bg-gray-300'
                    }`}
                  ></div>
                ))}
              </div>
              <button 
                onClick={() => {
                  setIsVisible(false);
                  setTimeout(() => {
                    setCurrentTip((prev) => (prev + 1) % allTips.length);
                    setIsVisible(true);
                  }, 300);
                }}
                className="text-xs text-amber-600 hover:text-amber-700 font-medium font-body"
              >
                Next
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SurpriseDelight;