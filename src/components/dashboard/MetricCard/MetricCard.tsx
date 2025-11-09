import React from 'react'
import { cn } from '@/utils/cn'

export interface MetricCardProps {
  title: string
  value: string
  icon: React.ReactNode
  iconBgColor: 'blue' | 'yellow' | 'gray' | 'pink'
  className?: string
}

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
        'bg-white rounded-lg p-3 sm:p-4 shadow-sm border border-gray-100',
        className
      )}
    >
      <div className="flex flex-col items-center min-[480px]:flex-row min-[480px]:items-start min-[480px]:justify-between gap-2 min-[480px]:gap-4">
        <div className={cn('w-12 h-12 min-[480px]:w-10 min-[480px]:h-10 lg:w-12 lg:h-12 rounded-lg flex items-center justify-center border border-gray-200 flex-shrink-0 mb-2 min-[480px]:mb-0 min-[480px]:order-2', bgColorMap[iconBgColor])}>
          {icon}
        </div>
        <div className="flex-1 min-w-0 text-center min-[480px]:text-left min-[480px]:order-1 flex flex-col">
          <p className="text-lg sm:text-lg lg:text-xl xl:text-2xl font-bold text-gray-800 order-2 min-[480px]:order-2">{value}</p>
          <p className="text-xs sm:text-sm text-gray-500 mb-1 min-[480px]:mb-0.5 order-3 min-[480px]:order-1">{title}</p>
        </div>
      </div>
    </div>
  )
}

