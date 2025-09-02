import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Stepper, Step, StepLabel, StepContent } from '@mui/material';
import { useCart } from '../context/CartContext.js';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';

function CheckoutPage() {
  const { cartItems, totalItems, totalAmount, clearCart } = useCart();
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  
  // Form state for shipping information
  const [shippingInfo, setShippingInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    country: '',
  });
  
  // Form state for payment information
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: '',
  });

  const steps = ['Shipping Address', 'Payment Details', 'Review Order'];

  const handleInputChange = (e, section) => {
    const { name, value } = e.target;
    if (section === 'shipping') {
      setShippingInfo(prev => ({
        ...prev,
        [name]: value
      }));
    } else if (section === 'payment') {
      setPaymentInfo(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleNext = () => {
    setActiveStep(prev => prev + 1);
  };

  const handleBack = () => {
    setActiveStep(prev => prev - 1);
  };

  const handlePlaceOrder = () => {
    // In a real application, you would process the order here
    alert('Order placed successfully!');
    clearCart();
    navigate('/');
  };

  const handleContinueShopping = () => {
    navigate('/products');
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="firstName"
                name="firstName"
                label="First name"
                fullWidth
                value={shippingInfo.firstName}
                onChange={(e) => handleInputChange(e, 'shipping')}
                variant="outlined"
                className="rounded-lg"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '8px'
                  }
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="lastName"
                name="lastName"
                label="Last name"
                fullWidth
                value={shippingInfo.lastName}
                onChange={(e) => handleInputChange(e, 'shipping')}
                variant="outlined"
                className="rounded-lg"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '8px'
                  }
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="email"
                name="email"
                label="Email"
                fullWidth
                value={shippingInfo.email}
                onChange={(e) => handleInputChange(e, 'shipping')}
                variant="outlined"
                className="rounded-lg"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '8px'
                  }
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="address"
                name="address"
                label="Address"
                fullWidth
                value={shippingInfo.address}
                onChange={(e) => handleInputChange(e, 'shipping')}
                variant="outlined"
                className="rounded-lg"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '8px'
                  }
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="city"
                name="city"
                label="City"
                fullWidth
                value={shippingInfo.city}
                onChange={(e) => handleInputChange(e, 'shipping')}
                variant="outlined"
                className="rounded-lg"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '8px'
                  }
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="zipCode"
                name="zipCode"
                label="Zip Code"
                fullWidth
                value={shippingInfo.zipCode}
                onChange={(e) => handleInputChange(e, 'shipping')}
                variant="outlined"
                className="rounded-lg"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '8px'
                  }
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="country"
                name="country"
                label="Country"
                fullWidth
                value={shippingInfo.country}
                onChange={(e) => handleInputChange(e, 'shipping')}
                variant="outlined"
                className="rounded-lg"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '8px'
                  }
                }}
              />
            </Grid>
          </Grid>
        );
      case 1:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id="cardName"
                name="cardName"
                label="Name on card"
                fullWidth
                value={paymentInfo.cardName}
                onChange={(e) => handleInputChange(e, 'payment')}
                variant="outlined"
                className="rounded-lg"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '8px'
                  }
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id="cardNumber"
                name="cardNumber"
                label="Card number"
                fullWidth
                value={paymentInfo.cardNumber}
                onChange={(e) => handleInputChange(e, 'payment')}
                variant="outlined"
                className="rounded-lg"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '8px'
                  }
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id="expiryDate"
                name="expiryDate"
                label="Expiry date"
                placeholder="MM/YY"
                fullWidth
                value={paymentInfo.expiryDate}
                onChange={(e) => handleInputChange(e, 'payment')}
                variant="outlined"
                className="rounded-lg"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '8px'
                  }
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id="cvv"
                name="cvv"
                label="CVV"
                fullWidth
                value={paymentInfo.cvv}
                onChange={(e) => handleInputChange(e, 'payment')}
                variant="outlined"
                className="rounded-lg"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '8px'
                  }
                }}
              />
            </Grid>
          </Grid>
        );
      case 2:
        return (
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Typography variant="h6" className="mb-4 font-bold">Shipping Information</Typography>
              <Typography className="mb-1"><strong>Name:</strong> {shippingInfo.firstName} {shippingInfo.lastName}</Typography>
              <Typography className="mb-1"><strong>Address:</strong> {shippingInfo.address}</Typography>
              <Typography className="mb-1"><strong>City:</strong> {shippingInfo.city}, {shippingInfo.zipCode}</Typography>
              <Typography className="mb-1"><strong>Country:</strong> {shippingInfo.country}</Typography>
              <Typography className="mb-4"><strong>Email:</strong> {shippingInfo.email}</Typography>
              
              <Typography variant="h6" className="mb-4 font-bold">Payment Method</Typography>
              <Typography>Card ending in {paymentInfo.cardNumber.slice(-4)}</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" className="mb-4 font-bold">Order Summary</Typography>
              <TableContainer component={Paper} className="rounded-lg">
                <Table>
                  <TableBody>
                    {cartItems.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>
                          <Box className="flex items-center">
                            <div className="relative mr-2 rounded overflow-hidden" style={{ width: '50px', height: '50px' }}>
                              <CardMedia
                                component="img"
                                image={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <Typography sx={{ fontSize: '0.9rem' }}>{item.name}</Typography>
                              <Typography sx={{ fontSize: '0.8rem', color: 'text.secondary' }}>
                                Qty: {item.quantity}
                              </Typography>
                            </div>
                          </Box>
                        </TableCell>
                        <TableCell align="right">
                          <Typography sx={{ fontSize: '0.9rem' }}>${(item.price * item.quantity).toFixed(2)}</Typography>
                        </TableCell>
                      </TableRow>
                    ))}
                    <TableRow>
                      <TableCell colSpan={2}>
                        <Box className="flex justify-between">
                          <Typography className="font-bold">Subtotal</Typography>
                          <Typography className="font-bold">${getTotalPrice().toFixed(2)}</Typography>
                        </Box>
                        <Box className="flex justify-between mt-1">
                          <Typography>Shipping</Typography>
                          <Typography>$5.99</Typography>
                        </Box>
                        <Box className="flex justify-between mt-1">
                          <Typography>Tax</Typography>
                          <Typography>${(getTotalPrice() * 0.08).toFixed(2)}</Typography>
                        </Box>
                        <Box className="flex justify-between mt-2 pt-2" sx={{ borderTop: '1px solid #e0e0e0' }}>
                          <Typography className="font-bold">Total</Typography>
                          <Typography className="font-bold">${(getTotalPrice() + 5.99 + (getTotalPrice() * 0.08)).toFixed(2)}</Typography>
                        </Box>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        );
      default:
        return 'Unknown step';
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar showBackButton={true} />
      <Box className="flex-grow p-4 md:p-6 bg-gray-50">
        <Typography variant="h4" className="mb-6 text-center font-bold text-gray-800">
          Checkout
        </Typography>
        
        <Stepper activeStep={activeStep} alternativeLabel className="mb-8 hidden md:flex">
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>
                <span className="font-medium">{label}</span>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
        
        {/* Mobile version of stepper */}
        <Box className="md:hidden mb-6">
          {steps.map((label, index) => (
            <Box 
              key={label} 
              className={`p-4 mb-2 rounded-lg ${index === activeStep ? 'bg-purple-100 border-l-4 border-purple-500' : 'bg-white'}`}
            >
              <Typography 
                className={`font-medium ${index === activeStep ? 'text-purple-700' : 'text-gray-600'}`}
              >
                {label}
              </Typography>
            </Box>
          ))}
        </Box>
        
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
            <Paper 
              className="p-4 md:p-6 rounded-xl shadow-lg mb-6"
              sx={{ backgroundColor: '#fff' }}
            >
              {getStepContent(activeStep)}
            </Paper>
            
            <Box className="mt-6 flex flex-col sm:flex-row justify-between gap-3">
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className="font-semibold rounded-lg transition-all duration-300"
                sx={{
                  borderColor: '#7e22ce',
                  color: '#7e22ce',
                  padding: '10px 20px',
                  fontSize: '1rem',
                  '&:hover': {
                    backgroundColor: 'rgba(126, 34, 206, 0.05)',
                    borderColor: '#6b21a8'
                  },
                  '&:disabled': {
                    color: 'rgba(0, 0, 0, 0.26)',
                    borderColor: 'rgba(0, 0, 0, 0.12)'
                  }
                }}
                variant="outlined"
              >
                Back
              </Button>
              
              {activeStep === steps.length - 1 ? (
                <Button
                  variant="contained"
                  onClick={handlePlaceOrder}
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
                  Place Order
                </Button>
              ) : (
                <Button
                  variant="contained"
                  onClick={handleNext}
                  className="font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                  sx={{
                    background: 'linear-gradient(45deg, #7e22ce, #4f46e5)',
                    padding: '10px 24px',
                    fontSize: '1rem',
                    minWidth: '120px',
                    boxShadow: '0 4px 6px rgba(126, 34, 206, 0.2)',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #6b21a8, #4338ca)',
                      boxShadow: '0 6px 8px rgba(126, 34, 206, 0.3)',
                      transform: 'scale(1.05) translateY(-2px)'
                    }
                  }}
                >
                  Next
                </Button>
              )}
            </Box>
          </>
        )}
      </Box>
      <Footer />
    </div>
  );
}

export default CheckoutPage;