import React, { useState } from 'react'
import { cn } from '@/utils/cn'
import { Menu, Search, User } from 'lucide-react'
import { SearchDropdown } from '@/components/dashboard/SearchDropdown'
import { ProfileDropdown } from '@/components/dashboard/ProfileDropdown'
import { useAppStore } from '@/store'

export interface HeaderProps {
  className?: string
}

/**
 * Header component
 */
export const Header: React.FC<HeaderProps> = ({ className }) => {
  const [searchOpen, setSearchOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const searchValue = 'Bradley Wilkins'
  const { toggleSidebar, sidebarOpen } = useAppStore()

  return (
    <header
      className={cn(
        'fixed top-0 left-20 right-0 h-16 bg-header-bg flex items-center justify-between px-6 z-[9999]',
        sidebarOpen && 'left-64',
        'transition-all duration-300',
        className
      )}
      style={{ 
        backgroundColor: '#f9fafb',
        // backdropFilter: 'none',
        WebkitBackdropFilter: 'none'
      }}
    >
      {/* Left side - Hamburger and Dashboard text */}
      <div className="flex items-center gap-4">
      <button
        onClick={toggleSidebar}
          className="rounded-md p-2 hover:bg-gray-200 transition-colors"
          aria-label="Toggle menu"
        >
          <Menu className="h-5 w-5 text-gray-700" />
        </button>
        <h1 className="text-lg font-semibold text-gray-800">Dashboard</h1>
      </div>

      {/* Right side - Search and Profile */}
      <div className="flex items-center gap-4 relative">
        <div className="relative">
          <button
            onClick={() => {
              setSearchOpen(!searchOpen)
              setProfileOpen(false)
            }}
            className="rounded-md p-2 hover:bg-gray-200 transition-colors relative"
            aria-label="Search"
          >
            <Search className="h-5 w-5 text-gray-700" />
          </button>
          <SearchDropdown
            isOpen={searchOpen}
            onClose={() => setSearchOpen(false)}
            searchValue={searchValue}
          />
        </div>
        <div className="relative">
          <button
            onClick={() => {
              setProfileOpen(!profileOpen)
              setSearchOpen(false)
            }}
            className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer hover:bg-gray-400 transition-colors"
            aria-label="Profile"
          >
            <User className="h-5 w-5 text-gray-700" />
      </button>
          <ProfileDropdown
            isOpen={profileOpen}
            onClose={() => setProfileOpen(false)}
          />
        </div>
      </div>
    </header>
  )
}

