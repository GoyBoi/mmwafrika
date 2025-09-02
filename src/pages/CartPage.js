import React from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent, CardActions, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';
import { useCart } from '../context/CartContext.js';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';

function CartPage() {
  const { cartItems, totalItems, totalAmount, removeFromCart, updateQuantity, clearCart } = useCart();
  const navigate = useNavigate();

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const handleUpdateQuantity = (productId, quantity) => {
    if (quantity < 1) return;
    updateQuantity(productId, quantity);
  };

  const handleContinueShopping = () => {
    navigate('/products');
  };

  const handleProceedToCheckout = () => {
    navigate('/checkout');
  };

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar showBackButton={true} />
      <Box className="flex-grow p-4 md:p-6 bg-gray-50">
        <Typography variant="h4" className="mb-6 text-center font-bold text-gray-800">
          Your Cart
        </Typography>
        {cartItems.length === 0 ? (
          <Box className="text-center py-12">
            <Typography variant="h6" className="mb-4">Your cart is empty</Typography>
            <Button 
              variant="contained" 
              color="primary" 
              onClick={handleContinueShopping}
              className="font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              sx={{
                background: 'linear-gradient(45deg, #7e22ce, #4f46e5)',
                padding: '10px 20px',
                fontSize: '1rem',
                boxShadow: '0 4px 6px rgba(126, 34, 206, 0.2)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #6b21a8, #4338ca)',
                  boxShadow: '0 6px 8px rgba(126, 34, 206, 0.3)',
                  transform: 'scale(1.05) translateY(-2px)'
                }
              }}
            >
              Continue Shopping
            </Button>
          </Box>
        ) : (
          <>
            <TableContainer component={Paper} className="rounded-xl shadow-lg mb-6 overflow-hidden">
              <Table>
                <TableHead>
                  <TableRow className="bg-gradient-to-r from-purple-500 to-indigo-600">
                    <TableCell className="text-white font-bold py-4">Product</TableCell>
                    <TableCell className="text-white font-bold py-4">Price</TableCell>
                    <TableCell className="text-white font-bold py-4">Quantity</TableCell>
                    <TableCell className="text-white font-bold py-4">Total</TableCell>
                    <TableCell className="text-white font-bold py-4">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cartItems.map((item) => (
                    <TableRow 
                      key={item.id} 
                      className="hover:bg-purple-50 transition-colors duration-200"
                    >
                      <TableCell>
                        <Box className="flex items-center">
                          <div 
                            className="relative rounded overflow-hidden mr-4"
                            style={{ 
                              width: '80px', 
                              height: '80px',
                              minWidth: '80px'
                            }}
                          >
                            <CardMedia
                              component="img"
                              image={item.image}
                              alt={item.name}
                              sx={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                              }}
                              className="cursor-pointer transition-transform duration-300 hover:scale-110"
                              onClick={() => navigate(`/product/${item.id}`)}
                            />
                          </div>
                          <Typography 
                            className="font-medium cursor-pointer hover:text-indigo-600 transition-colors duration-300" 
                            onClick={() => navigate(`/product/${item.id}`)}
                            sx={{
                              fontSize: '1rem',
                              fontWeight: 500
                            }}
                          >
                            {item.name}
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell 
                        className="font-semibold"
                        sx={{
                          fontSize: '1.1rem',
                          color: '#4f46e5'
                        }}
                      >
                        ${item.price.toFixed(2)}
                      </TableCell>
                      <TableCell>
                        <TextField
                          type="number"
                          value={item.quantity}
                          onChange={(e) => handleUpdateQuantity(item.id, parseInt(e.target.value))}
                          InputProps={{ inputProps: { min: 1 } }}
                          variant="outlined"
                          size="small"
                          className="rounded-lg"
                          sx={{
                            width: '80px',
                            '& .MuiOutlinedInput-root': {
                              borderRadius: '8px'
                            }
                          }}
                        />
                      </TableCell>
                      <TableCell 
                        className="font-bold"
                        sx={{
                          fontSize: '1.1rem'
                        }}
                      >
                        ${(item.price * item.quantity).toFixed(2)}
                      </TableCell>
                      <TableCell>
                        <IconButton 
                          onClick={() => handleRemoveFromCart(item.id)}
                          className="text-red-500 hover:bg-red-100 transition-all duration-300 rounded-full"
                          size="large"
                          sx={{
                            '&:hover': {
                              backgroundColor: 'rgba(239, 68, 68, 0.1)'
                            }
                          }}
                        >
                          <Delete />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Box className="mt-6 md:mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <Box className="flex flex-wrap gap-2">
                <Button 
                  variant="outlined" 
                  onClick={handleContinueShopping}
                  className="font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                  sx={{
                    borderColor: '#7e22ce',
                    color: '#7e22ce',
                    padding: '8px 16px',
                    fontSize: '0.9rem',
                    '&:hover': {
                      backgroundColor: 'rgba(126, 34, 206, 0.05)',
                      borderColor: '#6b21a8',
                      transform: 'scale(1.05) translateY(-1px)'
                    }
                  }}
                >
                  Continue Shopping
                </Button>
                <Button 
                  variant="outlined" 
                  onClick={handleClearCart}
                  className="font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                  sx={{
                    borderColor: '#dc2626',
                    color: '#dc2626',
                    padding: '8px 16px',
                    fontSize: '0.9rem',
                    '&:hover': {
                      backgroundColor: 'rgba(220, 38, 38, 0.05)',
                      borderColor: '#b91c1c',
                      transform: 'scale(1.05) translateY(-1px)'
                    }
                  }}
                >
                  Clear Cart
                </Button>
              </Box>
              <Box className="flex flex-col sm:flex-row items-center gap-4 md:gap-6">
                <Typography variant="h6" className="font-bold text-gray-800 text-xl">
                  Total: <span className="text-indigo-600">${totalAmount.toFixed(2)}</span>
                </Typography>
                <Button 
                  variant="contained" 
                  color="primary"
                  onClick={handleProceedToCheckout}
                  className="font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                  sx={{
                    background: 'linear-gradient(45deg, #10b981, #059669)',
                    padding: '10px 24px',
                    fontSize: '1rem',
                    minWidth: '160px',
                    boxShadow: '0 4px 6px rgba(16, 185, 129, 0.3)',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #059669, #047857)',
                      boxShadow: '0 6px 8px rgba(16, 185, 129, 0.4)',
                      transform: 'scale(1.05) translateY(-2px)'
                    }
                  }}
                >
                  Proceed to Checkout
                </Button>
              </Box>
            </Box>
          </>
        )}
      </Box>
      <Footer />
    </div>
  );
}

export default CartPage;