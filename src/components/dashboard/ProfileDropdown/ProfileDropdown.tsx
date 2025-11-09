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

export const ProfileDropdown: React.FC<ProfileDropdownProps> = ({
  isOpen,
  onClose,
  className,
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null)

  const newItems: NewItem[] = [
    { id: 'project', label: 'New Project', icon: <Briefcase className="w-3.5 h-3.5 min-[480px]:w-4 min-[480px]:h-4 text-indigo-500" /> },
    { id: 'task', label: 'New Task', icon: <CheckSquare className="w-3.5 h-3.5 min-[480px]:w-4 min-[480px]:h-4 text-indigo-500" /> },
    { id: 'contact', label: 'New Contact', icon: <Users className="w-3.5 h-3.5 min-[480px]:w-4 min-[480px]:h-4 text-indigo-500" /> },
    { id: 'event', label: 'New Event', icon: <Calendar className="w-3.5 h-3.5 min-[480px]:w-4 min-[480px]:h-4 text-indigo-500" /> },
    { id: 'product', label: 'New Product', icon: <Package className="w-3.5 h-3.5 min-[480px]:w-4 min-[480px]:h-4 text-indigo-500" /> },
    { id: 'invoice', label: 'New Invoice', icon: <FileText className="w-3.5 h-3.5 min-[480px]:w-4 min-[480px]:h-4 text-indigo-500" /> },
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
        'absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-50',
        'w-48 min-[480px]:w-56',
        className
      )}
    >
      <div>
        {newItems.map((item, index) => (
          <button
            key={item.id}
            className={cn(
              'w-full px-3 min-[480px]:px-4 py-2 min-[480px]:py-3 text-left text-xs text-gray-900 hover:bg-gray-50 transition-colors flex items-center gap-2 min-[480px]:gap-3',
              index !== newItems.length - 1 && 'border-b border-gray-100'
            )}
          >
            <div className="w-7 h-7 min-[480px]:w-8 min-[480px]:h-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
              {item.icon}
            </div>
            <span className="font-semibold text-xs">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

