import React, { useState } from 'react';
import { Button } from '@/components/ui/button.jsx';

const ProductImageViewer = ({ 
  images = [], 
  productName = '',
  viewType = 'single', // 'single', 'dual', 'carousel'
  showModelView = false 
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [showZoom, setShowZoom] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  // If no images provided, use a placeholder
  const validImages = images && images.length > 0 ? images : ['/products_and_logo/placeholder.jpg'];

  // Get current image
  const currentImage = validImages[selectedImageIndex];

  // Handle image click for zoom
  const handleImageClick = (e) => {
    if (viewType === 'single') {
      setShowZoom(true);
      updateZoomPosition(e);
    }
  };

  // Update zoom position based on mouse/touch
  const updateZoomPosition = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPosition({ x, y });
  };

  // Handle mouse move for zoom panning
  const handleMouseMove = (e) => {
    if (isDragging) {
      updateZoomPosition(e);
    }
  };

  // Handle touch move for zoom panning
  const handleTouchMove = (e) => {
    if (isDragging && e.touches.length > 0) {
      updateZoomPosition(e.touches[0]);
    }
  };

  // Navigate to next image
  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % validImages.length);
  };

  // Navigate to previous image
  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + validImages.length) % validImages.length);
  };

  // Render single view (front view only)
  const renderSingleView = () => (
    <div className="relative w-full h-96 sm:h-[32rem] lg:h-[36rem] bg-white rounded-lg overflow-hidden cursor-zoom-in border border-gray-200">
      <img
        src={currentImage}
        alt={`${productName} - Front View`}
        className="w-full h-full object-cover transition-transform duration-300"
        onClick={handleImageClick}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      />
      
      {/* Navigation arrows for single view */}
      {validImages.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-2 shadow-md z-10"
            aria-label="Previous image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-2 shadow-md z-10"
            aria-label="Next image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Button>
        </>
      )}
    </div>
  );

  // Render dual view (front and back)
  const renderDualView = () => {
    const frontImage = validImages[0] || '/products_and_logo/placeholder.jpg';
    const backImage = validImages[1] || validImages[0] || '/products_and_logo/placeholder.jpg';
    
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Front View */}
        <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden cursor-zoom-in border border-gray-200">
          <img
            src={frontImage}
            alt={`${productName} - Front View`}
            className="w-full h-full object-cover"
            onClick={() => {
              setShowZoom(true);
              setSelectedImageIndex(0);
            }}
          />
          <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
            Front
          </div>
        </div>
        
        {/* Back View */}
        <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden cursor-zoom-in border border-gray-200">
          <img
            src={backImage}
            alt={`${productName} - Back View`}
            className="w-full h-full object-cover"
            onClick={() => {
              setShowZoom(true);
              setSelectedImageIndex(1);
            }}
          />
          <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
            Back
          </div>
        </div>
      </div>
    );
  };

  // Render carousel view
  const renderCarouselView = () => (
    <div className="relative">
      <div className="relative w-full h-96 sm:h-[32rem] lg:h-[36rem] bg-white rounded-lg overflow-hidden border border-gray-200">
        <img
          src={currentImage}
          alt={`${productName} - View ${selectedImageIndex + 1}`}
          className="w-full h-full object-cover cursor-zoom-in"
          onClick={handleImageClick}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
        />
      </div>
      
      {/* Thumbnail navigation */}
      {validImages.length > 1 && (
        <div className="mt-4">
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {validImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImageIndex(index)}
                className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 ${selectedImageIndex === index ? 'border-amber-500' : 'border-gray-200'}`}
                aria-label={`View ${index + 1}`}
              >
                <img 
                  src={image} 
                  alt={`Thumbnail ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
      
      {/* Navigation arrows for carousel */}
      {validImages.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-2 shadow-md z-10"
            aria-label="Previous image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-2 shadow-md z-10"
            aria-label="Next image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Button>
        </>
      )}
    </div>
  );

  // Render model view alongside flat product
  const renderModelView = () => {
    const flatImage = validImages[0] || '/products_and_logo/placeholder.jpg';
    const modelImage = validImages[2] || validImages[0] || '/products_and_logo/placeholder.jpg';
    
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Flat Product View */}
        <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden cursor-zoom-in border border-gray-200">
          <img
            src={flatImage}
            alt={`${productName} - Flat View`}
            className="w-full h-full object-contain"
            onClick={() => {
              setShowZoom(true);
              setSelectedImageIndex(0);
            }}
          />
          <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
            Flat View
          </div>
        </div>
        
        {/* Model View */}
        <div className="relative w-full h-80 bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg overflow-hidden border border-amber-200">
          <img
            src={modelImage}
            alt={`${productName} - Model View`}
            className="w-full h-full object-contain mix-blend-multiply"
            onClick={() => {
              setShowZoom(true);
              setSelectedImageIndex(2);
            }}
          />
          <div className="absolute bottom-2 left-2 bg-amber-600 text-white text-xs px-2 py-1 rounded">
            Model View
          </div>
        </div>
      </div>
    );
  };

  // Render zoom modal
  const renderZoomModal = () => {
    if (!showZoom) return null;
    
    return (
      <div 
        className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
        onClick={() => setShowZoom(false)}
      >
        <div className="relative max-w-6xl max-h-full">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setShowZoom(false)}
            className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 z-10 hover:bg-opacity-75"
            aria-label="Close zoom"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </Button>
          
          <div 
            className="relative w-full h-[80vh]"
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
          >
            <img
              src={currentImage}
              alt={`${productName} - Zoom View`}
              className="max-w-full max-h-full object-cover cursor-move"
              style={{
                transform: 'scale(2)',
                transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                transition: isDragging ? 'none' : 'transform 0.1s ease'
              }}
            />
          </div>
          
          {/* Image counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white text-sm px-3 py-1 rounded-full">
            {selectedImageIndex + 1} / {validImages.length}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full">
      {/* Render based on view type */}
      {showModelView ? (
        renderModelView()
      ) : viewType === 'dual' ? (
        renderDualView()
      ) : viewType === 'carousel' ? (
        renderCarouselView()
      ) : (
        renderSingleView()
      )}
      
      {/* Zoom modal */}
      {renderZoomModal()}
    </div>
  );
};

export default ProductImageViewer;