import React from 'react';
import Button from './Button.js';

function CuratorsPicksSection({ onViewProduct }) {
  // Mock data for curator's picks
  const curatorPicks = [
    {
      id: 1,
      title: "Heritage Collection",
      description: "Handcrafted pieces that celebrate African traditions and craftsmanship",
      story: "Each piece in this collection tells a story of cultural heritage passed down through generations of skilled artisans.",
      curator: "Amina Okello",
      image: "/products_and_logo/1000006881.jpg",
      products: [
        {
          id: 4,
          name: 'Kente Cloth',
          price: 49.99,
          image: '/products_and_logo/1000006881.jpg'
        },
        {
          id: 6,
          name: 'Traditional Mask',
          price: 69.99,
          image: '/products_and_logo/1000016728.jpg'
        }
      ]
    },
    {
      id: 2,
      title: "Modern Fusion",
      description: "Contemporary designs inspired by traditional African patterns",
      story: "This collection bridges the gap between traditional African aesthetics and modern fashion sensibilities.",
      curator: "Kofi Asante",
      image: "/products_and_logo/1000006827.jpg",
      products: [
        {
          id: 1,
          name: 'African Print Dress',
          price: 29.99,
          image: '/products_and_logo/1000006827.jpg'
        },
        {
          id: 5,
          name: 'Beaded Jewelry Set',
          price: 59.99,
          image: '/products_and_logo/1000006886.jpg'
        }
      ]
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Curator's Picks</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Expertly selected collections that showcase the beauty and diversity of African culture
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {curatorPicks.map((pick) => (
            <div 
              key={pick.id} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={pick.image} 
                  alt={pick.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block bg-amber-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Curated by {pick.curator}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pick.title}</h3>
                <p className="text-gray-600 mb-4">{pick.description}</p>
                
                <div className="mb-6">
                  <blockquote className="border-l-4 border-amber-500 pl-4 italic text-gray-700 text-sm">
                    "{pick.story}"
                  </blockquote>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Featured Items</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {pick.products.map((product) => (
                      <div 
                        key={product.id} 
                        className="flex items-center p-3 rounded-lg border border-gray-200 hover:border-amber-300 transition-all duration-200 cursor-pointer bg-white"
                        onClick={() => onViewProduct(product.id)}
                      >
                        <div className="flex-shrink-0 w-14 h-14 rounded-md overflow-hidden border border-gray-200">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-full object-contain p-1"
                          />
                        </div>
                        <div className="ml-3">
                          <h5 className="font-medium text-gray-900 text-sm truncate max-w-[90px]">{product.name}</h5>
                          <p className="text-amber-600 font-semibold text-sm">${product.price.toFixed(2)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Button 
                  variant="accent" 
                  size="md"
                  className="w-full"
                  onClick={() => console.log('View collection:', pick.title)}
                >
                  Explore Collection
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CuratorsPicksSection;