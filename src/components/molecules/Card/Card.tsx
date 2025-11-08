import React from 'react'
import { cn } from '@/utils/cn'
import { BaseComponentProps } from '@/types'

export interface CardProps extends BaseComponentProps {
  title?: string
  subtitle?: string
  header?: React.ReactNode
  footer?: React.ReactNode
  hover?: boolean
}

/**
 * Card component
 */
export const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  header,
  footer,
  children,
  className,
  hover = false,
}) => {
  return (
    <div
      className={cn(
        'rounded-lg border bg-white p-6 shadow-sm',
        hover && 'transition-shadow hover:shadow-md',
        className
      )}
    >
      {(title || subtitle || header) && (
        <div className="mb-4">
          {header || (
            <>
              {title && <h3 className="text-lg font-semibold">{title}</h3>}
              {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
            </>
          )}
        </div>
      )}
      <div>{children}</div>
      {footer && <div className="mt-4">{footer}</div>}
    </div>
  )
}

