import React, { useState, useMemo } from 'react'
import { Header } from '@/components/organisms/Header'
import { Sidebar } from '@/components/organisms/Sidebar'
import { MetricCard } from '@/components/dashboard/MetricCard'
import { Messages, Message } from '@/components/dashboard/Messages'
import { ConversionHistory } from '@/components/dashboard/ConversionHistory'
import { LatestSalesTable } from '@/components/dashboard/LatestSalesTable'
import { Pagination } from '@/components/dashboard/Pagination'
import { getPaginatedSales, getTotalPages } from '@/data/mockData'
import { useAppStore } from '@/store'
import { cn } from '@/utils/cn'
import { 
  TrendingUp, 
  Users as UsersIcon, 
  DollarSign, 
  BarChart3 
} from 'lucide-react'

/**
 * Dashboard page
 */
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

  // Get paginated sales data
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
          sidebarOpen ? 'ml-64' : 'ml-20'
        )}
      >
        <Header />
        <main className="flex-1 overflow-y-auto pt-24 p-4 relative z-0">
          <div className="mx-auto w-full">
            {/* Top Metrics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              <MetricCard
                title="New sales"
                value="1.345"
                icon={<TrendingUp className="w-5 h-5 text-blue-600" />}
                iconBgColor="blue"
              />
              <MetricCard
                title="New leads"
                value="2.890"
                icon={<UsersIcon className="w-5 h-5 text-yellow-600" />}
                iconBgColor="yellow"
              />
              <MetricCard
                title="Income per lead"
                value="$1.870"
                icon={<DollarSign className="w-5 h-5 text-gray-600" />}
                iconBgColor="gray"
              />
              <MetricCard
                title="Conversion rate"
                value="5.10%"
                icon={<BarChart3 className="w-5 h-5 text-pink-600" />}
                iconBgColor="pink"
              />
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
              {/* Left Column - Messages and Conversion History */}
              <div className="lg:col-span-1 space-y-4">
                <Messages messages={messages} />
                <ConversionHistory />
              </div>

              {/* Right Column - Latest Sales Table */}
              <div className="lg:col-span-2">
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
      </div>
    </div>
  )
}

export default Dashboard

