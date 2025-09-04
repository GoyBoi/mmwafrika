import React from 'react';
import { Box, Typography, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';
import { useCart } from '../context/CartContext.js';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';

function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, clearCart, totalAmount } = useCart();
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
    <div className="flex flex-col min-h-screen bg-warm-gray">
      <Navbar showBackButton={true} />
      <Box className="flex-grow p-6 md:p-8">
        <Typography variant="h2" className="mb-12 text-center font-normal text-secondary-black tracking-[0.5px]">
          Your Cart
        </Typography>
        {cartItems.length === 0 ? (
          <Box className="text-center py-12 bg-background-white rounded-xl shadow-sm p-6">
            <Typography variant="h6" className="mb-4 text-secondary-black">Your cart is empty</Typography>
            <Button 
              variant="outlined" 
              onClick={handleContinueShopping}
              className="font-medium rounded-lg transition-all duration-300 border-border-gray text-secondary-black hover:bg-secondary-black hover:text-background-white normal-case tracking-wide"
              sx={{
                borderColor: '#d2d2d7',
                color: '#1d1d1f',
                padding: '10px 20px',
                fontSize: '1rem',
                fontWeight: 500,
                '&:hover': {
                  backgroundColor: '#1d1d1f',
                  color: '#ffffff',
                  borderColor: '#1d1d1f'
                }
              }}
            >
              Continue Shopping
            </Button>
          </Box>
        ) : (
          <>
            <TableContainer 
              component={Paper} 
              className="rounded-xl shadow-sm mb-12 overflow-hidden"
              sx={{
                backgroundColor: '#ffffff',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
              }}
            >
              <Table>
                <TableHead>
                  <TableRow 
                    className="bg-warm-gray"
                    sx={{
                      backgroundColor: '#f5f5f7'
                    }}
                  >
                    <TableCell className="font-normal py-6 text-secondary-black">Product</TableCell>
                    <TableCell className="font-normal py-6 text-secondary-black">Price</TableCell>
                    <TableCell className="font-normal py-6 text-secondary-black">Quantity</TableCell>
                    <TableCell className="font-normal py-6 text-secondary-black">Total</TableCell>
                    <TableCell className="font-normal py-6 text-secondary-black">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cartItems.map((item) => (
                    <TableRow 
                      key={item.id} 
                      className="hover:bg-warm-gray transition-colors duration-200"
                      sx={{
                        '&:hover': {
                          backgroundColor: '#fafafa'
                        }
                      }}
                    >
                      <TableCell>
                        <Box className="flex items-center">
                          <div 
                            className="relative rounded-lg overflow-hidden mr-6 border border-border-gray"
                            style={{ 
                              width: '80px', 
                              height: '80px',
                              minWidth: '80px'
                            }}
                          >
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-contain p-2 bg-warm-gray cursor-pointer transition-transform duration-300 hover:scale-105"
                              onClick={() => navigate(`/product/${item.id}`)}
                            />
                          </div>
                          <Typography 
                            className="font-medium cursor-pointer hover:text-secondary-black transition-colors duration-300" 
                            onClick={() => navigate(`/product/${item.id}`)}
                            sx={{
                              fontSize: '1rem',
                              fontWeight: 500,
                              color: '#1d1d1f',
                              '&:hover': {
                                color: '#000000'
                              }
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
                          color: '#1d1d1f',
                          fontWeight: 600
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
                              borderRadius: '8px',
                              '& fieldset': {
                                borderColor: '#d2d2d7'
                              },
                              '&:hover fieldset': {
                                borderColor: '#86868b'
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: '#000000'
                              }
                            }
                          }}
                        />
                      </TableCell>
                      <TableCell 
                        className="font-bold"
                        sx={{
                          fontSize: '1.1rem',
                          color: '#1d1d1f',
                          fontWeight: 700
                        }}
                      >
                        ${(item.price * item.quantity).toFixed(2)}
                      </TableCell>
                      <TableCell>
                        <IconButton 
                          onClick={() => handleRemoveFromCart(item.id)}
                          className="text-secondary-black hover:bg-warm-gray transition-all duration-300 rounded-full"
                          size="large"
                          sx={{
                            color: '#1d1d1f',
                            '&:hover': {
                              backgroundColor: '#e5e5e5'
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
            <Box className="mt-12 md:mt-16 flex flex-col md:flex-row justify-between items-center gap-4">
              <Box className="flex flex-wrap gap-2">
                <Button 
                  variant="outlined" 
                  onClick={handleContinueShopping}
                  className="font-medium rounded-lg transition-all duration-300 border-border-gray text-secondary-black hover:bg-secondary-black hover:text-background-white normal-case tracking-wide"
                  sx={{
                    borderColor: '#d2d2d7',
                    color: '#1d1d1f',
                    padding: '8px 16px',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    '&:hover': {
                      backgroundColor: '#1d1d1f',
                      color: '#ffffff',
                      borderColor: '#1d1d1f'
                    }
                  }}
                >
                  Continue Shopping
                </Button>
                <Button 
                  variant="outlined" 
                  onClick={handleClearCart}
                  className="font-medium rounded-lg transition-all duration-300 border-danger-red text-danger-red hover:bg-danger-red hover:text-background-white normal-case tracking-wide"
                  sx={{
                    borderColor: '#ff3b30',
                    color: '#ff3b30',
                    padding: '8px 16px',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    '&:hover': {
                      backgroundColor: '#ff3b30',
                      color: '#ffffff',
                      borderColor: '#ff3b30'
                    }
                  }}
                >
                  Clear Cart
                </Button>
              </Box>
              <Box className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 bg-background-white p-4 rounded-lg shadow-sm">
                <Typography variant="h6" className="font-medium text-secondary-black text-xl">
                  Total: <span className="text-secondary-black font-semibold">${totalAmount.toFixed(2)}</span>
                </Typography>
                <Button 
                  variant="contained" 
                  onClick={handleProceedToCheckout}
                  className="font-medium rounded-lg transition-all duration-300 bg-primary-black text-background-white hover:bg-secondary-black normal-case tracking-wide shadow-none py-3 px-6"
                  sx={{
                    backgroundColor: '#000000',
                    color: '#ffffff',
                    padding: '10px 24px',
                    fontSize: '1rem',
                    minWidth: '160px',
                    fontWeight: 500,
                    '&:hover': {
                      backgroundColor: '#1d1d1f',
                      color: '#ffffff'
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