import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import ProductCarousel from '../components/ProductCarousel.js';
import BestSellersSection from '../components/BestSellersSection.js';
import LimitedTimeOffersSection from '../components/LimitedTimeOffersSection.js';
import EmailSignupForm from '../components/EmailSignupForm.js';
import CuratorsPicksSection from '../components/CuratorsPicksSection.js';
import SocialProofSection from '../components/SocialProofSection.js';
import WindowShoppingSection from '../components/WindowShoppingSection.js';
import PersonalizedRecommendations from '../components/PersonalizedRecommendations.js';
import RewardsSection from '../components/RewardsSection.js';
import SeasonalCollections from '../components/SeasonalCollections.js';
import Button from '../components/Button.js';
import EnhancedHeroSection from '../components/EnhancedHeroSection.js';
import SectionLayout from '../components/ui/SectionLayout.js';
import { useCart } from '../context/CartContext.js';

// Mock product data with additional properties for our new features
const products = [
  {
    id: 1,
    name: 'African Print Dress',
    price: 29.99,
    image: '/products_and_logo/1000006827.jpg',
    description: 'Beautiful traditional African print dress made from high-quality fabric. Perfect for any occasion.',
    isNew: true,
    addedDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // Added 2 days ago
    salesCount: 128,
    stockCount: 3 // Low stock
  },
  {
    id: 2,
    name: 'Handwoven Basket',
    price: 39.99,
    image: '/products_and_logo/1000006833.jpg',
    description: 'Handcrafted basket made by skilled artisans using traditional techniques. Great for storage or decoration.',
    isNew: false,
    salesCount: 96,
    stockCount: 15
  },
  {
    id: 3,
    name: 'Wooden Sculpture',
    price: 19.99,
    image: '/products_and_logo/1000006880.jpg',
    description: 'Intricately carved wooden sculpture representing African culture and heritage.',
    isNew: true,
    addedDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // Added 1 day ago
    salesCount: 75,
    stockCount: 1 // Almost gone
  },
  {
    id: 4,
    name: 'Kente Cloth',
    price: 49.99,
    image: '/products_and_logo/1000006881.jpg',
    description: 'Authentic Kente cloth made in Ghana. Each pattern has a special meaning and significance.',
    isNew: false,
    salesCount: 210,
    stockCount: 8
  },
  {
    id: 5,
    name: 'Beaded Jewelry Set',
    price: 59.99,
    image: '/products_and_logo/1000006886.jpg',
    description: 'Beautiful set of beaded jewelry including necklace, earrings, and bracelet. Handmade with vibrant colors.',
    isNew: false,
    salesCount: 187,
    stockCount: 20
  },
  {
    id: 6,
    name: 'Traditional Mask',
    price: 69.99,
    image: '/products_and_logo/1000016728.jpg',
    description: 'Traditional African mask used in ceremonies and cultural events. Made from authentic materials.',
    isNew: true,
    addedDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // Added 5 days ago
    salesCount: 64,
    stockCount: 5 // Low stock
  }
];

// Mock limited time offers data
const limitedTimeOffers = [
  {
    title: 'Summer Collection Sale',
    description: 'Up to 50% off on selected items',
    discount: '50%',
    endTime: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days from now
    products: [products[0], products[1]]
  },
  {
    title: 'New Arrivals Special',
    description: '25% off all new arrivals',
    discount: '25%',
    endTime: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // 5 days from now
    products: [products[2], products[5]]
  }
];

function HomePage() {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { cartItems, totalItems } = useCart();
  
  const handleShopNow = () => {
    navigate('/products');
  };

  const handleViewProduct = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <EnhancedHeroSection onShopNow={handleShopNow} />

      {/* Featured Products Carousel */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-heading font-semibold text-gray-900 mb-2">Featured Products</h2>
            <p className="text-gray-600 font-body">Handpicked selections from our collection</p>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mt-4 rounded-full"></div>
          </div>
          <ProductCarousel 
            products={products.slice(0, 3)} 
            onViewProduct={handleViewProduct} 
          />
        </div>
      </div>

      {/* Limited Time Offers */}
      <div className="py-8">
        <LimitedTimeOffersSection 
          offers={limitedTimeOffers} 
          onViewProduct={handleViewProduct} 
        />
      </div>

      {/* Window Shopping Section - New browsing encouragement features */}
      <div className="py-8">
        <WindowShoppingSection 
          products={products} 
          onViewProduct={handleViewProduct} 
        />
      </div>

      {/* Personalized Recommendations */}
      <div className="py-8">
        <PersonalizedRecommendations 
          products={products} 
          onViewProduct={handleViewProduct} 
        />
      </div>

      {/* Rewards Section */}
      <div className="py-8">
        <RewardsSection />
      </div>

      {/* Best Sellers */}
      <div className="py-8">
        <BestSellersSection 
          products={products} 
          onViewProduct={handleViewProduct} 
        />
      </div>

      {/* Curator's Picks */}
      <div className="py-8">
        <CuratorsPicksSection 
          onViewProduct={handleViewProduct} 
        />
      </div>

      {/* Social Proof */}
      <div className="py-8">
        <SocialProofSection />
      </div>

      {/* Seasonal Collections */}
      <div className="py-8">
        <SeasonalCollections onViewCollection={(id) => console.log('View collection:', id)} />
      </div>

      {/* Email Signup */}
      <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <EmailSignupForm />
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;