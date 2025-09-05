import React, { useState } from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from '@/components/ui/carousel.jsx';

const ProductImageCarousel = ({ images, productName }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const handleSlideChange = (newIndex) => {
    setCurrentSlide(newIndex);
  };

  return (
    <Carousel 
      className="w-full"
      opts={{
        loop: true,
      }}
      onSlideChange={handleSlideChange}
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
              <img
                src={image}
                alt={`${productName} - View ${index + 1}`}
                className="h-full w-full object-contain"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
      <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
      
      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full ${
              currentSlide === index ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </Carousel>
  );
};

export default ProductImageCarousel;