import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs.jsx';

const ProductDetailTabs = ({ product, reviews }) => {
  return (
    <Tabs defaultValue="description" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="description">Description</TabsTrigger>
        <TabsTrigger value="reviews">Reviews ({product.reviewCount})</TabsTrigger>
        <TabsTrigger value="details">Details</TabsTrigger>
      </TabsList>
      
      <TabsContent value="description" className="mt-6">
        <div className="prose prose-sm text-gray-500">
          <p>{product.description}</p>
          <p>This authentic African piece celebrates heritage and craftsmanship. Each item is carefully made by skilled artisans who preserve traditional techniques passed down through generations.</p>
        </div>
      </TabsContent>
      
      <TabsContent value="reviews" className="mt-6">
        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
              <div className="flex items-center">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${i < review.rating ? 'text-amber-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  ))}
                </div>
                <p className="ml-3 text-sm text-gray-500">{review.date}</p>
              </div>
              <div className="mt-2">
                <h4 className="text-sm font-medium text-gray-900">{review.userName}</h4>
                {review.verified && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mt-1">
                    Verified Purchase
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm text-gray-700">{review.comment}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-6">
          <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500">
            Write a Review
          </button>
        </div>
      </TabsContent>
      
      <TabsContent value="details" className="mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium text-gray-900">Product Details</h3>
            <div className="mt-4 space-y-4">
              <div>
                <h4 className="text-sm font-medium text-gray-900">Material</h4>
                <p className="mt-1 text-sm text-gray-500">{product.material}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-900">Fit</h4>
                <p className="mt-1 text-sm text-gray-500">{product.fit}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-900">Colors</h4>
                <p className="mt-1 text-sm text-gray-500">{product.colors.join(', ')}</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-900">Care Instructions</h3>
            <div className="mt-4 space-y-4">
              <ul className="text-sm text-gray-500 list-disc pl-5 space-y-2">
                <li>Hand wash cold</li>
                <li>Use mild detergent</li>
                <li>Hang to dry</li>
                <li>Iron on low heat if needed</li>
                <li>Store in a cool, dry place</li>
              </ul>
            </div>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default ProductDetailTabs;