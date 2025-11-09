import React from 'react'
import { cn } from '@/utils/cn'
import { Clock, Briefcase, CheckSquare, Folder, Calendar, Menu } from 'lucide-react'

export interface BottomNavProps {
  className?: string
}

export const BottomNav: React.FC<BottomNavProps> = ({ className }) => {
  const navItems = [
    { id: 'dashboard', icon: Clock, active: true },
    { id: 'projects', icon: Briefcase },
    { id: 'tasks', icon: CheckSquare },
    { id: 'files', icon: Folder },
    { id: 'calendar', icon: Calendar },
    { id: 'menu', icon: Menu },
  ]

  return (
    <nav
      className={cn(
        'fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50',
        'flex min-[480px]:hidden',
        className
      )}
    >
      <div className="flex items-center justify-evenly h-14 px-2 w-full">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <button
              key={item.id}
              className={cn(
                'flex flex-col items-center justify-center gap-0.5 h-full transition-colors relative',
                item.active
                  ? 'text-blue-600'
                  : 'text-gray-500'
              )}
            >
              <div
                className={cn(
                  'w-9 h-9 rounded-lg flex items-center justify-center transition-colors',
                  item.active ? 'bg-blue-50' : ''
                )}
              >
                <Icon className="w-5 h-5" />
              </div>
              {item.active && (
                <div className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-600"></div>
              )}
            </button>
          )
        })}
      </div>
    </nav>
  )
}

