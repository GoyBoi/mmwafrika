import React, { useState } from 'react';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import Button from '../components/Button.js';
import ProductCard from '../components/ProductCard.js';
import ProductCardSkeleton from '../components/ProductCardSkeleton.js';
import ProductDetailSkeleton from '../components/ProductDetailSkeleton.js';
import ProductListingSkeleton from '../components/ProductListingSkeleton.js';
import NotificationAlert from '../components/NotificationAlert.js';
import HelpTooltip from '../components/HelpTooltip.js';
import ProductImageCarousel from '../components/ProductImageCarousel.js';
import ProductDetailTabs from '../components/ProductDetailTabs.js';
import ProductDescriptionAccordion from '../components/ProductDescriptionAccordion.js';

// Mock product data
const mockProduct = {
  id: 1,
  name: 'African Print Dress',
  price: 29.99,
  originalPrice: 39.99,
  image: '/products_and_logo/1000006827.jpg',
  images: [
    '/products_and_logo/1000006827.jpg',
    '/products_and_logo/1000006827.jpg',
    '/products_and_logo/1000006827.jpg'
  ],
  description: 'Beautiful traditional African print dress made from high-quality fabric. Perfect for any occasion.',
  rating: 4.5,
  reviewCount: 128,
  salesCount: 342,
  isNew: true,
  addedDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
  category: 'dresses',
  gender: 'women',
  color: 'multi',
  size: ['S', 'M', 'L', 'XL'],
  material: '100% Cotton',
  fit: 'True to size'
};

// Mock reviews data
const mockReviews = [
  {
    id: 1,
    userName: 'Amara O.',
    rating: 5,
    date: '2025-08-15',
    comment: 'Absolutely stunning! The quality and craftsmanship are exceptional. I received so many compliments when I wore it to the cultural event.',
    verified: true
  },
  {
    id: 2,
    userName: 'Kwame A.',
    rating: 4,
    date: '2025-08-10',
    comment: 'Beautiful dress with vibrant colors. The fabric is comfortable and breathable. Size was true to fit.',
    verified: true
  }
];

function ComponentShowcasePage() {
  const [showAlert, setShowAlert] = useState(true);
  const [cartItems, setCartItems] = useState(0);
  
  const handleAddToCart = (product) => {
    setCartItems(cartItems + 1);
    // Show success notification
    setShowAlert(true);
  };
  
  const handleViewProduct = (productId) => {
    console.log('Viewing product:', productId);
  };
  
  const handleQuickView = (productId) => {
    console.log('Quick viewing product:', productId);
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-background-white">
      <Navbar showBackButton={true} />
      
      <main className="flex-grow py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Component Showcase</h1>
          
          {/* Alerts Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Alerts & Notifications</h2>
            <div className="space-y-4">
              <NotificationAlert
                type="success"
                title="Success!"
                description="Product added to cart successfully."
                onClose={() => setShowAlert(false)}
              />
              <NotificationAlert
                type="error"
                title="Error!"
                description="There was an error adding the product to your cart."
              />
              <NotificationAlert
                type="warning"
                title="Warning!"
                description="Only 3 items left in stock."
              />
              <NotificationAlert
                type="info"
                title="Information"
                description="This product qualifies for free shipping."
              />
            </div>
          </section>
          
          {/* Tooltips Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Tooltips</h2>
            <div className="flex items-center space-x-4">
              <HelpTooltip content="This is helpful information about the product.">
                <Button variant="secondary">Hover for info</Button>
              </HelpTooltip>
              <HelpTooltip content="This product qualifies for free shipping on orders over $50." side="right">
                <span className="inline-flex items-center text-sm text-gray-500">
                  Free Shipping
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
              </HelpTooltip>
            </div>
          </section>
          
          {/* Product Cards Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Product Cards</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <ProductCard 
                product={mockProduct}
                onViewProduct={handleViewProduct}
                onQuickView={handleQuickView}
              />
              <ProductCard 
                product={mockProduct}
                onViewProduct={handleViewProduct}
                onQuickView={handleQuickView}
                compact={true}
              />
            </div>
          </section>
          
          {/* Carousel Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Product Image Carousel</h2>
            <div className="max-w-2xl mx-auto">
              <ProductImageCarousel 
                images={mockProduct.images} 
                productName={mockProduct.name} 
              />
            </div>
          </section>
          
          {/* Accordion Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Product Description Accordion</h2>
            <div className="max-w-3xl mx-auto">
              <ProductDescriptionAccordion product={mockProduct} reviews={mockReviews} />
            </div>
          </section>
          
          {/* Tabs Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Product Detail Tabs</h2>
            <div className="max-w-3xl mx-auto">
              <ProductDetailTabs product={mockProduct} reviews={mockReviews} />
            </div>
          </section>
          
          {/* Skeletons Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Loading Skeletons</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Product Card Skeleton</h3>
                <div className="w-64">
                  <ProductCardSkeleton />
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Product Detail Skeleton</h3>
                <div className="max-w-4xl">
                  <ProductDetailSkeleton />
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default ComponentShowcasePage;