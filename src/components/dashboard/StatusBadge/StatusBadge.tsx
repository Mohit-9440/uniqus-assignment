import React from 'react'
import { cn } from '@/utils/cn'

export type StatusType = 'shipped' | 'processing' | 'cancelled'

export interface StatusBadgeProps {
  status: StatusType
  className?: string
}

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
        'px-3 py-2 rounded-md text-xs font-medium',
        config.bg,
        config.text,
        className
      )}
      style={{
        backgroundColor: status === 'shipped' ? '#E3F2FD' : status === 'processing' ? '#FFF3E0' : '#FFEBEE',
        color: status === 'shipped' ? '#1976D2' : status === 'processing' ? '#F57C00' : '#D32F2F',
      }}
    >
      {config.label}
    </span>
  )
}

