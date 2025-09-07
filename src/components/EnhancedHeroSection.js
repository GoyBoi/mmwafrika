import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button.js';
import { StaggeredContainer, StaggeredItem, FadeIn } from './ui/animations.js';

const heroImages = [
  {
    id: 1,
    src: '/products_and_logo/1000006827.jpg',
    alt: 'African fashion collection',
    title: 'Discover Authentic',
    subtitle: 'African Fashion',
    description: 'Experience the rich heritage and vibrant culture of Africa through our curated collection of traditional clothing, accessories, and artisan crafts.',
    cta: 'Shop Collection'
  },
  {
    id: 2,
    src: '/products_and_logo/1000006833.jpg',
    alt: 'Handwoven basket collection',
    title: 'Artisan Crafted',
    subtitle: 'Heritage Pieces',
    description: 'Each piece in our collection is carefully handcrafted by skilled artisans using traditional techniques passed down through generations.',
    cta: 'Explore Crafts'
  },
  {
    id: 3,
    src: '/products_and_logo/1000006880.jpg',
    alt: 'Wooden sculpture collection',
    title: 'Cultural Treasures',
    subtitle: 'Unique Finds',
    description: 'Discover one-of-a-kind items that celebrate the rich artistic traditions and cultural heritage of Africa.',
    cta: 'View Treasures'
  },
  {
    id: 4,
    src: '/products_and_logo/1000006881.jpg',
    alt: 'Kente cloth collection',
    title: 'Traditional Textiles',
    subtitle: 'Woven Stories',
    description: 'Authentic Kente cloth made in Ghana. Each pattern has a special meaning and significance in African culture.',
    cta: 'See Textiles'
  }
];

const EnhancedHeroSection = ({ onShopNow }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('right');
  const [isHovered, setIsHovered] = useState(false);

  // Auto-rotate images every 7 seconds, pause on hover
  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      setDirection('right');
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const nextSlide = () => {
    setDirection('right');
    setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setDirection('left');
    setCurrentIndex((prevIndex) => (prevIndex - 1 + heroImages.length) % heroImages.length);
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 'right' : 'left');
    setCurrentIndex(index);
  };

  const currentImage = heroImages[currentIndex];

  const imageVariants = {
    enter: (direction) => ({
      x: direction === 'right' ? 1000 : -1000,
      opacity: 0,
      scale: 1.1
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction === 'right' ? -1000 : 1000,
      opacity: 0,
      scale: 0.9
    }),
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div 
      className="relative w-full h-[85vh] overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background image with enhanced parallax effect */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={imageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.8 },
              scale: { duration: 0.8 }
            }}
            className="absolute inset-0"
          >
            <div 
              className="w-full h-full bg-cover bg-center bg-fixed"
              style={{ 
                backgroundImage: `url(${currentImage.src})`,
              }}
            />
            {/* Enhanced overlay for better text readability with gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent md:from-black/60 md:via-black/20 md:to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content with enhanced typography and layout */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl ml-0 md:ml-8 lg:ml-16">
            <motion.div
              key={currentIndex}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="space-y-6"
            >
              <div className="space-y-4">
                <motion.h2 
                  className="text-lg md:text-xl font-accent text-amber-400 tracking-widest uppercase"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  MMWafrika Collection
                </motion.h2>
                
                <motion.h1 
                  className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold tracking-tight text-white"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <span className="block">{currentImage.title}</span>
                  <span className="block text-amber-400 mt-2">{currentImage.subtitle}</span>
                </motion.h1>
              </div>
              
              <motion.p 
                className="text-base md:text-lg text-gray-200 font-body max-w-xl leading-relaxed"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                {currentImage.description}
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="pt-4"
              >
                <Button
                  onClick={() => onShopNow && onShopNow()}
                  variant="accent"
                  size="lg"
                  className="px-8 py-4 text-base font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover-glow-lg"
                >
                  {currentImage.cta}
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Enhanced Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm shadow-lg hover:bg-white/30 flex items-center justify-center transition-all duration-300 hover:scale-110 z-20 border border-white/30 hover-glow"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm shadow-lg hover:bg-white/30 flex items-center justify-center transition-all duration-300 hover:scale-110 z-20 border border-white/30 hover-glow"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Enhanced Dot Indicators with numbering */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center space-x-3 z-20">
        {heroImages.map((_, index) => (
          <div key={index} className="flex items-center">
            <button
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 hover-glow ${
                index === currentIndex 
                  ? 'bg-amber-400 w-8' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
            {index < heroImages.length - 1 && (
              <div className="w-8 h-px bg-white/30 mx-2"></div>
            )}
          </div>
        ))}
      </div>
      
      {/* Slide counter */}
      <div className="absolute bottom-8 right-8 text-white/70 text-sm font-body z-20">
        {currentIndex + 1} / {heroImages.length}
      </div>
    </div>
  );
};

export default EnhancedHeroSection;