import React from 'react';
import { Shield, Truck, RotateCcw, CreditCard } from 'lucide-react';

const TrustBadges = () => {
  const badges = [
    {
      icon: <Shield className="h-5 w-5" />,
      title: 'Secure Checkout',
      description: '256-bit SSL encryption'
    },
    {
      icon: <Truck className="h-5 w-5" />,
      title: 'Fast Shipping',
      description: '2-5 business days'
    },
    {
      icon: <RotateCcw className="h-5 w-5" />,
      title: 'Easy Returns',
      description: '30-day return policy'
    },
    {
      icon: <CreditCard className="h-5 w-5" />,
      title: 'Secure Payment',
      description: 'All major cards accepted'
    }
  ];

  return (
    <div className="mt-8 mb-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {badges.map((badge, index) => (
          <div 
            key={index} 
            className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-200"
          >
            <div className="flex-shrink-0 text-amber-600 mr-3">
              {badge.icon}
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">{badge.title}</p>
              <p className="text-xs text-gray-500">{badge.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBadges;