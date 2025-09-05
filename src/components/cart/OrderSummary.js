import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Label } from '@/components/ui/label.jsx';
import { Input } from '../../FormComponents.js';

const OrderSummary = ({ 
  cartItems, 
  onApplyPromo, 
  onRemoveItem, 
  onEditCart,
  showPromoCode = true,
  showEditCart = true
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [isPromoApplied, setIsPromoApplied] = useState(false);
  const [promoDiscount, setPromoDiscount] = useState(0);

  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = subtotal > 0 ? 5.99 : 0;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax - promoDiscount;

  const handleApplyPromo = () => {
    // In a real application, this would call an API to validate the promo code
    if (promoCode.toUpperCase() === 'SAVE10') {
      const discount = subtotal * 0.1;
      setPromoDiscount(discount);
      setIsPromoApplied(true);
      if (onApplyPromo) onApplyPromo(promoCode, discount);
    } else {
      alert('Invalid promo code. Try SAVE10 for 10% off.');
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Order Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Cart Items */}
          <div className="space-y-3 max-h-60 overflow-y-auto pr-2">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-start py-2 border-b border-gray-100">
                <div className="flex items-start">
                  <div className="relative mr-3 rounded-md overflow-hidden border border-gray-200" style={{ width: '50px', height: '50px' }}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain p-1"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">{item.name}</h4>
                    <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-medium text-gray-900">${(item.price * item.quantity).toFixed(2)}</span>
                  {showEditCart && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onRemoveItem(item.id)}
                      className="text-gray-400 hover:text-red-500 p-1 h-6 w-6"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Pricing Breakdown */}
          <div className="space-y-2 pt-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Shipping</span>
              <span className="font-medium">${shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Tax</span>
              <span className="font-medium">${tax.toFixed(2)}</span>
            </div>
            {isPromoApplied && (
              <div className="flex justify-between text-green-600">
                <span>Promo Code ({promoCode})</span>
                <span className="font-medium">-${promoDiscount.toFixed(2)}</span>
              </div>
            )}
            <div className="flex justify-between pt-2 border-t border-gray-200">
              <span className="text-lg font-semibold">Total</span>
              <span className="text-lg font-semibold">${total.toFixed(2)}</span>
            </div>
          </div>

          {/* Promo Code */}
          {showPromoCode && (
            <div className="pt-4">
              <Label htmlFor="promo-code" className="text-gray-700">Promo Code</Label>
              <div className="flex space-x-2 mt-1">
                <Input
                  id="promo-code"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="Enter promo code"
                  disabled={isPromoApplied}
                  className="flex-grow"
                />
                <Button 
                  onClick={handleApplyPromo}
                  disabled={isPromoApplied || !promoCode}
                  className={isPromoApplied ? "bg-green-600 hover:bg-green-700" : "bg-amber-600 hover:bg-amber-700"}
                >
                  {isPromoApplied ? 'Applied' : 'Apply'}
                </Button>
              </div>
              {!isPromoApplied && (
                <p className="text-xs text-gray-500 mt-1">
                  Try SAVE10 for 10% off your order
                </p>
              )}
            </div>
          )}

          {/* Edit Cart Button */}
          {showEditCart && (
            <Button 
              variant="outline" 
              onClick={onEditCart}
              className="w-full mt-4"
            >
              Edit Cart
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderSummary;