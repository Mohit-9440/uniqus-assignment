import React from 'react'
import { Header } from '@/components/organisms/Header'
import { Sidebar } from '@/components/organisms/Sidebar'
import { BottomNav } from '@/components/dashboard/BottomNav'
import { ComingSoon } from '@/components/ComingSoon'
import { useAppStore } from '@/store'
import { cn } from '@/utils/cn'

const Invoices: React.FC = () => {
  const { sidebarOpen } = useAppStore()

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <Sidebar />
      <div 
        className={cn(
          'flex flex-1 flex-col overflow-hidden transition-all duration-300',
          'mobile:ml-20',
          sidebarOpen && 'mobile:ml-64'
        )}
      >
        <Header />
        <main className="flex-1 overflow-y-auto pt-16 mobile:pt-24 pb-20 mobile:pb-4 p-4 relative z-0">
          <div className="mx-auto w-full max-w-7xl">
            <ComingSoon title="Invoices" />
          </div>
        </main>
        <BottomNav />
      </div>
    </div>
  )
}

export default Invoices

