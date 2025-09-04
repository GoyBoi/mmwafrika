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
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-warm-gray to-background-white">
      <Navbar />
      <Box 
        className="flex-grow flex flex-col items-center justify-center text-center"
        sx={{ 
          padding: { xs: '1.5rem', sm: '2rem', md: '3rem' },
          minHeight: '60vh',
          maxWidth: '600px',
          margin: '0 auto'
        }}
      >
        {/* Hero Headline: 48px, font-weight: 300 (ultra-light) */}
        <Typography 
          variant="h1" 
          className="font-light text-primary-black mb-6 tracking-[0.5px]"
          sx={{ 
            fontSize: '3rem',
            lineHeight: 1.2,
            color: '#000000',
            fontWeight: 300
          }}
        >
          Welcome to MMWafrika
        </Typography>
        {/* Body Text: 14px, font-weight: 400 (normal) */}
        <Typography 
          variant="body1" 
          className="text-secondary-black mb-8 max-w-lg"
          sx={{ 
            fontSize: '1.125rem',
            lineHeight: '2rem',
            color: '#1d1d1f'
          }}
        >
          Your one-stop shop for authentic African fashion and lifestyle products. 
          Discover the beauty and culture of Africa through our curated collection.
        </Typography>
        {/* Primary Button (CTA) */}
        <Button 
          variant="contained" 
          onClick={handleShopNow}
          className="font-medium rounded-lg transition duration-300 bg-primary-black text-background-white hover:bg-secondary-black normal-case tracking-wide shadow-none py-3 px-6"
          sx={{
            backgroundColor: '#000000',
            color: '#ffffff',
            padding: '12px 24px',
            fontSize: '1rem',
            minWidth: '160px',
            fontWeight: 500,
            marginTop: '16px', // 16px margin-top as per PRD
            '&:hover': {
              backgroundColor: '#1d1d1f',
              color: '#ffffff'
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