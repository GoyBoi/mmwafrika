import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LoyaltyProgram = () => {
  // Mock loyalty data (in a real app, this would come from user context or API)
  const [loyaltyData, setLoyaltyData] = useState({
    points: 1250,
    tier: 'Silver',
    tierProgress: 75, // Percentage to next tier
    nextTier: 'Gold',
    pointsToNextTier: 250,
    availableRewards: [
      { id: 1, name: '$10 Off Next Purchase', points: 500, description: 'Redeem for $10 off your next order' },
      { id: 2, name: 'Free Shipping', points: 300, description: 'Free shipping on your next order' },
      { id: 3, name: 'Exclusive Access', points: 1000, description: 'Early access to new collections' },
      { id: 4, name: '$25 Gift Card', points: 2000, description: 'Redeem for a $25 gift card' }
    ],
    recentActivity: [
      { id: 1, action: 'Purchase', points: 150, date: '2025-09-05', description: 'Order #12345' },
      { id: 2, action: 'Product Review', points: 50, date: '2025-09-03', description: 'Reviewed African Print Dress' },
      { id: 3, action: 'Social Share', points: 25, date: '2025-09-01', description: 'Shared product on social media' },
      { id: 4, action: 'Newsletter Signup', points: 100, date: '2025-08-28', description: 'Signed up for newsletter' }
    ]
  });
  
  // Tier benefits
  const tierBenefits = {
    Bronze: ['5% off purchases', 'Birthday reward', 'Exclusive emails'],
    Silver: ['10% off purchases', 'Free shipping over $50', 'Early access to sales', 'Birthday reward'],
    Gold: ['15% off purchases', 'Free shipping always', 'Early access to new collections', 'Exclusive gifts', 'Personal shopping assistant', 'Birthday reward']
  };
  
  // Redeem reward function
  const redeemReward = (reward) => {
    if (loyaltyData.points >= reward.points) {
      // In a real app, this would call an API to redeem the reward
      setLoyaltyData(prev => ({
        ...prev,
        points: prev.points - reward.points
      }));
      
      // Show success message (in a real app, you might use a toast notification)
      alert(`Reward redeemed! ${reward.name} will be available in your account.`);
    }
  };
  
  return (
    <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 shadow-md border border-amber-100">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2 font-heading">Loyalty Program</h2>
        <p className="text-gray-600 font-body">Earn points for every purchase and unlock exclusive rewards</p>
      </div>
      
      {/* Current Status */}
      <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-200 mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 font-heading">Your Points</h3>
            <p className="text-3xl font-bold text-amber-600 font-heading">{loyaltyData.points.toLocaleString()}</p>
          </div>
          <div className="mt-3 md:mt-0">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
              loyaltyData.tier === 'Bronze' ? 'bg-amber-100 text-amber-800' :
              loyaltyData.tier === 'Silver' ? 'bg-gray-100 text-gray-800' :
              'bg-yellow-100 text-yellow-800'
            } font-body`}>
              {loyaltyData.tier} Tier
            </span>
          </div>
        </div>
        
        {/* Progress to Next Tier */}
        <div className="mb-4">
          <div className="flex justify-between text-sm text-gray-600 mb-1 font-body">
            <span>Progress to {loyaltyData.nextTier}</span>
            <span>{loyaltyData.tierProgress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div 
              className="bg-gradient-to-r from-amber-500 to-orange-500 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${loyaltyData.tierProgress}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
            ></motion.div>
          </div>
          <p className="text-xs text-gray-500 mt-1 font-body">
            Earn {loyaltyData.pointsToNextTier} more points to reach {loyaltyData.nextTier} tier
          </p>
        </div>
        
        {/* Tier Benefits */}
        <div>
          <h4 className="text-sm font-semibold text-gray-900 mb-2 font-heading">Benefits</h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {tierBenefits[loyaltyData.tier]?.map((benefit, index) => (
              <li key={index} className="flex items-center text-sm text-gray-600 font-body">
                <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Available Rewards */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3 font-heading">Redeem Rewards</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {loyaltyData.availableRewards.map((reward) => (
            <div 
              key={reward.id} 
              className="bg-white rounded-lg p-4 border border-gray-200 flex justify-between items-center"
            >
              <div>
                <h4 className="font-medium text-gray-900 font-heading">{reward.name}</h4>
                <p className="text-sm text-gray-500 font-body">{reward.description}</p>
                <p className="text-sm font-semibold text-amber-600 mt-1 font-body">{reward.points} points</p>
              </div>
              <button
                onClick={() => redeemReward(reward)}
                disabled={loyaltyData.points < reward.points}
                className={`px-3 py-1.5 rounded-md text-sm font-medium ${
                  loyaltyData.points >= reward.points
                    ? 'bg-amber-600 text-white hover:bg-amber-700'
                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                } transition-colors font-body`}
              >
                Redeem
              </button>
            </div>
          ))}
        </div>
      </div>
      
      {/* Recent Activity */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-3 font-heading">Recent Activity</h3>
        <div className="bg-white rounded-lg border border-gray-200">
          {loyaltyData.recentActivity.map((activity, index) => (
            <div 
              key={activity.id} 
              className={`p-4 flex justify-between items-center ${
                index < loyaltyData.recentActivity.length - 1 ? 'border-b border-gray-200' : ''
              }`}
            >
              <div>
                <h4 className="font-medium text-gray-900 font-heading">{activity.action}</h4>
                <p className="text-sm text-gray-500 font-body">{activity.description}</p>
                <p className="text-xs text-gray-400 mt-1 font-body">{activity.date}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-green-600 font-heading">+{activity.points}</p>
                <p className="text-xs text-gray-500 font-body">points</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoyaltyProgram;