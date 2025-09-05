import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Checkbox } from '@/components/ui/checkbox.jsx';
import { Label } from '@/components/ui/label.jsx';
import { Star } from 'lucide-react';

const LoyaltyEnrollment = ({ onEnroll, isEnrolled = false }) => {
  const [agreeToLoyalty, setAgreeToLoyalty] = useState(isEnrolled);

  const handleEnroll = () => {
    if (agreeToLoyalty) {
      onEnroll();
    }
  };

  if (isEnrolled) {
    return (
      <Card className="bg-amber-50 border-amber-200">
        <CardContent className="p-4">
          <div className="flex items-center">
            <Star className="h-5 w-5 text-amber-600 mr-2" />
            <span className="text-amber-800 font-medium">You're enrolled in MMWafrika Rewards!</span>
          </div>
          <p className="text-amber-700 text-sm mt-1">
            Earn 1 point for every $1 spent. Points can be redeemed for discounts.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-semibold flex items-center">
          <Star className="h-5 w-5 text-amber-600 mr-2" />
          MMWafrika Rewards
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="bg-amber-50 p-4 rounded-lg">
            <h4 className="font-medium text-amber-900">Join our loyalty program</h4>
            <ul className="mt-2 space-y-1 text-sm text-amber-800">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Earn 1 point for every $1 spent</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Redeem 100 points for $5 off</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Exclusive member-only sales</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Birthday surprises</span>
              </li>
            </ul>
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox
              id="loyalty"
              checked={agreeToLoyalty}
              onCheckedChange={setAgreeToLoyalty}
            />
            <Label htmlFor="loyalty" className="text-sm text-gray-700">
              Yes, I want to join MMWafrika Rewards for free
            </Label>
          </div>
          
          <Button
            onClick={handleEnroll}
            disabled={!agreeToLoyalty}
            className="w-full bg-amber-600 hover:bg-amber-700"
          >
            Enroll in Rewards
          </Button>
          
          <p className="text-xs text-gray-500 text-center">
            By enrolling, you agree to our Rewards Program Terms
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default LoyaltyEnrollment;