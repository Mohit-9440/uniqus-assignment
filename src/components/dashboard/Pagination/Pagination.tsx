import React from 'react'
import { cn } from '@/utils/cn'

export interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  onPrev: () => void
  onNext: () => void
  className?: string
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  onPrev,
  onNext,
  className,
}) => {
  const getVisiblePages = () => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1)
    }
    
    const pages: number[] = []
    if (currentPage <= 3) {
      pages.push(1, 2, 3, 4, 5)
    } else if (currentPage >= totalPages - 2) {
      pages.push(totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages)
    } else {
      pages.push(currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2)
    }
    return pages
  }

  const visiblePages = getVisiblePages()

  return (
    <div className={cn('flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto', className)}>
      <button
        onClick={onPrev}
        disabled={currentPage === 1}
        className={cn(
          'px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors whitespace-nowrap',
          'bg-gray-200 text-gray-700',
          'hover:bg-gray-300',
          'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gray-200'
        )}
      >
        &lt; PREV
      </button>
      
      <div className="flex items-center gap-1 sm:gap-2">
        {visiblePages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={cn(
              'w-7 h-7 sm:w-8 sm:h-8 rounded-md text-xs sm:text-sm font-medium transition-colors',
              currentPage === page
                ? 'bg-blue-600 text-white'
                : 'text-gray-900 hover:text-gray-600 bg-transparent'
            )}
          >
            {page}
          </button>
        ))}
      </div>
      
      <button
        onClick={onNext}
        disabled={currentPage === totalPages}
        className={cn(
          'px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors whitespace-nowrap',
          'bg-gray-200 text-gray-700',
          'hover:bg-gray-300',
          'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gray-200'
        )}
      >
        NEXT &gt;
      </button>
    </div>
  )
}

