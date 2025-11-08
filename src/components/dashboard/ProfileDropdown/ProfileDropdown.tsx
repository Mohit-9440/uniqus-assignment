import React, { useRef, useEffect } from 'react'
import { cn } from '@/utils/cn'
import { Briefcase, CheckSquare, Users, Calendar, Package, FileText } from 'lucide-react'

export interface ProfileDropdownProps {
  isOpen: boolean
  onClose: () => void
  className?: string
}

interface NewItem {
  id: string
  label: string
  icon: React.ReactNode
}

/**
 * ProfileDropdown component - Shows "New" actions
 */
export const ProfileDropdown: React.FC<ProfileDropdownProps> = ({
  isOpen,
  onClose,
  className,
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null)

  const newItems: NewItem[] = [
    { id: 'project', label: 'New Project', icon: <Briefcase className="w-4 h-4 text-indigo-500" /> },
    { id: 'task', label: 'New Task', icon: <CheckSquare className="w-4 h-4 text-indigo-500" /> },
    { id: 'contact', label: 'New Contact', icon: <Users className="w-4 h-4 text-indigo-500" /> },
    { id: 'event', label: 'New Event', icon: <Calendar className="w-4 h-4 text-indigo-500" /> },
    { id: 'product', label: 'New Product', icon: <Package className="w-4 h-4 text-indigo-500" /> },
    { id: 'invoice', label: 'New Invoice', icon: <FileText className="w-4 h-4 text-indigo-500" /> },
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
        'absolute top-full right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 z-50',
        className
      )}
    >
      <div>
        {newItems.map((item, index) => (
          <button
            key={item.id}
            className={cn(
              'w-full px-4 py-3 text-left text-xs text-gray-900 hover:bg-gray-50 transition-colors flex items-center gap-3',
              index !== newItems.length - 1 && 'border-b border-gray-100'
            )}
          >
            <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
              {item.icon}
            </div>
            <span className="font-semibold">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

