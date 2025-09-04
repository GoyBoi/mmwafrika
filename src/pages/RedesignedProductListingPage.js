import React, { useState } from 'react';
import { Box, Typography, Grid, Snackbar, Alert } from '@mui/material';
import { useCart } from '../context/CartContext.js';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import MinimalProductCard from '../components/MinimalProductCard.js';
import ProductCarousel from '../components/ProductCarousel.js';
import ProductDetailModal from '../components/RedesignedProductDetailModal.js';

// Mock product data
const products = [
  {
    id: 1,
    name: 'African Print Dress',
    price: 29.99,
    image: '/products_and_logo/1000006827.jpg',
    description: 'Beautiful traditional African print dress made from high-quality fabric. Perfect for any occasion.'
  },
  {
    id: 2,
    name: 'Handwoven Basket',
    price: 39.99,
    image: '/products_and_logo/1000006833.jpg',
    description: 'Handcrafted basket made by skilled artisans using traditional techniques. Great for storage or decoration.'
  },
  {
    id: 3,
    name: 'Wooden Sculpture',
    price: 19.99,
    image: '/products_and_logo/1000006880.jpg',
    description: 'Intricately carved wooden sculpture representing African culture and heritage.'
  },
  {
    id: 4,
    name: 'Kente Cloth',
    price: 49.99,
    image: '/products_and_logo/1000006881.jpg',
    description: 'Authentic Kente cloth made in Ghana. Each pattern has a special meaning and significance.'
  },
  {
    id: 5,
    name: 'Beaded Jewelry Set',
    price: 59.99,
    image: '/products_and_logo/1000006886.jpg',
    description: 'Beautiful set of beaded jewelry including necklace, earrings, and bracelet. Handmade with vibrant colors.'
  },
  {
    id: 6,
    name: 'Traditional Mask',
    price: 69.99,
    image: '/products_and_logo/1000016728.jpg',
    description: 'Traditional African mask used in ceremonies and cultural events. Made from authentic materials.'
  }
];

function ProductListingPage() {
  const { addToCart } = useCart();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = (product) => {
    addToCart(product);
    setSnackbarMessage(`${product.name} added to cart!`);
    setOpenSnackbar(true);
    
    // Close modal after adding to cart
    setIsModalOpen(false);
  };

  const handleViewProduct = (productId) => {
    const product = products.find(p => p.id === productId);
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  // Featured products (first 3)
  const featuredProducts = products.slice(0, 3);
  // Remaining products
  const remainingProducts = products.slice(3);

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
        
        {/* All products section - using grid system from PRD */}
        <div className="container mx-auto px-component-space-2 py-section-space-2">
          <Typography variant="h3" className="mb-section-space-1 font-normal text-secondary-black tracking-[0.5px]">
            All Products
          </Typography>
          <Grid container spacing={3}>
            {remainingProducts.map((product) => (
              <Grid key={product.id} className="flex justify-center">
                <Grid size={{ xs: 6, sm: 4, md: 3 }}>
                  <MinimalProductCard 
                    product={product} 
                    onViewProduct={handleViewProduct} 
                  />
                </Grid>
              </Grid>
            ))}
          </Grid>
        </div>
      </Box>
      
      <Footer />
      
      {/* Product Detail Modal */}
      {isModalOpen && (
        <ProductDetailModal 
          product={selectedProduct} 
          onClose={handleCloseModal} 
          onAddToCart={handleAddToCart} 
        />
      )}
      
      <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default ProductListingPage;