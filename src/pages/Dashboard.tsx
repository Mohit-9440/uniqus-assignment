import React, { useState, useMemo } from 'react'
import { Header } from '@/components/organisms/Header'
import { Sidebar } from '@/components/organisms/Sidebar'
import { MetricCard } from '@/components/dashboard/MetricCard'
import { Messages, Message } from '@/components/dashboard/Messages'
import { ConversionHistory } from '@/components/dashboard/ConversionHistory'
import { LatestSalesTable } from '@/components/dashboard/LatestSalesTable'
import { Pagination } from '@/components/dashboard/Pagination'
import { BottomNav } from '@/components/dashboard/BottomNav'
import { getPaginatedSales, getTotalPages } from '@/data/mockData'
import { useAppStore } from '@/store'
import { cn } from '@/utils/cn'
import { 
  TrendingUp, 
  Users as UsersIcon, 
  DollarSign, 
  BarChart3 
} from 'lucide-react'

const SHOW_MESSAGES_AND_HISTORY = false

const Dashboard: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 7

  const messages: Message[] = [
    {
      id: '1',
      sender: 'Nicholas Gordon',
      message: 'Moreover the striking, brilliant and vivid colors',
      time: '10m',
    },
    {
      id: '2',
      sender: 'Nina Perkins',
      message: 'In the history of modern astronomy. there is small',
      time: '1hr',
    },
    {
      id: '3',
      sender: 'Daniel Holland',
      message: 'Advertising on a budget with a monthly frequency',
      time: '2hr',
    },
    {
      id: '4',
      sender: 'Franklin Thomas',
      message: 'In the history of modern astronomy. there is small',
      time: '3hrs',
    },
  ]

  const sales = useMemo(() => {
    return getPaginatedSales(currentPage, itemsPerPage)
  }, [currentPage, itemsPerPage])

  const totalPages = useMemo(() => {
    return getTotalPages(itemsPerPage)
  }, [itemsPerPage])

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
            <div className="grid grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-3 lg:gap-4 mb-5 sm:mb-6">
              <MetricCard
                title="New sales"
                value="1.345"
                icon={<TrendingUp className="w-5 h-5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-blue-600" />}
                iconBgColor="blue"
              />
              <MetricCard
                title="New leads"
                value="2.890"
                icon={<UsersIcon className="w-5 h-5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-yellow-600" />}
                iconBgColor="yellow"
              />
              <MetricCard
                title="Income per lead"
                value="$1.870"
                icon={<DollarSign className="w-5 h-5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-gray-600" />}
                iconBgColor="gray"
              />
              <MetricCard
                title="Conversion rate"
                value="5.10%"
                icon={<BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 text-pink-600" />}
                iconBgColor="pink"
                className="hidden lg:block"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-4 mb-4">
              {SHOW_MESSAGES_AND_HISTORY && (
                <div className="lg:col-span-1 space-y-4">
                  <Messages messages={messages} />
                  <ConversionHistory />
                </div>
              )}

              <div className={SHOW_MESSAGES_AND_HISTORY ? 'lg:col-span-2' : 'lg:col-span-3'}>
                <LatestSalesTable sales={sales} />
                <div className="mt-4">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                    onPrev={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    onNext={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
        <BottomNav />
      </div>
    </div>
  )
}

export default Dashboard

