import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Badge } from '@mui/material';
import { ShoppingCart, Person, ArrowBack } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext.js';

function Navbar({ showBackButton = false }) {
  const navigate = useNavigate();
  const { totalItems } = useCart();

  const handleViewCart = () => {
    navigate('/cart');
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <AppBar position="static" className="bg-gradient-to-r from-purple-800 to-indigo-900 shadow-lg">
      <Toolbar>
        {showBackButton && (
          <IconButton 
            color="inherit" 
            onClick={handleGoBack}
            className="mr-2"
          >
            <ArrowBack />
          </IconButton>
        )}
        <Typography 
          variant="h6" 
          className="flex-grow font-bold cursor-pointer" 
          onClick={handleGoHome}
        >
          MMWafrika
        </Typography>
        <IconButton color="inherit">
          <Person />
        </IconButton>
        <IconButton color="inherit" onClick={handleViewCart}>
          <Badge badgeContent={totalItems} color="error">
            <ShoppingCart />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;