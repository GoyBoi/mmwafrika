import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent, CardActions, Button, Snackbar, Alert } from '@mui/material';
import { useCart } from '../context/CartContext.js';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';

// Mock product data
const products = [
  {
    id: 1,
    name: 'African Print Dress',
    price: 29.99,
    image: '/products_and_logo/1000006827.jpg'
  },
  {
    id: 2,
    name: 'Handwoven Basket',
    price: 39.99,
    image: '/products_and_logo/1000006833.jpg'
  },
  {
    id: 3,
    name: 'Wooden Sculpture',
    price: 19.99,
    image: '/products_and_logo/1000006880.jpg'
  },
  {
    id: 4,
    name: 'Kente Cloth',
    price: 49.99,
    image: '/products_and_logo/1000006881.jpg'
  },
  {
    id: 5,
    name: 'Beaded Jewelry Set',
    price: 59.99,
    image: '/products_and_logo/1000006886.jpg'
  },
  {
    id: 6,
    name: 'Traditional Mask',
    price: 69.99,
    image: '/products_and_logo/1000016728.jpg'
  }
];

function ProductListingPage() {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleAddToCart = (product) => {
    addToCart(product);
    setSnackbarMessage(`${product.name} added to cart!`);
    setOpenSnackbar(true);
  };

  const handleViewProduct = (productId) => {
    navigate(`/product/${productId}`);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar showBackButton={true} />
      <Box className="flex-grow p-6 bg-gray-50">
        <Typography variant="h4" className="mb-6 text-center font-bold text-gray-800">
          Our Products
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card 
                className="transition-all duration-300 hover:scale-105 hover:shadow-2xl rounded-2xl overflow-hidden cursor-pointer h-full flex flex-col"
                onClick={() => handleViewProduct(product.id)}
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '16px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 24px rgba(0,0,0,0.15)'
                  }
                }}
              >
                {/* Image section with consistent aspect ratio */}
                <div className="relative" style={{ paddingTop: '100%' }}>
                  <CardMedia
                    component="img"
                    image={product.image}
                    alt={product.name}
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease',
                      '&:hover': {
                        transform: 'scale(1.05)'
                      }
                    }}
                  />
                </div>
                
                {/* Content section */}
                <div className="flex flex-col flex-grow">
                  <CardContent className="flex-grow p-4">
                    <Typography 
                      gutterBottom 
                      variant="h6" 
                      component="div" 
                      className="font-bold text-gray-800 mb-2"
                      sx={{ 
                        lineHeight: '1.3',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        minHeight: '3.2rem'
                      }}
                    >
                      {product.name}
                    </Typography>
                    <Typography variant="h6" className="text-indigo-600 font-bold">
                      ${product.price.toFixed(2)}
                    </Typography>
                  </CardContent>
                  <CardActions className="p-4 pt-0">
                    <Button 
                      size="medium" 
                      variant="contained" 
                      color="primary" 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart(product);
                      }}
                      className="w-full font-semibold rounded-lg transition-all duration-300"
                      sx={{
                        background: 'linear-gradient(45deg, #7e22ce, #4f46e5)',
                        padding: '10px 16px',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px rgba(126, 34, 206, 0.2)',
                        '&:hover': {
                          background: 'linear-gradient(45deg, #6b21a8, #4338ca)',
                          boxShadow: '0 6px 8px rgba(126, 34, 206, 0.3)',
                          transform: 'translateY(-2px)'
                        }
                      }}
                    >
                      Add to Cart
                    </Button>
                  </CardActions>
                </div>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Footer />
      <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default ProductListingPage;