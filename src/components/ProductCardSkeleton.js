import React from 'react';
import { Skeleton } from '@/components/ui/skeleton.jsx';

const ProductCardSkeleton = () => {
  return (
    <div className="group relative bg-white rounded-xl border border-gray-200 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-[280px] h-[380px] cursor-pointer card flex flex-col h-full w-full">
      {/* Image skeleton */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <Skeleton className="w-full h-full" />
      </div>
      
      {/* Content skeleton */}
      <div className="p-4 flex-grow flex flex-col">
        {/* Title skeleton */}
        <Skeleton className="h-4 w-3/4 mb-2" />
        <Skeleton className="h-4 w-1/2 mb-3" />
        
        {/* Rating skeleton */}
        <div className="flex items-center mb-3">
          <Skeleton className="h-3 w-20" />
        </div>
        
        {/* Price skeleton */}
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center">
            <Skeleton className="h-4 w-16" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;