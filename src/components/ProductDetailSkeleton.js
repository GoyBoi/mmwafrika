import React from 'react';
import { Skeleton } from '@/components/ui/skeleton.jsx';

const ProductDetailSkeleton = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Breadcrumb skeleton */}
      <div className="bg-white py-3 px-4 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex space-x-2">
            <Skeleton className="h-4 w-12" />
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-4 w-24" />
          </div>
        </div>
      </div>
      
      <main className="flex-grow py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Product Gallery and Info */}
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
            {/* Image gallery skeleton */}
            <div className="flex flex-col-reverse">
              {/* Image grid skeleton */}
              <div className="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
                <div className="grid grid-cols-4 gap-6">
                  {[...Array(3)].map((_, index) => (
                    <Skeleton key={index} className="h-24 rounded-md" />
                  ))}
                </div>
              </div>
              
              {/* Main image skeleton */}
              <div className="w-full aspect-w-1 aspect-h-1">
                <Skeleton className="w-full h-96 sm:h-[32rem] lg:h-[36rem] rounded-lg" />
              </div>
            </div>
            
            {/* Product info skeleton */}
            <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
              <Skeleton className="h-8 w-3/4 mb-3" />
              <Skeleton className="h-4 w-1/3 mb-4" />
              <Skeleton className="h-8 w-1/4 mb-4" />
              
              {/* Size selection skeleton */}
              <div className="mt-6">
                <Skeleton className="h-4 w-16 mb-2" />
                <div className="flex items-center">
                  <div className="grid grid-cols-5 gap-2 sm:grid-cols-3">
                    {[...Array(5)].map((_, index) => (
                      <Skeleton key={index} className="h-10 w-12 rounded-md" />
                    ))}
                  </div>
                  <Skeleton className="h-4 w-16 ml-4" />
                </div>
              </div>
              
              {/* Quantity skeleton */}
              <div className="mt-6">
                <Skeleton className="h-4 w-20 mb-2" />
                <div className="flex items-center">
                  <Skeleton className="h-10 w-10 rounded-l-md" />
                  <Skeleton className="h-10 w-16" />
                  <Skeleton className="h-10 w-10 rounded-r-md" />
                </div>
              </div>
              
              {/* Add to cart button skeleton */}
              <div className="mt-6">
                <Skeleton className="h-12 w-full rounded-md" />
              </div>
              
              {/* Social sharing skeleton */}
              <div className="mt-6 border-t border-gray-200 pt-6">
                <Skeleton className="h-4 w-12 mb-3" />
                <div className="flex space-x-4">
                  <Skeleton className="h-6 w-6 rounded-full" />
                  <Skeleton className="h-6 w-6 rounded-full" />
                  <Skeleton className="h-6 w-6 rounded-full" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Product details tabs skeleton */}
          <div className="mt-16">
            <Skeleton className="h-12 w-full rounded-md mb-6" />
            <div className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-4/5" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>
          
          {/* Frequently Bought Together skeleton */}
          <div className="mt-16 border-t border-gray-200 pt-16">
            <Skeleton className="h-6 w-64 mb-8" />
            <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="group relative">
                  <Skeleton className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg" />
                  <div className="mt-4">
                    <div>
                      <Skeleton className="h-4 w-3/4 mb-1" />
                      <Skeleton className="h-3 w-1/2" />
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <Skeleton className="h-4 w-16" />
                      <Skeleton className="h-4 w-20" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Complete the Look skeleton */}
          <div className="mt-16 border-t border-gray-200 pt-16">
            <Skeleton className="h-6 w-64 mb-8" />
            <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="group relative">
                  <Skeleton className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg" />
                  <div className="mt-4">
                    <div>
                      <Skeleton className="h-4 w-3/4 mb-1" />
                      <Skeleton className="h-3 w-1/2" />
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <Skeleton className="h-4 w-16" />
                      <Skeleton className="h-4 w-20" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetailSkeleton;