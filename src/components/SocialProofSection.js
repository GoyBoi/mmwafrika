import React, { useState } from 'react';
import Rating from './Rating.js';

function SocialProofSection() {
  // Mock data for testimonials
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New York, USA",
      rating: 5,
      text: "The quality of the African Print Dress exceeded my expectations. The fabric is beautiful and the fit is perfect. I've received so many compliments!",
      date: "2025-08-15",
      verified: true,
      avatar: "/products_and_logo/1000006827.jpg"
    },
    {
      id: 2,
      name: "Michael Okafor",
      location: "Lagos, Nigeria",
      rating: 4,
      text: "I purchased the Handwoven Basket as a gift for my sister. She was thrilled with the craftsmanship and cultural significance of the piece.",
      date: "2025-08-22",
      verified: true,
      avatar: "/products_and_logo/1000006833.jpg"
    },
    {
      id: 3,
      name: "Emma Dubois",
      location: "Paris, France",
      rating: 5,
      text: "The Beaded Jewelry Set is absolutely stunning! The colors are vibrant and the craftsmanship is impeccable. Will definitely be ordering more.",
      date: "2025-09-01",
      verified: true,
      avatar: "/products_and_logo/1000006886.jpg"
    }
  ];

  // Mock data for user-generated content
  const userContent = [
    {
      id: 1,
      image: "/products_and_logo/1000006827.jpg",
      likes: 124,
      caption: "Styling my new African Print Dress for a summer evening out ✨ #MMWafrika #AfricanFashion"
    },
    {
      id: 2,
      image: "/products_and_logo/1000006886.jpg",
      likes: 89,
      caption: "Love my new Beaded Jewelry Set! Perfect for adding a pop of color to any outfit 💎"
    },
    {
      id: 3,
      image: "/products_and_logo/1000006881.jpg",
      likes: 156,
      caption: "The Kente Cloth is a beautiful representation of heritage and culture. So proud to wear it! 🌍"
    },
    {
      id: 4,
      image: "/products_and_logo/1000016728.jpg",
      likes: 72,
      caption: "My new Traditional Mask adds such character to my living room decor! 🎭"
    }
  ];

  const [visibleTestimonials, setVisibleTestimonials] = useState(3);

  const loadMoreTestimonials = () => {
    setVisibleTestimonials(prev => prev + 3);
  };

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-heading">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-body">
              Don't just take our word for it - hear from our satisfied customers
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, visibleTestimonials).map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900 font-heading">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500 font-body">{testimonial.location}</p>
                  </div>
                  {testimonial.verified && (
                    <span className="ml-auto bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full font-body">
                      Verified
                    </span>
                  )}
                </div>
                
                <div className="mb-3">
                  <Rating value={testimonial.rating} />
                </div>
                
                <p className="text-gray-600 mb-4 italic font-body">"{testimonial.text}"</p>
                
                <p className="text-xs text-gray-400 font-body">{testimonial.date}</p>
              </div>
            ))}
          </div>
          
          {visibleTestimonials < testimonials.length && (
            <div className="text-center mt-8">
              <button 
                onClick={loadMoreTestimonials}
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200 font-body"
              >
                Load More Reviews
              </button>
            </div>
          )}
        </div>

        {/* User Generated Content Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-heading">From Our Community</h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-body">
              See how our customers style and enjoy their MMWafrika pieces
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {userContent.map((content) => (
              <div 
                key={content.id} 
                className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white border border-gray-200"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={content.image} 
                    alt="User generated content"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="text-white">
                    <p className="text-sm line-clamp-2 mb-2 font-body">{content.caption}</p>
                    <div className="flex items-center text-xs font-body">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                      <span>{content.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-medium rounded-lg hover:from-amber-700 hover:to-orange-700 transition-all duration-300 shadow-sm hover:shadow-md font-body">
              Share Your Style
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialProofSection;