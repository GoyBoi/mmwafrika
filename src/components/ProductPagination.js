import React from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination.jsx';

const ProductPagination = ({ currentPage, totalPages, onPageChange }) => {
  // Generate page numbers with ellipses for better UX
  const generatePageNumbers = () => {
    const delta = 2; // Number of pages to show around current page
    const range = [];
    const rangeWithDots = [];

    // Always include first page
    range.push(1);
    
    // Add pages around current page
    for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
      range.push(i);
    }
    
    // Always include last page
    if (totalPages > 1) {
      range.push(totalPages);
    }

    // Add ellipses where needed
    let last = 0;
    for (const page of range) {
      if (page - last === 2) {
        // Only one page between, show it
        rangeWithDots.push(last + 1);
      } else if (page - last !== 1) {
        // More than one page between, add ellipsis
        rangeWithDots.push('...');
      }
      rangeWithDots.push(page);
      last = page;
    }

    return rangeWithDots;
  };

  if (totalPages <= 1) return null;

  const pageNumbers = generatePageNumbers();

  return (
    <Pagination className="mt-2">
      <PaginationContent className="gap-1">
        <PaginationItem>
          <PaginationPrevious 
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage > 1) onPageChange(currentPage - 1);
            }}
            className={`rounded-lg border border-gray-200 transition-colors hover:bg-amber-50 hover:text-amber-600 ${
              currentPage === 1 ? 'pointer-events-none opacity-50' : ''
            }`}
          />
        </PaginationItem>
        
        {pageNumbers.map((page, index) => (
          <PaginationItem key={index}>
            {page === '...' ? (
              <PaginationEllipsis className="text-gray-400" />
            ) : (
              <PaginationLink
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onPageChange(page);
                }}
                isActive={currentPage === page}
                className={`rounded-lg border transition-colors font-medium ${
                  currentPage === page
                    ? 'bg-amber-600 text-white border-amber-600 shadow-sm'
                    : 'border-gray-200 hover:bg-amber-50 hover:text-amber-600'
                }`}
              >
                {page}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}
        
        <PaginationItem>
          <PaginationNext 
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage < totalPages) onPageChange(currentPage + 1);
            }}
            className={`rounded-lg border border-gray-200 transition-colors hover:bg-amber-50 hover:text-amber-600 ${
              currentPage === totalPages ? 'pointer-events-none opacity-50' : ''
            }`}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default ProductPagination;