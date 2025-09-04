import React, { useState } from 'react';
import { Box, Typography, Button, Snackbar, Alert } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext.js';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
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

function ProductDetailPage() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true);
  
  const product = products.find(p => p.id === parseInt(productId));
  
  if (!product) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar showBackButton={true} />
        <Box className="flex-grow p-6 bg-gray-50 min-h-screen">
          <Typography variant="h4" className="mb-6 text-center font-bold text-gray-900">
            Product Not Found
          </Typography>
          <Button 
            variant="outlined" 
            onClick={() => navigate('/products')}
            className="font-semibold py-2 rounded-lg transition-all duration-300 transform hover:scale-105 border-black text-black hover:bg-black hover:text-white"
            sx={{
              borderColor: '#000000',
              color: '#000000',
              padding: '10px 20px',
              fontSize: '1rem',
              fontWeight: 600,
              '&:hover': {
                backgroundColor: '#000000',
                color: '#ffffff',
                borderColor: '#000000',
                transform: 'scale(1.05) translateY(-1px)',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
              }
            }}
          >
            Back to Products
          </Button>
        </Box>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate('/products');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar showBackButton={true} />
      <Box className="flex-grow p-6 min-h-screen">
        {/* Product Detail Modal */}
        {isModalOpen && (
          <ProductDetailModal 
            product={product} 
            onClose={handleCloseModal} 
            onAddToCart={handleAddToCart} 
          />
        )}
      </Box>
      <Footer />
      <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          {product.name} added to cart!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default ProductDetailPage;