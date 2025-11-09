import React from 'react'
import { Header } from '@/components/organisms/Header'
import { Sidebar } from '@/components/organisms/Sidebar'
import { BottomNav } from '@/components/dashboard/BottomNav'
import { ComingSoon } from '@/components/ComingSoon'
import { useAppStore } from '@/store'
import { cn } from '@/utils/cn'

const Contacts: React.FC = () => {
  const { sidebarOpen } = useAppStore()

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <Sidebar />
      <div 
        className={cn(
          'flex flex-1 flex-col overflow-hidden transition-all duration-300',
          'min-[480px]:ml-20',
          sidebarOpen && 'min-[480px]:ml-64'
        )}
      >
        <Header />
        <main className="flex-1 overflow-y-auto pt-16 min-[480px]:pt-24 pb-20 min-[480px]:pb-4 p-4 relative z-0">
          <div className="mx-auto w-full max-w-7xl">
            <ComingSoon title="Contacts" />
          </div>
        </main>
        <BottomNav />
      </div>
    </div>
  )
}

export default Contacts

