import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';

function HomePage() {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate('/products');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Box 
        className="flex-grow flex flex-col items-center justify-center text-center bg-gradient-to-b from-purple-900 to-indigo-800"
        sx={{ 
          padding: { xs: '2rem', sm: '3rem', md: '4rem' },
          minHeight: 'calc(100vh - 64px)'
        }}
      >
        <Typography 
          variant="h1" 
          className="font-bold text-white mb-6"
          sx={{ 
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
            lineHeight: 1.2
          }}
        >
          Welcome to MMWafrika
        </Typography>
        <Typography 
          variant="h5" 
          className="max-w-2xl text-indigo-100 mb-10"
          sx={{ 
            fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
            lineHeight: 1.6
          }}
        >
          Your one-stop shop for authentic African fashion and lifestyle products. 
          Discover the beauty and culture of Africa through our curated collection.
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleShopNow}
          className="text-white font-bold rounded-full shadow-lg transform transition duration-300 hover:scale-105"
          sx={{
            background: 'linear-gradient(45deg, #f59e0b, #ea580c)',
            padding: '12px 32px',
            fontSize: '1.1rem',
            minWidth: '180px',
            boxShadow: '0 6px 12px rgba(245, 158, 11, 0.3)',
            '&:hover': {
              background: 'linear-gradient(45deg, #d97706, #c2410c)',
              boxShadow: '0 8px 16px rgba(245, 158, 11, 0.4)',
              transform: 'scale(1.05) translateY(-2px)'
            }
          }}
        >
          Shop Now
        </Button>
      </Box>
      <Footer />
    </div>
  );
}

export default HomePage;