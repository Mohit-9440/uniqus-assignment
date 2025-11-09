import React from 'react'
import { NavLink } from 'react-router-dom'
import { cn } from '@/utils/cn'
import { Clock, Briefcase, CheckSquare, Folder, Calendar, Menu } from 'lucide-react'

export interface BottomNavProps {
  className?: string
}

export const BottomNav: React.FC<BottomNavProps> = ({ className }) => {
  const navItems = [
    { id: 'dashboard', icon: Clock, path: '/' },
    { id: 'projects', icon: Briefcase, path: '/projects' },
    { id: 'tasks', icon: CheckSquare, path: '/tasks' },
    { id: 'files', icon: Folder, path: '/products' },
    { id: 'calendar', icon: Calendar, path: '/calendar' },
    { id: 'menu', icon: Menu, path: '/contacts' },
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
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) => cn(
                'flex flex-col items-center justify-center gap-0.5 h-full transition-colors relative',
                isActive
                  ? 'text-blue-600'
                  : 'text-gray-500'
              )}
            >
              {({ isActive }) => (
                <>
                  <div
                    className={cn(
                      'w-9 h-9 rounded-lg flex items-center justify-center transition-colors',
                      isActive ? 'bg-blue-50' : ''
                    )}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  {isActive && (
                    <div className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-600"></div>
                  )}
                </>
              )}
            </NavLink>
          )
        })}
      </div>
    </nav>
  )
}

