import React from 'react';
import LoyaltyProgram from './LoyaltyProgram.js';
import SectionLayout from './ui/SectionLayout.js';

function RewardsSection() {
  return (
    <div className="py-12 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionLayout
          title="Loyalty Rewards"
          subtitle="Join our loyalty program and start earning points today"
        >
          <div className="flex justify-center">
            <div className="w-full max-w-4xl">
              <LoyaltyProgram />
            </div>
          </div>
        </SectionLayout>
      </div>
    </div>
  );
}

export default RewardsSection;