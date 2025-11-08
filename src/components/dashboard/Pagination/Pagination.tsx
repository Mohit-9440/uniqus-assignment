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

/**
 * Pagination component
 */
export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  onPrev,
  onNext,
  className,
}) => {
  return (
    <div className={cn('flex items-center justify-center gap-3', className)}>
      <button
        onClick={onPrev}
        disabled={currentPage === 1}
        className={cn(
          'px-4 py-2 rounded-md text-sm font-medium transition-colors',
          'bg-gray-200 text-gray-700',
          'hover:bg-gray-300',
          'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gray-200'
        )}
      >
        &lt; PREV
      </button>
      
      <div className="flex items-center gap-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={cn(
              'w-8 h-8 rounded-md text-sm font-medium transition-colors',
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
          'px-4 py-2 rounded-md text-sm font-medium transition-colors',
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

