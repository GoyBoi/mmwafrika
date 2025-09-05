import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Label } from '@/components/ui/label.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Checkbox } from '@/components/ui/checkbox.jsx';

const GuestCheckout = ({ onGuestCheckout, onAccountCheckout }) => {
  const [isGuest, setIsGuest] = useState(true);
  const [email, setEmail] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isGuest) {
      if (!email || !agreeToTerms) {
        alert('Please provide your email and agree to the terms.');
        return;
      }
      onGuestCheckout({ email });
    } else {
      onAccountCheckout();
    }
  };

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Checkout Options</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-4 mb-6">
          <Button
            variant={isGuest ? "default" : "outline"}
            onClick={() => setIsGuest(true)}
            className={isGuest ? "bg-amber-600 hover:bg-amber-700" : ""}
          >
            Guest Checkout
          </Button>
          <Button
            variant={!isGuest ? "default" : "outline"}
            onClick={() => setIsGuest(false)}
            className={!isGuest ? "bg-amber-600 hover:bg-amber-700" : ""}
          >
            Account Checkout
          </Button>
        </div>

        {isGuest ? (
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <Label htmlFor="email" className="text-gray-700">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="mt-1"
                  required
                />
                <p className="text-sm text-gray-500 mt-1">
                  We'll send your order confirmation to this email.
                </p>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  checked={agreeToTerms}
                  onCheckedChange={setAgreeToTerms}
                />
                <Label htmlFor="terms" className="text-sm text-gray-700">
                  I agree to the Terms of Service and Privacy Policy
                </Label>
              </div>
              
              <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700">
                Continue as Guest
              </Button>
              
              <div className="text-center mt-4">
                <p className="text-sm text-gray-600">
                  Don't have an account?{' '}
                  <button
                    type="button"
                    onClick={() => setIsGuest(false)}
                    className="text-amber-600 hover:text-amber-700 font-medium"
                  >
                    Sign up during checkout
                  </button>
                </p>
              </div>
            </div>
          </form>
        ) : (
          <div className="space-y-4">
            <p className="text-gray-700">
              Please sign in to your account to continue with checkout.
            </p>
            <Button onClick={onAccountCheckout} className="w-full bg-amber-600 hover:bg-amber-700">
              Sign In to Account
            </Button>
            
            <div className="text-center mt-4">
              <p className="text-sm text-gray-600">
                Don't have an account?{' '}
                <button
                  type="button"
                  onClick={() => setIsGuest(true)}
                  className="text-amber-600 hover:text-amber-700 font-medium"
                >
                  Continue as Guest
                </button>
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default GuestCheckout;