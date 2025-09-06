import React from 'react';
import CountdownTimer from './CountdownTimer.js';
import MinimalProductCard from './MinimalProductCard.js';

function LimitedTimeOffersSection({ offers, onViewProduct }) {
  // Set a default end time for offers (7 days from now)
  const defaultEndTime = new Date();
  defaultEndTime.setDate(defaultEndTime.getDate() + 7);

  return (
    <div className="py-12 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 font-heading">Limited Time Offers</h2>
          <p className="text-gray-600 mb-4 font-body">Special deals ending soon</p>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 font-heading">{offer.title}</h3>
                    <p className="text-gray-600 mt-1 font-body">{offer.description}</p>
                  </div>
                  <span className="bg-red-100 text-red-800 text-sm font-bold px-2.5 py-0.5 rounded-full font-body">
                    {offer.discount} OFF
                  </span>
                </div>
                
                <div className="mb-6">
                  <p className="text-sm text-gray-500 mb-2 font-body">Offer ends in:</p>
                  <CountdownTimer endTime={offer.endTime || defaultEndTime} />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {offer.products.slice(0, 2).map((product) => (
                    <div key={product.id} className="border border-gray-200 rounded-lg p-2 flex justify-center bg-white">
                      <MinimalProductCard product={product} onViewProduct={onViewProduct} compact={true} />
                    </div>
                  ))}
                </div>
                
                <button 
                  className="w-full mt-6 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md font-body"
                  onClick={() => console.log('View offer details')}
                >
                  Shop This Offer
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LimitedTimeOffersSection;