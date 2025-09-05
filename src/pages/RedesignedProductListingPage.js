import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, Snackbar, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext.js';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import MinimalProductCard from '../components/MinimalProductCard.js';
import ProductCarousel from '../components/ProductCarousel.js';
import FilterSidebar from '../components/filters/FilterSidebar.js';
import MobileFilterSheet from '../components/filters/MobileFilterSheet.js';
import SortingDropdown from '../components/filters/SortingDropdown.js';
import QuickViewModal from '../components/QuickViewModal.js';
import Button from '../components/Button.js';
import ProductPagination from '../components/ProductPagination.js';

// Mock product data with enhanced properties
const products = [
  {
    id: 1,
    name: 'African Print Dress',
    price: 29.99,
    originalPrice: 39.99,
    image: '/products_and_logo/1000006827.jpg',
    description: 'Beautiful traditional African print dress made from high-quality fabric. Perfect for any occasion.',
    rating: 4.5,
    reviewCount: 128,
    salesCount: 342,
    isNew: true,
    addedDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // Added 2 days ago
    category: 'dresses',
    gender: 'women',
    color: 'multi',
    size: ['S', 'M', 'L', 'XL']
  },
  {
    id: 2,
    name: 'Handwoven Basket',
    price: 39.99,
    image: '/products_and_logo/1000006833.jpg',
    description: 'Handcrafted basket made by skilled artisans using traditional techniques. Great for storage or decoration.',
    rating: 4.8,
    reviewCount: 96,
    salesCount: 156,
    category: 'home',
    gender: 'unisex',
    color: 'brown',
    size: ['one-size']
  },
  {
    id: 3,
    name: 'Wooden Sculpture',
    price: 19.99,
    originalPrice: 24.99,
    image: '/products_and_logo/1000006880.jpg',
    description: 'Intricately carved wooden sculpture representing African culture and heritage.',
    rating: 4.3,
    reviewCount: 75,
    salesCount: 89,
    isNew: true,
    addedDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // Added 1 day ago
    category: 'home',
    gender: 'unisex',
    color: 'brown',
    size: ['one-size']
  },
  {
    id: 4,
    name: 'Kente Cloth',
    price: 49.99,
    image: '/products_and_logo/1000006881.jpg',
    description: 'Authentic Kente cloth made in Ghana. Each pattern has a special meaning and significance.',
    rating: 4.9,
    reviewCount: 210,
    salesCount: 432,
    category: 'accessories',
    gender: 'unisex',
    color: 'multi',
    size: ['one-size']
  },
  {
    id: 5,
    name: 'Beaded Jewelry Set',
    price: 59.99,
    image: '/products_and_logo/1000006886.jpg',
    description: 'Beautiful set of beaded jewelry including necklace, earrings, and bracelet. Handmade with vibrant colors.',
    rating: 4.7,
    reviewCount: 187,
    salesCount: 298,
    category: 'accessories',
    gender: 'women',
    color: 'multi',
    size: ['one-size']
  },
  {
    id: 6,
    name: 'Traditional Mask',
    price: 69.99,
    image: '/products_and_logo/1000016728.jpg',
    description: 'Traditional African mask used in ceremonies and cultural events. Made from authentic materials.',
    rating: 4.6,
    reviewCount: 64,
    salesCount: 78,
    isNew: true,
    addedDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // Added 5 days ago
    category: 'home',
    gender: 'unisex',
    color: 'brown',
    size: ['one-size']
  },
  {
    id: 7,
    name: 'Dashiki Shirt',
    price: 34.99,
    originalPrice: 44.99,
    image: '/products_and_logo/1000006827.jpg',
    description: 'Comfortable and stylish Dashiki shirt with traditional African patterns.',
    rating: 4.4,
    reviewCount: 156,
    salesCount: 267,
    category: 'tops',
    gender: 'men',
    color: 'red',
    size: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 8,
    name: 'Ankara Skirt',
    price: 27.99,
    image: '/products_and_logo/1000006833.jpg',
    description: 'Beautiful Ankara print skirt perfect for any occasion.',
    rating: 4.2,
    reviewCount: 89,
    salesCount: 143,
    category: 'bottoms',
    gender: 'women',
    color: 'multi',
    size: ['S', 'M', 'L']
  }
];

