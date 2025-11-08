import React from 'react'
import { cn } from '@/utils/cn'

export interface MetricCardProps {
  title: string
  value: string
  icon: React.ReactNode
  iconBgColor: 'blue' | 'yellow' | 'gray' | 'pink'
  className?: string
}

/**
 * MetricCard component
 */
export const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  icon,
  iconBgColor,
  className,
}) => {
  const bgColorMap = {
    blue: 'bg-metric-blue',
    yellow: 'bg-metric-yellow',
    gray: 'bg-metric-gray',
    pink: 'bg-metric-pink',
  }

  return (
    <div
      className={cn(
        'bg-white rounded-lg p-4 shadow-sm border border-gray-100',
        className
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm text-gray-500 mb-1">{title}</p>
          <p className="text-2xl font-bold text-gray-800">{value}</p>
        </div>
        <div className={cn('w-10 h-10 rounded-lg flex items-center justify-center border border-gray-200', bgColorMap[iconBgColor])}>
          {icon}
        </div>
      </div>
    </div>
  )
}

