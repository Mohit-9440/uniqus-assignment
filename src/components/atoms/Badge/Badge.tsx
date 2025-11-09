import React from 'react'
import { cn } from '@/utils/cn'
import { BadgeVariant } from '@/types'

export interface BadgeProps {
  variant?: BadgeVariant
  children: React.ReactNode
  className?: string
}

/**
 * Badge component
 */
export const Badge: React.FC<BadgeProps> = ({
  variant: _variant = 'default',
  children,
  className,
}) => {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
        className
      )}
    >
      {children}
    </span>
  )
}