function ProductListingPage() {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState({});
  const [sortBy, setSortBy] = useState('featured');
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);

  const handleAddToCart = (product) => {
    addToCart(product);
    setSnackbarMessage(`${product.name} added to cart!`);
    setOpenSnackbar(true);
    
    // Close modals after adding to cart
    setIsQuickViewOpen(false);
  };

  const handleViewProduct = (productId) => {
    // Navigate to the product detail page using React Router
    navigate(`/product/${productId}`);
  };

  const handleQuickView = (productId) => {
    const product = products.find(p => p.id === productId);
    setSelectedProduct(product);
    setIsQuickViewOpen(true);
  };

  const handleCloseModal = () => {
    setIsQuickViewOpen(false);
    setSelectedProduct(null);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  const handleFiltersChange = (newFilters) => {
    setActiveFilters(newFilters);
    setCurrentPage(1); // Reset to first page when filters change
  };

  const handleSortChange = (sortId) => {
    setSortBy(sortId);
    setCurrentPage(1); // Reset to first page when sorting changes
  };

  // Filter and sort products
  const filteredAndSortedProducts = (() => {
    let result = [...products];
    
    // Apply filters
    if (activeFilters.gender && activeFilters.gender.length > 0) {
      result = result.filter(product => 
        activeFilters.gender.includes(product.gender)
      );
    }
    
    if (activeFilters.category && activeFilters.category.length > 0) {
      result = result.filter(product => 
        activeFilters.category.includes(product.category)
      );
    }
    
    if (activeFilters.priceRange) {
      const [min, max] = activeFilters.priceRange;
      result = result.filter(product => 
        product.price >= min && product.price <= max
      );
    }
    
    if (activeFilters.color && activeFilters.color.length > 0) {
      result = result.filter(product => 
        activeFilters.color.includes(product.color)
      );
    }
    
    if (activeFilters.size && activeFilters.size.length > 0) {
      result = result.filter(product => 
        activeFilters.size.some(size => product.size.includes(size))
      );
    }
    
    // Apply sorting
    switch (sortBy) {
      case 'newest':
        result.sort((a, b) => (b.addedDate || new Date(0)) - (a.addedDate || new Date(0)));
        break;
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'best-sellers':
        result.sort((a, b) => b.salesCount - a.salesCount);
        break;
      case 'discount':
        result.sort((a, b) => {
          const aDiscount = a.originalPrice ? ((a.originalPrice - a.price) / a.originalPrice) * 100 : 0;
          const bDiscount = b.originalPrice ? ((b.originalPrice - b.price) / b.originalPrice) * 100 : 0;
          return bDiscount - aDiscount;
        });
        break;
      default:
        // Featured sorting (default) - could be a more complex algorithm
        result.sort((a, b) => b.salesCount - a.salesCount);
    }
    
    return result;
  })();

  // Pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredAndSortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredAndSortedProducts.length / productsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Featured products (first 3)
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen bg-background-white">
      <Navbar showBackButton={true} />
      
      <Box className="flex-grow">
        {/* Hero section with featured products carousel */}
        <div className="bg-background-white py-section-space-2">
          <div className="container mx-auto px-component-space-2">
            <Typography variant="h2" className="mb-section-space-1 text-center font-normal text-secondary-black tracking-[0.5px]">
              Featured Products
            </Typography>
            <ProductCarousel 
              products={featuredProducts} 
              onAddToCart={handleAddToCart} 
              onViewProduct={handleViewProduct} 
            />
          </div>
        </div>
        
        {/* Products section with filters and sorting */}
        <div className="container mx-auto px-component-space-2 py-section-space-2">
          <div className="flex flex-col md:flex-row">
            {/* Filter Sidebar - Hidden on mobile */}
            <div className="hidden md:block">
              <FilterSidebar 
                onFiltersChange={handleFiltersChange} 
                activeFilters={activeFilters} 
              />
            </div>
            
            {/* Main Content */}
            <div className="flex-1">
              {/* Mobile Filter Button and Sorting */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                <Button
                  variant="secondary"
                  onClick={() => setIsMobileFilterOpen(true)}
                  className="md:hidden w-full sm:w-auto"
                >
                  Filter Products
                </Button>
                
                <div className="flex items-center w-full sm:w-auto">
                  <span className="mr-4 text-sm text-gray-600">
                    {filteredAndSortedProducts.length} products
                  </span>
                  <SortingDropdown 
                    onSortChange={handleSortChange} 
                    currentSort={sortBy} 
                  />
                </div>
              </div>
              
              {/* Products Grid */}
              {currentProducts.length > 0 ? (
                <>
                  <Grid container spacing={3}>
                    {currentProducts.map((product) => (
                      <Grid item xs={6} sm={4} md={3} key={product.id}>
                        <MinimalProductCard 
                          product={product} 
                          onViewProduct={handleViewProduct} 
                          onAddToCart={handleAddToCart} 
                          onQuickView={handleQuickView} 
                        />
                      </Grid>
                    ))}
                  </Grid>
                  
                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="flex justify-center mt-8">
                      <ProductPagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                      />
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-12">
                  <Typography variant="h5" className="mb-4">
                    No products found
                  </Typography>
                  <p className="text-gray-600 mb-6">
                    Try adjusting your filters to see more products
                  </p>
                  <Button
                    variant="accent"
                    onClick={() => handleFiltersChange({})}
                  >
                    Clear All Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </Box>
      
      <Footer />
      
      {/* Quick View Modal */}
      {isQuickViewOpen && (
        <QuickViewModal 
          product={selectedProduct} 
          isOpen={isQuickViewOpen} 
          onClose={handleCloseModal} 
          onAddToCart={handleAddToCart} 
        />
      )}
      
      {/* Mobile Filter Sheet */}
      <MobileFilterSheet 
        isOpen={isMobileFilterOpen} 
        onClose={() => setIsMobileFilterOpen(false)} 
        onFiltersChange={handleFiltersChange} 
        activeFilters={activeFilters} 
      />
      
      <Snackbar 
        open={openSnackbar} 
        autoHideDuration={3000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        sx={{
          '& .MuiSnackbarContent-root': {
            background: 'white',
            color: '#1d1d1f',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            borderRadius: '12px',
            fontWeight: 400,
            fontSize: '0.95rem',
            border: '1px solid #f0f0f0',
            minWidth: '300px'
          }
        }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity="success" 
          sx={{ 
            width: '100%',
            background: 'transparent',
            color: '#1d1d1f',
            fontWeight: 400,
            fontSize: '0.95rem',
            padding: '0px'
          }}
          variant="filled"
          icon={false}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default ProductListingPage;