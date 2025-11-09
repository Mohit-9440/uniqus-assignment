import React from 'react'
import { cn } from '@/utils/cn'
import { Construction } from 'lucide-react'

export interface ComingSoonProps {
  title?: string
  className?: string
}

export const ComingSoon: React.FC<ComingSoonProps> = ({ 
  title = 'Coming Soon',
  className 
}) => {
  return (
    <div className={cn('flex items-center justify-center min-h-[60vh]', className)}>
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 mb-6">
          <Construction className="w-10 h-10 text-blue-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
        <p className="text-gray-600">This page is under construction. Check back soon!</p>
      </div>
    </div>
  )
}

