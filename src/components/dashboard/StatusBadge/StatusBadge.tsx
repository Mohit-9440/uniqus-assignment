import React from 'react'
import { cn } from '@/utils/cn'

export type StatusType = 'shipped' | 'processing' | 'cancelled'

export interface StatusBadgeProps {
  status: StatusType
  className?: string
}

/**
 * StatusBadge component
 */
export const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  className,
}) => {
  const statusConfig = {
    shipped: {
      bg: 'bg-shipped-bg',
      text: 'text-shipped-text',
      label: 'Shipped',
    },
    processing: {
      bg: 'bg-processing-bg',
      text: 'text-processing-text',
      label: 'Processing',
    },
    cancelled: {
      bg: 'bg-cancelled-bg',
      text: 'text-cancelled-text',
      label: 'Cancelled',
    },
  }

  const config = statusConfig[status]

  return (
    <span
      className={cn(
        'px-3 py-1 rounded-full text-sm font-medium',
        config.bg,
        config.text,
        className
      )}
    >
      {config.label}
    </span>
  )
}

