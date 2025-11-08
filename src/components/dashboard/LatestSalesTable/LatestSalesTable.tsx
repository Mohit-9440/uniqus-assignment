import React, { useState } from 'react'
import { cn } from '@/utils/cn'
import { StatusBadge, StatusType } from '../StatusBadge'
import { Calendar } from 'lucide-react'

export interface Sale {
  id: string
  product: {
    name: string
    id: string
    image?: string
  }
  customer: {
    name: string
    email: string
  }
  delivery: {
    country: string
    address: string
  }
  status: StatusType
  subtotal: string
  shipping: string
  total: string
  date?: Date
}

export type DateFilter = 'day' | 'week' | 'month'

export interface LatestSalesTableProps {
  sales: Sale[]
  className?: string
}

/**
 * LatestSalesTable component
 */
export const LatestSalesTable: React.FC<LatestSalesTableProps> = ({
  sales,
  className,
}) => {
  const [dateFilter, setDateFilter] = useState<DateFilter>('day')

  const filteredSales = React.useMemo(() => {
    return sales
  }, [sales, dateFilter])

  return (
    <div className={cn('bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden', className)}>
      {/* Header */}
      <div className="p-4 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-800">Latest sales</h2>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setDateFilter('day')}
                className={cn(
                  'px-3 py-1.5 text-xs font-medium rounded-md transition-colors',
                  dateFilter === 'day'
                    ? 'bg-gray-800 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                )}
              >
                Day
              </button>
              <button
                onClick={() => setDateFilter('week')}
                className={cn(
                  'px-3 py-1.5 text-xs font-medium rounded-md transition-colors',
                  dateFilter === 'week'
                    ? 'bg-gray-800 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                )}
              >
                Week
              </button>
              <button
                onClick={() => setDateFilter('month')}
                className={cn(
                  'px-3 py-1.5 text-xs font-medium rounded-md flex items-center gap-1 transition-colors',
                  dateFilter === 'month'
                    ? 'bg-gray-800 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                )}
              >
                Month
                <Calendar className="w-4 h-4" />
              </button>
            </div>
          </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1000px]">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2.5 text-left text-xs font-semibold text-gray-700 tracking-wider">
                Product
              </th>
              <th className="px-4 py-2.5 text-left text-xs font-semibold text-gray-700 tracking-wider">
                Customer
              </th>
              <th className="px-4 py-2.5 text-left text-xs font-semibold text-gray-700 tracking-wider">
                Delivery
              </th>
              <th className="px-4 py-2.5 text-left text-xs font-semibold text-gray-700 tracking-wider">
                
              </th>
              <th className="px-4 py-2.5 text-left text-xs font-semibold text-gray-700 tracking-wider">
                Subtotal
              </th>
              <th className="px-4 py-2.5 text-left text-xs font-semibold text-gray-700 tracking-wider">
                Shipping
              </th>
              <th className="px-4 py-2.5 text-left text-xs font-semibold text-gray-700 tracking-wider">
                Total
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {filteredSales.map((sale) => (
              <tr key={sale.id} className="hover:bg-gray-50 transition-colors">
                {/* Product */}
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-200 rounded flex items-center justify-center flex-shrink-0">
                      {sale.product.image ? (
                        <img
                          src={sale.product.image}
                          alt={sale.product.name}
                          className="w-full h-full rounded object-cover"
                        />
                      ) : (
                        <span className="text-xs text-gray-500">IMG</span>
                      )}
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-800">{sale.product.name}</p>
                      <p className="text-xs text-gray-500">ID {sale.product.id}</p>
                    </div>
                  </div>
                </td>

                {/* Customer */}
                <td className="px-4 py-3 whitespace-nowrap">
                  <p className="text-xs font-medium text-gray-800">{sale.customer.name}</p>
                  <p className="text-xs text-gray-500">{sale.customer.email}</p>
                </td>

                {/* Delivery */}
                <td className="px-4 py-3">
                  <p className="text-xs font-medium text-gray-800">{sale.delivery.country}</p>
                  <p className="text-xs text-gray-500">{sale.delivery.address}</p>
                </td>

                {/* Status - Separate Column */}
                <td className="px-4 py-3 whitespace-nowrap">
                  <StatusBadge status={sale.status} />
                </td>

                {/* Subtotal */}
                <td className="px-4 py-3 whitespace-nowrap">
                  <p className="text-xs text-gray-800">{sale.subtotal}</p>
                </td>

                {/* Shipping */}
                <td className="px-4 py-3 whitespace-nowrap">
                  <p className="text-xs text-gray-800">{sale.shipping}</p>
                </td>

                {/* Total */}
                <td className="px-4 py-3 whitespace-nowrap">
                  <p className="text-xs font-semibold text-gray-800">{sale.total}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

