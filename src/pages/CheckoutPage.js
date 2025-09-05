import React, { useState } from 'react';
import { Box, Typography, Button, Paper, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Stepper, Step, StepLabel } from '@mui/material';
import { useCart } from '../context/CartContext.js';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import CheckoutProgress from '../components/cart/CheckoutProgress.js';
import TrustBadges from '../components/cart/TrustBadges.js';
import GuestCheckout from '../components/cart/GuestCheckout.js';
import OrderSummary from '../components/cart/OrderSummary.js';
import LoyaltyEnrollment from '../components/cart/LoyaltyEnrollment.js';

function CheckoutPage() {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [isGuestCheckout, setIsGuestCheckout] = useState(true);
  const [isLoyaltyEnrolled, setIsLoyaltyEnrolled] = useState(false);
  
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

  const handleGuestCheckout = (guestInfo) => {
    // Set the email from guest info
    setShippingInfo(prev => ({
      ...prev,
      email: guestInfo.email
    }));
    setIsGuestCheckout(true);
    handleNext();
  };

  const handleAccountCheckout = () => {
    // In a real application, this would redirect to login/signup
    alert('Redirecting to account login/signup...');
    setIsGuestCheckout(false);
  };

  const handleEnrollInLoyalty = () => {
    setIsLoyaltyEnrolled(true);
    alert('Thank you for enrolling in MMWafrika Rewards!');
  };

  const handleApplyPromo = (code, discount) => {
    // In a real application, this would update the order total
    console.log(`Applied promo code ${code} for ${discount.toFixed(2)} discount`);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Box className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
              value={shippingInfo.email}
              onChange={(e) => handleInputChange(e, 'shipping')}
              variant="outlined"
              className="rounded-lg md:col-span-2"
              sx={{
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
            <TextField
              required
              id="address"
              name="address"
              label="Address"
              fullWidth
              value={shippingInfo.address}
              onChange={(e) => handleInputChange(e, 'shipping')}
              variant="outlined"
              className="rounded-lg md:col-span-2"
              sx={{
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
            <TextField
              required
              id="country"
              name="country"
              label="Country"
              fullWidth
              value={shippingInfo.country}
              onChange={(e) => handleInputChange(e, 'shipping')}
              variant="outlined"
              className="rounded-lg md:col-span-2"
              sx={{
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
          </Box>
        );
      case 1:
        return (
          <Box className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TextField
              required
              id="cardName"
              name="cardName"
              label="Name on card"
              fullWidth
              value={paymentInfo.cardName}
              onChange={(e) => handleInputChange(e, 'payment')}
              variant="outlined"
              className="rounded-lg md:col-span-2"
              sx={{
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
            <TextField
              required
              id="cardNumber"
              name="cardNumber"
              label="Card number"
              fullWidth
              value={paymentInfo.cardNumber}
              onChange={(e) => handleInputChange(e, 'payment')}
              variant="outlined"
              className="rounded-lg md:col-span-2"
              sx={{
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
          </Box>
        );
      case 2:
        return (
          <Box className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Box className="md:col-span-2">
              <Typography variant="h6" className="mb-6 font-normal text-secondary-black tracking-[0.25px]">Shipping Information</Typography>
              <Typography className="mb-3 text-secondary-black"><strong>Name:</strong> {shippingInfo.firstName} {shippingInfo.lastName}</Typography>
              <Typography className="mb-3 text-secondary-black"><strong>Address:</strong> {shippingInfo.address}</Typography>
              <Typography className="mb-3 text-secondary-black"><strong>City:</strong> {shippingInfo.city}, {shippingInfo.zipCode}</Typography>
              <Typography className="mb-4 text-secondary-black"><strong>Country:</strong> {shippingInfo.country}</Typography>
              <Typography className="mb-6 text-secondary-black"><strong>Email:</strong> {shippingInfo.email}</Typography>
              
              <Typography variant="h6" className="mb-6 font-normal text-secondary-black tracking-[0.25px]">Payment Method</Typography>
              <Typography className="text-secondary-black">Card ending in {paymentInfo.cardNumber.slice(-4)}</Typography>
              
              <LoyaltyEnrollment 
                onEnroll={handleEnrollInLoyalty}
                isEnrolled={isLoyaltyEnrolled}
              />
            </Box>
            <Box>
              <OrderSummary 
                cartItems={cartItems}
                onApplyPromo={handleApplyPromo}
                showPromoCode={true}
                showEditCart={false}
              />
            </Box>
          </Box>
        );
      default:
        return 'Unknown step';
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-warm-gray">
      <Navbar showBackButton={true} />
      <Box className="flex-grow p-6 md:p-8">
        <Typography variant="h2" className="mb-12 text-center font-normal text-secondary-black tracking-[0.5px]">
          Checkout
        </Typography>
        
        <TrustBadges />
        
        <CheckoutProgress currentStep={activeStep} onStepChange={setActiveStep} />
        
        {/* Guest checkout option for first step */}
        {activeStep === 0 && (
          <GuestCheckout 
            onGuestCheckout={handleGuestCheckout}
            onAccountCheckout={handleAccountCheckout}
          />
        )}
        
        {cartItems.length === 0 ? (
          <Box className="text-center py-16 bg-background-white rounded-xl shadow-sm p-6">
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
            <Paper 
              className="p-6 md:p-8 rounded-xl shadow-sm mb-12"
              sx={{ 
                backgroundColor: '#fff',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
              }}
            >
              {getStepContent(activeStep)}
            </Paper>
            
            <Box className="mt-12 flex flex-col sm:flex-row justify-between gap-4">
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                variant="outlined"
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
                  },
                  '&:disabled': {
                    color: 'rgba(0, 0, 0, 0.26)',
                    borderColor: 'rgba(0, 0, 0, 0.12)'
                  }
                }}
              >
                Back
              </Button>
              
              {activeStep === steps.length - 1 ? (
                <Button
                  variant="contained"
                  onClick={handlePlaceOrder}
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
                  Place Order
                </Button>
              ) : (
                <Button
                  variant="contained"
                  onClick={handleNext}
                  className="font-medium rounded-lg transition-all duration-300 bg-primary-black text-background-white hover:bg-secondary-black normal-case tracking-wide shadow-none py-3 px-6"
                  sx={{
                    backgroundColor: '#000000',
                    color: '#ffffff',
                    padding: '10px 24px',
                    fontSize: '1rem',
                    minWidth: '120px',
                    fontWeight: 500,
                    '&:hover': {
                      backgroundColor: '#1d1d1f',
                      color: '#ffffff'
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