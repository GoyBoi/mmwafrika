import React, { useState } from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, Snackbar, Alert } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext.js';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';

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
  
  const product = products.find(p => p.id === parseInt(productId));
  
  if (!product) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar showBackButton={true} />
        <Box className="flex-grow p-6 bg-gray-50 min-h-screen">
          <Typography variant="h4" className="mb-6 text-center font-bold text-gray-800">
            Product Not Found
          </Typography>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={() => navigate('/products')}
            className="bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-700 hover:to-indigo-800 font-semibold py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
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

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar showBackButton={true} />
      <Box className="flex-grow p-6 bg-gray-50 min-h-screen">
        <Card className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
          <div style={{ position: 'relative', width: '100%', paddingBottom: '100%' }}>
            <CardMedia
              component="img"
              image={product.image}
              alt={product.name}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                padding: '1rem',
              }}
            />
          </div>
          <CardContent className="p-6">
            <Typography variant="h4" className="font-bold text-gray-800 mb-2">
              {product.name}
            </Typography>
            <Typography variant="h5" className="text-indigo-600 font-semibold mb-4">
              ${product.price.toFixed(2)}
            </Typography>
            <Typography variant="body1" className="text-gray-600 mb-6 leading-relaxed">
              {product.description}
            </Typography>
            <Button 
              variant="contained" 
              color="primary" 
              onClick={handleAddToCart}
              className="bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-700 hover:to-indigo-800 font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Add to Cart
            </Button>
          </CardContent>
        </Card>
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