import React, { useState, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Typography, Grid, Snackbar, Alert } from '@mui/material';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import MinimalProductCard from '../components/MinimalProductCard.js';
import ProductPagination from '../components/ProductPagination.js';
import QuickViewModal from '../components/QuickViewModal.js';
import FilterSidebar from '../components/filters/FilterSidebar.js';
import MobileFilterSheet from '../components/filters/MobileFilterSheet.js';
import SortingDropdown from '../components/filters/SortingDropdown.js';
import ProductGrid from '../components/ProductGrid.js';
import ProductCarousel from '../components/ProductCarousel.js';
import Button from '../components/Button.js';
import { useCart } from '../context/CartContext.js';

// Mock product data with enhanced properties
const products = [
  {
    id: 1,
    name: 'African Print Dress',
    price: 29.99,
    originalPrice: 39.99,
    image: '/products_and_logo/1000006827.jpg',
    description: 'Beautiful traditional African print dress made from high-quality fabric. Perfect for any occasion.',
    isNew: true,
    addedDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // Added 2 days ago
    salesCount: 128
  },
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
    id: 3,
    name: 'Wooden Sculpture',
    price: 19.99,
    originalPrice: 24.99,
    image: '/products_and_logo/1000006880.jpg',
    description: 'Intricately carved wooden sculpture representing African culture and heritage.',
    isNew: true,
    addedDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // Added 1 day ago
    salesCount: 75
  },
  {
    id: 4,
    name: 'Kente Cloth',
    price: 49.99,
    image: '/products_and_logo/1000006881.jpg',
    description: 'Authentic Kente cloth made in Ghana. Each pattern has a special meaning and significance.',
    isNew: false,
    salesCount: 210
  },
  {
    id: 5,
    name: 'Beaded Jewelry Set',
    price: 59.99,
    image: '/products_and_logo/1000006886.jpg',
    description: 'Beautiful set of beaded jewelry including necklace, earrings, and bracelet. Handmade with vibrant colors.',
    isNew: false,
    salesCount: 187
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

function ProductListingPage() {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);
  // Add to cart functionality removed for fresh start
  
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
      <div className="relative w-full h-[85vh] overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/products_and_logo/1000006827.jpg')" }} />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent md:from-black/60 md:via-black/20 md:to-transparent" />
        </div>
        
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl ml-0 md:ml-8 lg:ml-16">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h2 className="text-lg md:text-xl font-accent text-amber-400 tracking-widest uppercase">
                    MMWafrika Collection
                  </h2>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold tracking-tight text-white">
                    <span className="block">Discover Authentic</span>
                    <span className="block text-amber-400 mt-2">African Fashion</span>
                  </h1>
                </div>
                <p className="text-base md:text-lg text-gray-200 font-body max-w-xl leading-relaxed">
                  Experience the rich heritage and vibrant culture of Africa through our curated collection of traditional clothing, accessories, and artisan crafts.
                </p>
                <div className="pt-4">
                  <Button
                    onClick={handleShopNow}
                    variant="accent"
                    size="lg"
                    className="px-8 py-4 text-base font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover-glow-lg"
                  >
                    Shop Collection
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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

      {/* Product Grid with Filters */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row">
            {/* Filter Sidebar - Hidden on mobile */}
            <div className="hidden md:block md:w-1/4 lg:w-1/5 pr-6">
              <FilterSidebar />
            </div>
            
            {/* Main Content */}
            <div className="flex-1">
              {/* Mobile Filter Button and Sorting */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                <Button
                  variant="secondary"
                  onClick={() => console.log('Open mobile filters')}
                  className="md:hidden w-full sm:w-auto"
                >
                  Filter Products
                </Button>
                
                <div className="flex items-center w-full sm:w-auto">
                  <span className="mr-4 text-sm text-gray-600 font-body">
                    {products.length} products
                  </span>
                  <SortingDropdown />
                </div>
              </div>
              
              {/* Product Grid */}
              <div className="w-full">
                <ProductGrid 
                  products={products} 
                  columns={4}
                  renderItem={(product) => (
                    <MinimalProductCard 
                      product={product} 
                      onViewProduct={handleViewProduct} 
                    />
                  )}
                />
              </div>
              
              {/* Pagination */}
              <div className="flex justify-center mt-12 mb-8">
                <ProductPagination
                  currentPage={1}
                  totalPages={Math.ceil(products.length / 8)}
                  onPageChange={(page) => console.log('Page changed to:', page)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ProductListingPage;