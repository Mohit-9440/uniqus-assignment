import React from 'react'
import { cn } from '@/utils/cn'
import { useAppStore } from '@/store'
import { 
  LayoutDashboard, 
  Folder, 
  Calendar, 
  Users, 
  MessageSquare, 
  FileText, 
  HelpCircle, 
  Bell, 
  User
} from 'lucide-react'

export interface SidebarProps {
  className?: string
}

interface NavItem {
  id: string
  label: string
  icon: React.ReactNode
  active?: boolean
}

/**
 * Sidebar component
 */
export const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const { sidebarOpen } = useAppStore()

  const navItems: NavItem[] = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5" />, active: true },
    { id: 'projects', label: 'Projects', icon: <Folder className="w-5 h-5" /> },
    { id: 'tasks', label: 'Tasks', icon: <FileText className="w-5 h-5" /> },
    { id: 'calendar', label: 'Calendar', icon: <Calendar className="w-5 h-5" /> },
    { id: 'contacts', label: 'Contacts', icon: <Users className="w-5 h-5" /> },
    { id: 'messages', label: 'Messages', icon: <MessageSquare className="w-5 h-5" /> },
    { id: 'products', label: 'Products', icon: <FileText className="w-5 h-5" /> },
    { id: 'invoices', label: 'Invoices', icon: <FileText className="w-5 h-5" /> },
    { id: 'notifications', label: 'Notifications', icon: <Bell className="w-5 h-5" /> },
    { id: 'reports', label: 'Reports', icon: <FileText className="w-5 h-5" /> },
    { id: 'help', label: 'Help Center', icon: <HelpCircle className="w-5 h-5" /> },
  ]

  return (
    <aside
      className={cn(
        'fixed left-0 top-0 h-screen bg-white flex flex-col py-6 z-50 transition-all duration-300 shadow-lg border-r border-gray-200',
        sidebarOpen ? 'w-64' : 'w-20',
        className
      )}
    >
      {/* Logo at top */}
      <div className={cn('mb-8 px-4 flex items-center gap-3', !sidebarOpen && 'justify-center')}>
        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
          <span className="text-white font-bold text-lg">C</span>
        </div>
        {sidebarOpen && (
          <span className="text-blue-600 font-semibold text-lg whitespace-nowrap">betaCRM</span>
        )}
      </div>

      {/* Navigation items */}
      <nav className="flex-1 flex flex-col gap-2 px-2 relative">
        {navItems.map((item) => (
          <div key={item.id} className="relative">
            {item.active && (
              <>
                <div 
                  className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-10 rounded-r-full"
                  style={{ backgroundColor: '#1976D2' }}
                ></div>
                <div 
                  className="absolute top-0 bottom-0 w-1"
                  style={{ backgroundColor: '#1976D2', right: '-8px' }}
                ></div>
              </>
            )}
            <div
              className={cn(
                'flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer transition-colors',
                item.active
                  ? 'bg-sidebar-active'
                  : 'hover:bg-gray-100',
                !sidebarOpen && 'justify-center'
              )}
              style={item.active ? {
                backgroundColor: '#E3F2FD',
              } : {}}
            >
              <div className={cn('flex-shrink-0', item.active && 'text-sidebar-active-text')}>
                {item.icon}
              </div>
              {sidebarOpen && (
                <span className={cn(
                  'text-sm font-medium whitespace-nowrap',
                  item.active ? 'text-sidebar-active-text font-semibold' : 'text-gray-600'
                )}>
                  {item.label}
                  </span>
                )}
            </div>
          </div>
          ))}
      </nav>

      {/* Profile section at bottom */}
      <div className={cn('px-4 pt-4 border-t border-gray-200', !sidebarOpen && 'px-2')}>
        <div
          className={cn(
            'flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors',
            !sidebarOpen && 'justify-center'
          )}
        >
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
            <User className="w-5 h-5 text-gray-700" />
          </div>
          {sidebarOpen && (
            <div className="flex-1 min-w-0">
              <p className="text-gray-900 text-sm font-medium whitespace-nowrap">John Doe</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  )
}

