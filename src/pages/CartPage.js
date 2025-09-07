import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';
import { useCart } from '../context/CartContext.js';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import RecentlyAddedSection from '../components/cart/RecentlyAddedSection.js';
import CrossSelling from '../components/cart/CrossSelling.js';
import TrustBadges from '../components/cart/TrustBadges.js';
import OrderSummary from '../components/cart/OrderSummary.js';

// Mock data for recently added items
// In a real application, this would come from tracking recently viewed or added items
const mockRecentlyAddedItems = [
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

function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, clearCart, addToCart } = useCart();
  const navigate = useNavigate();
  const [recentlyAddedItems] = useState(mockRecentlyAddedItems);

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

  const handleViewProduct = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-warm-gray">
      <Navbar showBackButton={true} />
      <Box className="flex-grow p-6 md:p-8">
        <Typography variant="h2" className="mb-12 text-center font-normal text-secondary-black tracking-[0.5px]">
          Your Cart
        </Typography>
        
        <TrustBadges />
        
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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <TableContainer 
                  component={Paper} 
                  className="rounded-xl shadow-sm mb-8 overflow-hidden"
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
                                className="relative rounded-lg overflow-hidden mr-6 border border-border-gray cursor-pointer"
                                style={{ 
                                  width: '80px', 
                                  height: '80px',
                                  minWidth: '80px'
                                }}
                                onClick={() => handleViewProduct(item.id)}
                              >
                                                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover p-2 bg-warm-gray transition-transform duration-300 hover:scale-105"
                    />
                              </div>
                              <Typography 
                                className="font-medium cursor-pointer hover:text-secondary-black transition-colors duration-300" 
                                onClick={() => handleViewProduct(item.id)}
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
                
                <Box className="flex flex-wrap gap-2 mb-8">
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
                
                <RecentlyAddedSection 
                  recentlyAddedItems={recentlyAddedItems}
                  onViewProduct={handleViewProduct}
                />
                
                <CrossSelling 
                  
                  onViewProduct={handleViewProduct}
                />
              </div>
              
              <div>
                <OrderSummary 
                  cartItems={cartItems}
                  onRemoveItem={handleRemoveFromCart}
                  onEditCart={handleContinueShopping}
                />
                
                <Button 
                  variant="contained" 
                  onClick={handleProceedToCheckout}
                  className="font-medium rounded-lg transition-all duration-300 bg-primary-black text-background-white hover:bg-secondary-black normal-case tracking-wide shadow-none py-3 px-6 w-full mt-6"
                  sx={{
                    backgroundColor: '#000000',
                    color: '#ffffff',
                    padding: '10px 24px',
                    fontSize: '1rem',
                    fontWeight: 500,
                    '&:hover': {
                      backgroundColor: '#1d1d1f',
                      color: '#ffffff'
                    }
                  }}
                >
                  Proceed to Checkout
                </Button>
              </div>
            </div>
          </>
        )}
      </Box>
      <Footer />
    </div>
  );
}

export default CartPage;