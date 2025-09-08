import React from 'react';
import CountdownTimer from './CountdownTimer.js';
import MinimalProductCard from './MinimalProductCard.js';
import SectionLayout from './ui/SectionLayout.js';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel.jsx";
import { Card, CardContent } from "./ui/card.jsx";

function LimitedTimeOffersSection({ offers, onViewProduct }) {
  // Set a default end time for offers (7 days from now)
  const defaultEndTime = new Date();
  defaultEndTime.setDate(defaultEndTime.getDate() + 7);

  return (
    <div className="py-12 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl">
      <SectionLayout
        title="Limited Time Offers"
        subtitle="Special deals ending soon"
      >
        <div className="flex justify-center w-full">
          <Carousel
            opts={{
              align: "start",
            }}
            orientation="vertical"
            className="w-full max-w-6xl"
          >
            <CarouselContent className="-mt-1 h-[650px]">
              {offers.map((offer, index) => (
                <CarouselItem key={index} className="pt-1 md:basis-1/2">
                  <div className="p-1">
                    <Card className="rounded-xl overflow-hidden h-full" variant="glass">
                      <CardContent className="p-6 h-full">
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
                          {/* Urgency indicator */}
                          <div className="mt-2 flex items-center text-red-600 text-sm font-body">
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            Limited time offer - only a few left!
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          {offer.products.slice(0, 2).map((product) => (
                            <div key={product.id} className="border rounded-lg p-2 flex justify-center backdrop-blur-lg bg-white/30 border-white/20">
                              <MinimalProductCard 
                                product={product} 
                                onViewProduct={onViewProduct} 
                                compact={true} 
                              />
                            </div>
                          ))}
                        </div>
                        
                        <button 
                          className="w-full mt-6 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md font-body"
                          onClick={() => console.log('View offer details')}
                        >
                          Shop This Offer
                        </button>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </SectionLayout>
    </div>
  );
}

export default LimitedTimeOffersSection;