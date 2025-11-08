import React, { useState, useRef, useEffect } from 'react'
import { cn } from '@/utils/cn'
import { Search, Code, Palette } from 'lucide-react'

export interface ActivityItem {
  id: string
  title: string
  subtitle: string
  icon: React.ReactNode
  iconBg: string
  date: string
}

export interface SearchDropdownProps {
  isOpen: boolean
  onClose: () => void
  searchValue: string
  className?: string
}

/**
 * SearchDropdown component
 */
export const SearchDropdown: React.FC<SearchDropdownProps> = ({
  isOpen,
  onClose,
  searchValue,
  className,
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null)

  const activities: ActivityItem[] = [
    {
      id: '1',
      title: 'Dribble Redesign',
      subtitle: 'Webdesign',
      icon: <Palette className="w-5 h-5 text-white" />,
      iconBg: 'bg-orange-500',
      date: '24 Feb 2019',
    },
    {
      id: '2',
      title: 'New HTML Theme',
      subtitle: 'Theme',
      icon: <Code className="w-5 h-5 text-white" />,
      iconBg: 'bg-green-500',
      date: '20 May 2019',
    },
  ]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      ref={dropdownRef}
      className={cn(
        'absolute top-full right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50',
        className
      )}
    >
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <Search className="w-4 h-4 text-gray-500" />
          <span className="font-semibold text-gray-800">{searchValue || 'Bradley Wilkins'}</span>
        </div>
      </div>

      {/* Activity Items */}
      <div className="max-h-96 overflow-y-auto">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <div className="flex items-start gap-3">
              <div className={cn('w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0', activity.iconBg)}>
                {activity.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-800 text-sm">{activity.title}</p>
                <p className="text-xs text-gray-500 mt-0.5">{activity.subtitle}</p>
              </div>
              <p className="text-xs text-gray-500 whitespace-nowrap">{activity.date}</p>
            </div>
          </div>
        ))}
      </div>

      {/* User Profile */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0">
            <span className="text-sm font-semibold text-gray-700">BW</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-gray-800 text-sm">Bradley Wilkins</p>
            <p className="text-xs text-gray-500">b.wilkins@gmail.com</p>
          </div>
          <button className="px-3 py-1.5 text-xs font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors">
            Designer
          </button>
        </div>
      </div>
    </div>
  )
}

